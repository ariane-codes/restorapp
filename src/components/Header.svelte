<script lang="ts">
    import Brand from "./brand/Brand.svelte";
    import Button from "./button/Button.svelte";

    export let shouldShowButton: boolean;

</script>

<header class="header-wrapper">
    <Brand height={50} variant="BrandWithCircle" redirectsToHome={true}/>
    {#if shouldShowButton}
        <Button href={"/login"} label={"Login"}/>
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
