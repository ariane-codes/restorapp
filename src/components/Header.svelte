<script lang="ts">
	import type { User } from "firebase/auth";


    import Brand from "./brand/Brand.svelte";
    import Button from "./button/Button.svelte";
    export let shouldShowButton: boolean;

    export let currentUser: {uid: string; email: string; name: string} | null;
</script>

<header class="header-wrapper">
    <Brand height={50} variant="BrandWithCircle" redirectsToHome={true}/>
    {#if shouldShowButton}
        {#if currentUser}
            <Button label={currentUser?.name.split(" ")[0] ?? ""}/>
        {:else}
            <Button href={"/login"} label={"Login"}/>
        {/if}
        
    {/if}
    
</header>

<style lang="scss">
    .header-wrapper {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 15px;
    }
</style>
