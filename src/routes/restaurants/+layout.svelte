<script lang="ts">
    import MediaQuery from "svelte-media-queries";
    import FiltersSidebar from './FiltersSidebar.svelte';

</script>

<div class="flex w-full justify-center">
    <div class=" w-full max-w-[1400px] flex">
        <MediaQuery query="(max-width:480px)" let:matches>
            {#if !matches}
                <FiltersSidebar />
            {/if}
        </MediaQuery>
        <slot/>
    </div>
</div>
