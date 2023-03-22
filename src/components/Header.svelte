<script lang="ts">
    import Brand from "./brand/Brand.svelte";
  import Button from "./Button.svelte";
</script>

<header class="header-wrapper">
    <Brand height={50} variant="BrandWithCircle"/>
    <Button on:click={(e => console.log("HEYA"))}/>
</header>

<style lang="scss">
    .header-wrapper {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 15px;
    }
</style>
