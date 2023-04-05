<script lang="ts">
    export let currentLayout: "list" | "map" = "list";
    export let currentUrl: " ";
    const mapBackgroundSrc: string = "https://firebasestorage.googleapis.com/v0/b/restorapp-svelte.appspot.com/o/others%2F01-03_City_map2v_generated.jpg?alt=media&token=bb32e223-589e-44ee-ba87-bb3d1b289839";
    const listBackgroundSrc: string = "https://img.freepik.com/free-vector/collection-sticky-note-illustrations_53876-8287.jpg?w=1380&t=st=1680721567~exp=1680722167~hmac=82af5093f8f9eb11fad68337aedd47e49d165f6c03379cd3a7e0f594fda3c9d4";

</script>

<button 
style="background-image: url({mapBackgroundSrc});"
class="bg-origin-border bg-center bg-no-repeat bg-cover
w-full border-none"
>
    <div class="h-10 w-full ">
        LALLAA
    </div>
</button>