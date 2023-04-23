<script lang="ts">
    import IconSliderInput from "$lib/components/IconSliderInput.svelte";
	import Button from "$lib/components/button/Button.svelte";
	import Textfield from "$lib/components/textfield/Textfield.svelte";
    import Dialog, { Header, Content, Actions} from "@smui/dialog";
	import IconButton from "@smui/icon-button";
    export let isOpen: boolean = false;
</script>

<Dialog
    bind:open={isOpen}
    fullscreen
    aria-labelledby="fullscreen-title"
    aria-describedby="fullscreen-content"
    
>
    <Header class="pt-5">
        <h2 id="fullscreen-title" class="text-secondary-100 text-3xl pt-6">Add a Review</h2>
        <IconButton action="close" class="material-icons">close</IconButton>
    </Header>

    <Content id="fullscreen-content">
        <div class="flex flex-col gap-6 items-left w-full my-4 ">
            <IconSliderInput />
            <Textfield label="Title" width="100%" color="secondary-ra"/>
            <Textfield textarea label="Review" width="100%" color="secondary-ra" input$rows={6}/>
        </div>
    </Content>

    <Actions>
        <div class="px-5 w-full flex justify-end py-4">
            <Button label="Save" color="secondary" width="10%" />
        </div>
    </Actions>

</Dialog>