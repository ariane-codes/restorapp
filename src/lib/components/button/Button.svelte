
<Button
    on:click
    variant={variant}
    class="button-rounded relative  {color}"
    style="width: {width}"
    {...$$restProps}
>
    
    {#if withLeadingIcon && typeof iconName === "string"}
        <Icon name={iconName} class={`fill-${color}-100 mr-2`}/>

    {/if}
    
    <Label class="absolute center">{label}</Label>

    {#if withTrailingIcon && typeof iconName === "string"}
        <Icon name={iconName} class={`fill-${color}-100 mr-2`}/>
    {/if}
    
    {#if loading }
        <Icon name="Loader" class="absolute animate-spin right-0 mr-4 justify-self-end "/>
    {/if}
</Button>

  
  
<script lang="ts">
    import "./Button.scss";
    import Button, { Label } from '@smui/button';
    import Icon from "../Icon.svelte";
    export let label: string;
    export let color: "primary" | "secondary" | "secondary pressed" | "primary pressed" = "primary";
    export let width: string | undefined = undefined;
    export let loading: boolean = false;
    export let withLeadingIcon: boolean = false;
    export let withTrailingIcon: boolean = false;
    export let iconName: string | undefined = undefined;
    export let variant: 'text' | 'raised' | 'unelevated' | 'outlined' = "outlined";
</script>
