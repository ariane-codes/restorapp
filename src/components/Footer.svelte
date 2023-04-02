<script lang="ts">
	import Brand from "./brand/Brand.svelte";


</script>

<footer class="min-h-[10rem] bg-light-120 mt-10 grid md:grid-cols-2 p-4">
    <div class="flex items-center justify-center md:justify-start px-10">
        <Brand height={50} />
    </div>
    <div class="alt-font alt-font-s flex items-center md:items-end px-10 justify-center flex-col text-dark-80">
        <span class="py-1 md:text-right">Made with ❤️ by <a class="unset-visited text-dark-80 alt-font-s alt-font" href="https://github.com/ariane-codes">Ariane Ernandorena</a></span>
        <span class="py-1">Developed with SvelteKit</span>
    </div>
</footer>