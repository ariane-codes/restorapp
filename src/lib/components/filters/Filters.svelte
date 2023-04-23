<script lang="ts">
    import Accordion, { Panel, Header, Content } from "@smui-extra/accordion";
    import FormField from '@smui/form-field';
    import IconButton, { Icon } from "@smui/icon-button";
    import { ChefHat, ChevronDown, ChevronUp, Tag, Banknote, ThumbsUp, Star } from "lucide-svelte";
	import MapListButton from "./MapListButton.svelte";
	import Checkbox from "../checkbox/Checkbox.svelte";
	import Button from "../button/Button.svelte";
    import { Group } from "@smui/button";
	import { Categories, Tags } from "$lib/models";
    import { page } from "$app/stores";
    import { paramsToObject } from "$lib/utils/apiUtils";
	import { filtersStore, type IFiltersStore } from "$lib/stores/filtersStore";
	import { onMount } from "svelte";
	import { goto } from "$app/navigation";

    let categoriesOpen: boolean = true;
    let tagsOpen: boolean = false;
    let priceOpen: boolean = true;
    let ratingOpen: boolean = true;
    const starClasses: string = "text-accent-100 fill-accent-100";

    const handlePrice = (price: number) => {
        filtersStore.update((currentFilters: IFiltersStore) => {
            let newFilters = {...currentFilters};
            if (newFilters.checkedPrice.includes(price)) {
                newFilters.checkedPrice = newFilters.checkedPrice.filter(p => p !== price);
            } else {
                newFilters.checkedPrice.push(price);
            }
            return newFilters;
        });
    }

    $: priceColor = [1, 2, 3, 4, 5].map((price) =>
        $filtersStore.checkedPrice.includes(price) ? "secondary pressed" : "secondary"
    );

    onMount(() => {
        let searchParamsObj = paramsToObject($page.url.searchParams);
        filtersStore.update((currentFilters: IFiltersStore) => {
            let newFilters = {...currentFilters, mounted: true};
            ["categories", "tags", "price", "rating"].forEach(key => {
                if (key in searchParamsObj) {
                    let filterKey = `checked${key.charAt(0).toUpperCase()}${key.slice(1)}`
                    newFilters[filterKey as keyof IFiltersStore] = searchParamsObj[key];
                }
            })
            return newFilters;
        });
    });
</script>

<div class="flex flex-col px-5 items-center w-full h-full"> 
    
    <MapListButton/>

    <div class="mt-5">
        <Button on:click={() => goto("/restaurants/new")}
        width={"100%"} label="Add Restaurant" withLeadingIcon iconName="Plus" color="secondary"/>
    </div>

    <Accordion multiple class="my-6 w-full">
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
                    <Checkbox bind:group={$filtersStore.checkedCategories} checked={$filtersStore.checkedCategories.includes(category)}
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
                        <Checkbox bind:group={$filtersStore.checkedTags} checked={$filtersStore.checkedTags.includes(tag)}
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
                    <Button bind:color={priceColor[0]}
                    label="€" variant="unelevated" on:click={() => handlePrice(1)}/>
                    <Button bind:color={priceColor[1]}
                    label="€€" variant="unelevated" on:click={() => handlePrice(2)}/>
                    <Button bind:color={priceColor[2]}
                    label="€€€" variant="unelevated" on:click={() => handlePrice(3)}/>
                    <Button bind:color={priceColor[3]}
                    label="€€€€" variant="unelevated" on:click={() => handlePrice(4)}/>
                    <Button bind:color={priceColor[4]}
                    label="€€€€€" variant="unelevated" on:click={() => handlePrice(5)}/>
                </Group>
                
            </Content>
        </Panel>

        <Panel variant="unelevated" bind:open={ratingOpen}>
            <Header>
                <div class="flex items-center inter text-secondary-100 tracking-normal">
                    <ThumbsUp class="mr-3"/>
                    <strong>Rating</strong>
                </div>
                
                <IconButton class="text-secondary-100" toggle slot="icon" pressed={ratingOpen}>
                    <Icon class="material-icons" on><ChevronDown/></Icon>
                    <Icon class="material-icons"><ChevronUp/></Icon>
                </IconButton>
            </Header>
            <Content class="flex flex-col"  style={"padding-top: 0; padding-bottom: 0"}>
                {#each Array(5) as _sc, i}
                <FormField>
                    <Checkbox color="secondary-ra" bind:group={$filtersStore.checkedRating}
                    checked={$filtersStore.checkedRating.includes((i - 5)*-1)}
                    value={(i - 5)*-1}>
                        {#each Array(((i - 5)*-1)) as _}
                            <Star class={starClasses}/>
                        {/each}
                    </Checkbox>

                </FormField>
                {/each}
            </Content>
        </Panel>
    </Accordion>

    
</div>
