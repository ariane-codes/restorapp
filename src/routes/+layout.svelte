<script lang="ts">
    import "$theme/_restorapp-theme.scss";
    import "../app.css";
    import type { PageData } from './$types';
    import Header from "$lib/components/Header.svelte";
	import Footer from "$lib/components/Footer.svelte";

    export let data: PageData;
    $: isLoginOrSignUp = data.route === "/login" || data.route === "/signup";


</script>

<svelte:head>
	<title>RestorApp</title>
</svelte:head>
<div class="h-screen flex flex-col inter">
    <Header currentUser={data.currentUser} shouldShowButton={!isLoginOrSignUp}/>
    <main class="grow flex overflow-y-hidden">
        <slot/>
    </main>

    {#if !isLoginOrSignUp}
        <Footer/>
    {/if}

</div>
