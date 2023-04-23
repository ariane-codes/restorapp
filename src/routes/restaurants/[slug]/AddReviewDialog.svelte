<script lang="ts">
	import { enhance, type SubmitFunction } from "$app/forms";
	import { goto } from "$app/navigation";
	import { page } from "$app/stores";
    import IconSliderInput from "$lib/components/IconSliderInput.svelte";
	import Button from "$lib/components/button/Button.svelte";
	import Textfield from "$lib/components/textfield/Textfield.svelte";
    import Dialog, { Header, Content, Actions} from "@smui/dialog";
	import IconButton from "@smui/icon-button";
    export let isOpen: boolean = false;

    let title: string = "";
    let body: string = "";
    let rating: number | undefined = undefined;

    const submitReviewEnhance: SubmitFunction = () => {
        return async ({ update, result }) => {
            if (result.status === 401) {
                // User isn't logged in, redirect to login
                // This shouldn't be necessary but just in case.
                goto("/login");
            }
            await update({ reset: false });
        };
    }

</script>

<form method="POST" action="/reviews" use:enhance={submitReviewEnhance}>
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
            <IconSliderInput name="rating" bind:score={rating} />
            <Textfield label="Title" width="100%" color="secondary-ra" bind:value={title} input$name="title"/>
            <Textfield textarea label="Review" width="100%" color="secondary-ra" input$rows={6} bind:value={body} input$name="body"/>
        </div>
    </Content>
    
    <Actions >
        <div class="px-5 w-full flex justify-end py-4">
            <Button label="Save" color="secondary" width="10%"/>
        </div>
    </Actions>
    
</Dialog>
</form>