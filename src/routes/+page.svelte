<script lang="ts">
	import { invalidateAll } from "$app/navigation";
	import { auth } from "$lib/firebase/firebase.client";
	import { signOut } from "firebase/auth";

    import type { PageData } from "./$types";;

    export let data: PageData;

</script>




<div>
    {#if data.currentUser}
        WE'RE LOGGED IN
    {/if}
</div>