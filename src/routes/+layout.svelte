<script lang="ts">
    import "$theme/_restorapp-theme.scss";
    import "../app.css";
    import type { PageData } from './$types';
    import Header from "../components/Header.svelte";

    export let data: PageData;
    $: shouldShowButton = data.route !== "/login" && data.route !== "/signup";


</script>

<svelte:head>
	<title>RestorApp</title>
</svelte:head>
<div class="h-screen flex flex-col inter">
    <Header currentUser={data.currentUser} {shouldShowButton}/>
    <main class="grow flex">
        <slot/>
    </main>
    
</div>
