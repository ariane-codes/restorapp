<script lang="ts">
    import Accordion, { Panel, Header, Content } from "@smui-extra/accordion";
    import IconButton, { Icon } from "@smui/icon-button";
    import { ChefHat, ChevronDown, ChevronUp, Tag, Banknote, ThumbsUp, Star } from "lucide-svelte";
    import type { IFiltersState } from "./IFiltersState";
	import MapListButton from "./MapListButton.svelte";
	import Checkbox from "../checkbox/Checkbox.svelte";
	import Button from "../button/Button.svelte";
    import { default as SmuiButton, Group, Label } from "@smui/button";

    export const filtersState: IFiltersState = {
        layout: "list"
    };

    let categoriesOpen = true;
    let tagsOpen = true;
    let priceOpen = true;
    let ratingOpen = true;

    const starClasses = "text-accent-100 fill-accent-100"

</script>

<div class="flex flex-col px-5 py-5 items-center w-full h-full"> 
    
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
            <Content class="flex flex-col">
                <Group>
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
            <Content class="flex flex-col">
                <Checkbox color="secondary-ra">
                    <Star class={starClasses}/>
                    <Star class={starClasses}/>
                    <Star class={starClasses}/>
                    <Star class={starClasses}/>
                    <Star class={starClasses}/>
                </Checkbox>
                <Checkbox color="secondary-ra">
                    <Star class={starClasses}/>
                    <Star class={starClasses}/>
                    <Star class={starClasses}/>
                    <Star class={starClasses}/>
                </Checkbox>
                <Checkbox color="secondary-ra">
                    <Star class={starClasses}/>
                    <Star class={starClasses}/>
                    <Star class={starClasses}/>
                </Checkbox>
                <Checkbox color="secondary-ra">
                    <Star class={starClasses}/>
                    <Star class={starClasses}/>
                </Checkbox>
                <Checkbox color="secondary-ra">
                    <Star class={starClasses}/>
                </Checkbox>
            </Content>
        </Panel>
    </Accordion>

    <div class="mt-auto">
        <Button width={"100%"} label="Add Restaurant" withLeadingIcon iconName="Plus" color="secondary"/>
    </div>
</div>

