<script lang="ts">
    import type { PageData } from './$types';
    
    export let data: PageData;
</script>

<div>
    Hello {data.restaurant.name}
</div>