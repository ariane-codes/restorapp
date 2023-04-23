<script lang="ts">
    import Autocomplete from '@smui-extra/autocomplete';
    import Textfield from '$lib/components/textfield/Textfield.svelte';
	import IconButton, { Icon } from '@smui/icon-button';
    import type { PageData } from './$types';
	import { Camera } from 'lucide-svelte';
	import { SvelteComponent, onMount } from 'svelte';
    import { Loader } from '@googlemaps/js-api-loader';
	import { initAutocompleteService } from '$lib/maps/AutocompleteService';
	import Button from '$lib/components/button/Button.svelte';
    
    export let data: PageData;
    let fileInput: HTMLInputElement;
    let autocompleteInput: SvelteComponent;
    let files: FileList;

    let restaurantName: string = "";
    let addressText: string = "";
    let addressValue: any;
    let categories: string[] = [];
    let tags: string[] = [];
    let price: number = 0;

    let autocompleteService: google.maps.places.AutocompleteService | undefined = undefined;
    let placesService: google.maps.places.PlacesService | undefined = undefined;
    let autocompleteOptions: any[];
    

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

<form class="flex flex-col items-center w-full mt-10">

    <h1 class="text-secondary-100">Add a Restaurant</h1>
    
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
        <input hidden type="hidden" name="locationDescription" value={addressValue?.locationDescription}/>
        <input hidden type="hidden" name="latLong" value={addressValue?.location}/>

    </div>

    <div class="flex items-center w-1/4 min-w-[200px]">
        <input bind:this={fileInput} hidden type="file" accept=".png,.jpg" bind:files/>
        <IconButton on:click={() => fileInput.click()} title="Add a picture">
            <Icon class="material-icons"><Camera/></Icon>
        </IconButton>
    
        <span>
            {files && files.length > 0 ? files[0].name : "No picture selected"}
        </span>    
    </div>


    <div class="mt-5">
        <Button label="Create" color="secondary" width="350px"/>
    </div>

    
    
</form>