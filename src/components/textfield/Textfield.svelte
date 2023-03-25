<script lang="ts">
    import "./Textfield.scss";
    import Textfield from '@smui/textfield';
    import Icon from "../Icon.svelte";

    export let label: string | undefined = undefined;
    export let color: "primary-ra" | "secondary-ra" = "primary-ra";
    export let withLeadingIcon: boolean = false;
    export let withTrailingIcon: boolean = false;
    export let iconName: string | undefined = undefined;
    export let width: string = "350px";

    export let value: string = "";
    
</script>

<Textfield 
    withLeadingIcon={withLeadingIcon && typeof iconName === "string"}
    withTrailingIcon={withTrailingIcon && typeof iconName === "string"}
    variant="outlined" 
    bind:value={value} 
    {label}
    class="textfield-ra {color}"
    style="width: {width}"
    {...$$restProps}
>
    {#if withLeadingIcon || withTrailingIcon && typeof iconName === "string"}
        <Icon class="mdc-text-field__icon mdc-text-field__icon--leading" name={iconName}/>
    {/if}
</Textfield>