<script lang="ts">
    import MediaQuery from "svelte-media-queries";
    import FiltersSidebar from './FiltersSidebar.svelte';
    
</script>

<MediaQuery query="(max-width:480px)" let:matches>
    {#if !matches}
        <FiltersSidebar />
    {/if}
</MediaQuery>

<slot/>