<script lang="ts">
    import Autocomplete from '@smui-extra/autocomplete';
    import Textfield from '$lib/components/textfield/Textfield.svelte';
	import IconButton, { Icon } from '@smui/icon-button';
    import type { PageData } from './$types';
	import { Banknote, Camera, ChefHat, ChevronDown, ChevronUp, Tag } from 'lucide-svelte';
	import { SvelteComponent, onMount } from 'svelte';
    import Accordion, { Panel, Header, Content } from "@smui-extra/accordion";    import { Loader } from '@googlemaps/js-api-loader';
	import Button from '$lib/components/button/Button.svelte';
	import { Categories, Tags } from '$lib/models';
	import Checkbox from '$lib/components/checkbox/Checkbox.svelte';
	import FormField from '@smui/form-field';
	import { Group } from '@smui/button';
	import { enhance } from '$app/forms';
    
    // export let data: PageData;
    let fileInput: HTMLInputElement;
    let autocompleteInput: SvelteComponent;
    let files: FileList;

    let categoriesOpen: boolean = false;
    let tagsOpen: boolean = false;
    let priceOpen: boolean = false;

    let restaurantName: string = "";
    let addressText: string = "";
    let addressValue: any;
    let categories: string[] = [];
    let tags: string[] = [];
    let price: number = 0;

    let autocompleteService: google.maps.places.AutocompleteService | undefined = undefined;
    let placesService: google.maps.places.PlacesService | undefined = undefined;
    let autocompleteOptions: any[];

    $: priceColor = [1, 2, 3, 4, 5].map((priceToCheck) =>
        price === priceToCheck ? "secondary pressed" : "secondary"
    );

    onMount(() => {
        const loader = new Loader({
            apiKey: import.meta.env.VITE_GOOGLEMAPS_APIKEY,
            version: "weekly",
            libraries: ["places"]
        });
        loader.loadCallback((e) => {
            if (e) {
                console.error(e);
                return;
            } else {
                autocompleteService = new google.maps.places.AutocompleteService();
                placesService = new google.maps.places.PlacesService(document.createElement("div"));
            }
        })
    })
    
    const autocompleteCallback = (predictions: google.maps.places.QueryAutocompletePrediction[] | null, 
    status: google.maps.places.PlacesServiceStatus) => {
        autocompleteOptions = predictions as any[];
    }

    $: if (autocompleteService && addressText !== "") {
        autocompleteService.getQueryPredictions({
        input: addressText,
    }, autocompleteCallback)}

    $: if (placesService && addressValue && addressValue.place_id && !addressValue.location) {
        placesService.getDetails({
            placeId: addressValue.place_id,
            fields: ["geometry"]
        }, (place, status) => {
            addressValue = {
                ...addressValue,
                location: place?.geometry?.location
            }
            autocompleteInput.blur();
        });
    };


</script>

