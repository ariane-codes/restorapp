<script lang="ts">

    import type { PageData } from './$types';
    import Textfield from '../../components/textfield/Textfield.svelte';
    import Button from '../../components/button/Button.svelte';
	import Checkbox from '../../components/checkbox/Checkbox.svelte';
    export let data: PageData;

    let email: string = "";
    let name: string = "";
    let password: string = "";
    let rememberMe: boolean = false;

    if (data.currentUser) {
        // Redirect back to home if user is logged in.
        window.location.href = "/";
    }

</script>

<form class="grow flex flex-col items-center p-5">
    <h1 class="p-5 mt-10 mb-5 text-4xl">Sign Up</h1>

    <div class="my-2">
        <Textfield 
            label="Name"
            withLeadingIcon
            iconName="User"
            color="secondary-ra"
            bind:value={name}
        />
    </div>

    <div class="my-2">
        <Textfield 
            label="Email"
            withLeadingIcon
            iconName="Mail"
            color="secondary-ra"
            bind:value={email}
            type="email"
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
        />
    </div>

    <div class="my-1 -ml-3 w-[360px] flex justify-between items-center">
        <Checkbox label="Remember me" checked={rememberMe} color="secondary-ra"/>
        <a class="text-sm italic" href="/restore-password">Forgot password?</a>
    </div>

    <div class="mt-4">
        <Button label="Login" color="secondary" width="300px"/>
    </div>

    <div class="text-sm my-1 mt-4 flex w-[350px]">
        <a class="unset-visited" href="/login">
            <span>
                Already have an account?
                <span class="font-bold">Login.</span>
            </span>
        </a>
        
    </div>    
    
</form>