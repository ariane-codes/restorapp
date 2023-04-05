<script lang="ts">
    import type { LayoutData } from './$types';
	import FiltersSidebar from './FiltersSidebar.svelte';
    
    export let data: LayoutData;
</script>


<FiltersSidebar />
<slot>

</slot>