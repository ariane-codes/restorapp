<script lang="ts">
    import Accordion, { Panel, Header, Content } from "@smui-extra/accordion";
    import IconButton, { Icon } from "@smui/icon-button";
    import { ChefHat, ChevronDown, ChevronUp, Tag } from "lucide-svelte";
    import type { IFiltersState } from "./IFiltersState";
	import MapListButton from "./MapListButton.svelte";
	import Checkbox from "../checkbox/Checkbox.svelte";

    export const filtersState: IFiltersState = {
        layout: "list"
    };

    let categoriesOpen = true;
    let tagsOpen = true;

</script>

<div class="flex flex-col px-5 py-5 items-center w-full"> 
    
    <MapListButton currentLayout={filtersState.layout}/>

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
            <Content class="flex flex-col">
                <Checkbox label="American" color="secondary-ra" />
                <Checkbox label="American" color="secondary-ra"/>
                
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
            <Content class="flex flex-col">
                <Checkbox label="American" color="secondary-ra" />
                <Checkbox label="American" color="secondary-ra"/>
                
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
            <Content class="flex flex-col">
                <Checkbox label="American" color="secondary-ra" />
                <Checkbox label="American" color="secondary-ra"/>
                
            </Content>
        </Panel>
    </Accordion>


</div>

