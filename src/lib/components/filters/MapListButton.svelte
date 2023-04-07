<script lang="ts">
    import { Map, LayoutList } from "lucide-svelte";
    export let currentLayout: "list" | "map" = "list";

    const ariaLabel = currentLayout === "list" ? "Switch to map" : "Switch to list";

</script>

<button 

class={`map-list-button 
${currentLayout == "list" ? "map-img" : "list-img"} relative bg-origin-border 
bg-center bg-no-repeat bg-cover w-full border-none rounded-lg`}
aria-label={ariaLabel}
title={ariaLabel}
>
    
    <div class="relative h-16 w-full flex justify-center items-center inter font-bold text-primary-120 inter-s gap-2 ">
        {#if currentLayout == "list"}
            <Map/> Map
        {:else if currentLayout == "map"}
            <LayoutList/> List
        {/if}
    </div>

</button>

<style lang="scss">

    $map-background-src: "https://firebasestorage.googleapis.com/v0/b/restorapp-svelte.appspot.com/o/others%2F01-03_City_map2v_generated.jpg?alt=media&token=bb32e223-589e-44ee-ba87-bb3d1b289839";
    $list-background-src: "https://img.freepik.com/free-vector/collection-sticky-note-illustrations_53876-8287.jpg?w=1380&t=st=1680721567~exp=1680722167~hmac=82af5093f8f9eb11fad68337aedd47e49d165f6c03379cd3a7e0f594fda3c9d4";

    .map-list-button::before {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        opacity: 0.6;
        background-repeat: no-repeat;
        background-size: cover;
        background-origin: border-box;
        background-position: center;
        div {
            position: relative;
        }
    }

    .map-img {
        &.map-list-button::before {
            background-image: url($map-background-src);
        }
    }

    .list-img {
        &.map-list-button::before {
            background-image: url($list-background-src);
            background-position-y: 30%;
        }
    }
</style>