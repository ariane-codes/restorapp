<script lang="ts">
    import Brand from "$lib/assets/brand/Brand.svg";
    import BrandWithCircle from "$lib/assets/brand/BrandWithCircle.svg";
    import Logo from "$lib/assets/brand/Logo.svg";
    export let height: number | undefined = undefined;
    export let variant: "Brand" | "BrandWithCircle" | "Logo" = "Brand";
    export let redirectsToHome: boolean = false;

    let src: string;
    switch(variant) {
        case "Brand":
            src = Brand;
            break;
        case "BrandWithCircle":
            src = BrandWithCircle;
            break;
        case "Logo":
            src = Logo;
            break;
    }

</script>

<style>
    .block-ra {
        display: block;
    }
</style>

{#if redirectsToHome}
    <a href="/">
        <img
        class="block-ra"
        height={height}
        src={src}
        alt="RestorApp"
        />
    </a>
{:else}
    <img
        class="block-ra"
        height={height}
        src={src}
        alt="RestorApp"
    />
{/if}

