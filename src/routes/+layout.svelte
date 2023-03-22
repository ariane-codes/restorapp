<script>
  import { page } from "$app/stores";


    import { auth } from "$lib/firebase/firebase.client";
    import { onMount } from "svelte";
    import { authStore } from "$stores/authStore";
  import { invalidateAll } from "$app/navigation";
    onMount(() => {
        const unsubscribe = auth.onAuthStateChanged((user) => {
            invalidateAll();
            authStore.update((curr) => {
                return {...curr, isLoading: false, currentUser: user};
            })
        });
        return () => unsubscribe();
    })

</script>


<main class="mainContainer">
    
    <slot/>
</main>

<style>
    .mainContainer {
        min-height: 100vh;
        display: flex;
        flex-direction: column;
    }
</style>