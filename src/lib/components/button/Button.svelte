
<Button
    on:click
    variant="outlined"
    class="button-rounded relative  {color}"
    style="width: {width}"
    {...$$restProps}
>
    
    
    <Label class="absolute center">{label}</Label>


    
    {#if loading}
        <Icon name="Loader" class="absolute animate-spin right-0 mr-4 justify-self-end "/>
    {/if}
</Button>

  
  
<script lang="ts">
    import "./Button.scss";
    import Button, { Label} from '@smui/button';
    import Icon from "../Icon.svelte";
    export let label: string;
    export let color: "primary" | "secondary" = "primary";
    export let width: string | undefined = undefined;
    export let loading: boolean = false;
</script>
