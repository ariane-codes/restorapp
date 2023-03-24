<script lang="ts">
    import { Skull } from "lucide-svelte";

    import type { PageData } from './$types';
    import Textfield from '../../components/textfield/Textfield.svelte';
    export let data;

    let email: string = "";
    $: console.log("HERE", email);

    if (data.currentUser) {
        // Redirect back to home if user is logged in.
        window.location.href = "/";
    }

</script>

<form class="login-container flex">
    <h1>Login</h1>
    <Textfield 
            label="Email"
            withLeadingIcon
            iconName="Mail"
            color="secondary-ra"
            bind:value={email}
        />
</form> 