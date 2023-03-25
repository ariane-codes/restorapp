<script lang="ts">
	import { invalidateAll } from "$app/navigation";
	import { auth } from "$lib/firebase/firebase.client";
	import { signOut } from "firebase/auth";

    import type { PageData } from "./$types";;

    export let data: PageData;
    const logout = async () => {
        console.log("signing out")
        await signOut(auth);
        await fetch("/logout", { method: "POST" });
        await invalidateAll();
    }
</script>




<div>
    {#if data.currentUser}
        WE'RE LOGGED IN
    {/if}
    <button on:click={logout}>Logout</button>
</div>