<script lang="ts">
    import Checkbox from '@smui/checkbox';
    import FormField from '@smui/form-field';
    import "./Checkbox.scss";
    export let checked: boolean = false;
    export let color: "primary-ra" | "secondary-ra" = "primary-ra";
    export let label: string | undefined = "";
    export let group: any[] | undefined = undefined;
</script>


<FormField>
    {#if group}
    <Checkbox {checked} class="checkbox-ra {color}" bind:group={group} {...$$restProps}/>
    {:else}
    <Checkbox {checked} class="checkbox-ra {color}" {...$$restProps}/>
    {/if}
    
    <span slot="label" class="inter">
        {#if $$slots.default}
            <slot/>
        {:else}
            {label}
        {/if}
    </span>
</FormField>