<form method="POST" action="/restaurants" enctype="multipart/form-data"
class="flex flex-col items-center w-full mt-10" use:enhance>

    <h1 class="text-secondary-100 mb-6">Add a Restaurant</h1>
    
    <div class="my-2">
        <Textfield
            label="Restaurant Name"
            color="secondary-ra"
            bind:value={restaurantName}
            input$name="restaurantName"
        />
    </div>

    <div class="my-2">
        <Autocomplete
            options={autocompleteOptions}
            getOptionLabel={(option) => option.description}
            bind:value={addressValue}
            bind:text={addressText}
            bind:this={autocompleteInput}
        >
            <Textfield
                input$id="autocomplete"
                label="Address"
                color="secondary-ra"
                bind:value={addressText}
                />
        </Autocomplete>
        <input hidden type="hidden" name="locationDescription" value={addressValue?.description}/>
        <input hidden type="hidden" name="lat" value={addressValue?.location?.lat()}/>
        <input hidden type="hidden" name="lng" value={addressValue?.location?.lng()}/>
    </div>

    <Accordion multiple class="my-6 w-[400px]">
        <Panel variant="unelevated" bind:open={categoriesOpen}>
            <Header>
                <div class="flex items-center inter text-secondary-100 tracking-normal">
                    <ChefHat class="mr-3"/>
                    <strong>Categories</strong>
                </div>
                
                <IconButton class="text-secondary-100" toggle slot="icon" pressed={categoriesOpen}>
                    <Icon class="material-icons" on><ChevronDown/></Icon>
                    <Icon class="material-icons"><ChevronUp/></Icon>
                </IconButton>
            </Header>
            <Content class="flex flex-col"  style={"padding-top: 0; padding-bottom: 0"}>
                {#each Object.keys(Categories) as category}
                    <Checkbox bind:group={categories} checked={categories.includes(category)}
                    label={Categories[category]} color="secondary-ra" value={category}/>
                {/each}
            </Content>
        </Panel>

        <Panel variant="unelevated" bind:open={tagsOpen}>
            <Header>
                <div class="flex items-center inter text-secondary-100 tracking-normal">
                    <Tag class="mr-3"/>
                    <strong>Tags</strong>
                </div>
                
                <IconButton class="text-secondary-100" toggle slot="icon" pressed={tagsOpen}>
                    <Icon class="material-icons" on><ChevronDown/></Icon>
                    <Icon class="material-icons"><ChevronUp/></Icon>
                </IconButton>
            </Header>
            <Content class="flex flex-col" style={"padding-top: 0; padding-bottom: 0"}>
                {#each Object.keys(Tags) as tag}
                    <FormField>
                        <Checkbox bind:group={tags} checked={tags.includes(tag)}
                        label={Tags[tag]} color="secondary-ra" value={tag}/>

                    </FormField>
                {/each}
                
            </Content>
        </Panel>

        <Panel variant="unelevated" bind:open={priceOpen}>
            <Header>
                <div class="flex items-center inter text-secondary-100 tracking-normal">
                    <Banknote class="mr-3"/>
                    <strong>Price</strong>
                </div>
                
                <IconButton class="text-secondary-100" toggle slot="icon" pressed={priceOpen}>
                    <Icon class="material-icons" on><ChevronDown/></Icon>
                    <Icon class="material-icons"><ChevronUp/></Icon>
                </IconButton>
            </Header>
            <Content class="flex flex-col items-center" style={"padding-right: 0; padding-left: 0"}>
                <Group orientation="vertical" >
                    <Button bind:color={priceColor[0]} type="button"
                    label="€" variant="unelevated" on:click={() => {price = 1}}/>
                    <Button bind:color={priceColor[1]} type="button"
                    label="€€" variant="unelevated" on:click={() => {price = 2}}/>
                    <Button bind:color={priceColor[2]} type="button"
                    label="€€€" variant="unelevated" on:click={() => {price = 3}}/>
                    <Button bind:color={priceColor[3]} type="button"
                    label="€€€€" variant="unelevated" on:click={() => {price = 4}}/>
                    <Button bind:color={priceColor[4]} type="button"
                    label="€€€€€" variant="unelevated" on:click={() => {price = 5}}/>
                </Group>
                
            </Content>
        </Panel>
    </Accordion>

    <input hidden type="hidden" name="categories" value={categories}/>
    <input hidden type="hidden" name="tags" value={tags}/>
    <input hidden type="hidden" name="price" value={price}/>

    <div class="flex items-center w-[370px]">
        <input bind:this={fileInput} hidden type="file" accept=".png,.jpg" bind:files name="picture"/>
        <IconButton on:click={() => fileInput.click()} title="Add a picture" type="button">
            <Icon class="material-icons"><Camera/></Icon>
        </IconButton>
    
        <span>
            {files && files.length > 0 ? files[0].name : "No picture selected"}
        </span>    
    </div>


    <div class="mt-5">
        <Button label="Create" color="secondary" width="350px" type="submit"/>
    </div>

</form>