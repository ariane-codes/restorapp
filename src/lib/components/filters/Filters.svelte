<script lang="ts">
    import Accordion, { Panel, Header, Content } from "@smui-extra/accordion";
    import FormField from '@smui/form-field';
    import IconButton, { Icon } from "@smui/icon-button";
    import { ChefHat, ChevronDown, ChevronUp, Tag, Banknote, ThumbsUp, Star } from "lucide-svelte";
    import type { IFiltersState } from "./IFiltersState";
	import MapListButton from "./MapListButton.svelte";
	import Checkbox from "../checkbox/Checkbox.svelte";
	import Button from "../button/Button.svelte";
    import { Group } from "@smui/button";
	import { Categories, Tags } from "$lib/models";
	import { onMount } from "svelte";
    import { page } from "$app/stores";
    import { paramsToObject } from "$lib/utils/apiUtils";
	import { goto } from "$app/navigation";
	import { browser } from "$app/environment";


    $: filtersState = {
        checkedCategories: [],
        checkedTags: [],
        checkedPrice: [],
        checkedRating: []
    } as IFiltersState;


    let searchParams = $page.url.searchParams;
    let searchParamsObj = paramsToObject(searchParams);

    $: ["categories", "tags", "price", "rating"].forEach(key => {
        if (key in searchParamsObj) {
            let filterKey = `checked${key.charAt(0).toUpperCase()}${key.slice(1)}`
            filtersState[filterKey as keyof IFiltersState] = searchParamsObj[key];
        }
    })



    let categoriesOpen = true;
    let tagsOpen = false;
    let priceOpen = true;
    let ratingOpen = true;

    const starClasses = "text-accent-100 fill-accent-100"


</script>

<div class="flex flex-col px-5 items-center w-full h-full"> 
    
    <MapListButton/>

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
                    <Checkbox group={filtersState.checkedCategories}
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
                        <Checkbox group={filtersState.checkedTags}
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
                    <Button color="secondary" label="€" variant="unelevated"/>
                    <Button color="secondary" label="€€" variant="unelevated"/>
                    <Button color="secondary pressed" label="€€€" variant="unelevated"/>
                    <Button color="secondary" label="€€€€" variant="unelevated"/>
                    <Button color="secondary" label="€€€€€" variant="unelevated"/>
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
                    <Checkbox color="secondary-ra" group={filtersState.checkedRating} value={(i - 5)*-1}>
                        {#each Array(((i - 5)*-1)) as _}
                            <Star class={starClasses}/>
                        {/each}
                    </Checkbox>

                </FormField>
                {/each}
            </Content>
        </Panel>
    </Accordion>

    <div class="mt-auto">
        <Button
        width={"100%"} label="Add Restaurant" withLeadingIcon iconName="Plus" color="secondary"/>
    </div>
</div>
