<script lang="ts">

    import type { PageData } from './$types';
    import Textfield from '../../components/textfield/Textfield.svelte';
	import Checkbox from '../../components/checkbox/Checkbox.svelte';
    export let data: PageData;

    let email: string = "";
    let password: string = "";
    let rememberMe: boolean = false;

    if (data.currentUser) {
        // Redirect back to home if user is logged in.
        window.location.href = "/";
    }

</script>

<form class="grow flex flex-col items-center p-5">
    <h1 class="p-5 my-10 text-4xl">Login</h1>

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

    <div class="my-1">
        <Checkbox label="Remember me" checked={rememberMe} color="secondary-ra"/>
    </div>
    
</form>