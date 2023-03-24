<script lang="ts">
    import "$theme/_restorapp-theme.scss";
    import type { PageData } from './$types';

    export let data: PageData;
    import { page } from "$app/stores";
    import { auth } from "$lib/firebase/firebase.client";
    import { onMount } from "svelte";
    import { authStore } from "$stores/authStore";
    import { invalidateAll } from "$app/navigation";
    import Header from "../components/Header.svelte";

    onMount(() => {
        const unsubscribe = auth.onAuthStateChanged((user) => {
            invalidateAll();
            authStore.update((curr) => {
                return {...curr, isLoading: false, currentUser: user};
            })
        });
        return () => unsubscribe();
    })

    $: shouldShowButton = data.route !== "/login" && data.route !== "/signup";
</script>

<svelte:head>
	<title>RestorApp</title>
</svelte:head>
<main class="mainContainer inter">
    <Header {shouldShowButton}/>
    <slot/>
</main>

<style lang="scss">
    .mainContainer {
        min-height: 100vh;
        display: flex;
        flex-direction: column;
    }
</style>