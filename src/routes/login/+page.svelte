<script lang="ts">

    import type { ActionData, PageData } from './$types';
    import Textfield from '../../components/textfield/Textfield.svelte';
    import Button from '../../components/button/Button.svelte';
	import Checkbox from '../../components/checkbox/Checkbox.svelte';
	import { enhance, type SubmitFunction } from '$app/forms';
	import { goto } from '$app/navigation';
    export let data: PageData;
    export let form: ActionData;

    let email: string = "";
    let password: string = "";
    let rememberMe: boolean = false;
    let loading: boolean = false;

    $: if (data.currentUser) {
        goto("/");
    }

    const loginEnhance: SubmitFunction = () => {
        // Do something before the form submits
        loading = true;

        return async ({ update }) => {
            // Do something after the form submits
            loading = false;
            await update({ reset: false });
        }; 
    }

</script>

<form method="POST" class="grow flex flex-col items-center p-5" use:enhance={loginEnhance}>
    <h1 class="p-5 mt-10 mb-5 text-4xl">Login</h1>

    <div class="my-2">
        <Textfield
            label="Email"
            withLeadingIcon
            iconName="Mail"
            color="secondary-ra"
            bind:value={email}
            type="email"
            input$name="email"
        />
    </div>

    <div class="my-2">
        <Textfield 
            label="Password"
            withLeadingIcon
            iconName="Key"
            color="secondary-ra"
            bind:value={password}
            type="password"
            input$name="password"
        />
    </div>

    <div class="my-1 -ml-3 w-[360px] flex justify-between items-center">
        <Checkbox label="Remember me" checked={rememberMe} color="secondary-ra"/>
        <a class="text-sm italic" href="/restore-password">Forgot password?</a>
    </div>

    {#if form?.errorCode}
        <span class="text-red-500 text-sm">
            Wrong credentials.
        </span>
    {/if}

    <div class="mt-4">
        <Button label="Login" color="secondary" width="300px" type="submit" {loading}/>
    </div>

    <div class="text-sm my-1 mt-4 flex w-[350px]">
        <a target="_self" class="unset-visited" href="/signup">
            <span>
                Don't have an account?
                <span class="font-bold">Sign Up.</span>
            </span>
        </a>
        
    </div>    
    
</form>