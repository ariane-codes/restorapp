<script lang="ts">
    import Checkbox from '@smui/checkbox';
    import FormField from '@smui/form-field';
    import "./Checkbox.scss";
    export let checked: boolean = false;
    export let color: "primary-ra" | "secondary-ra" = "primary-ra";
    export let label: string = "";
</script>


<FormField>
    <Checkbox {checked} class="checkbox-ra {color}"/>
    <span slot="label" class="inter">{label}</span>
</FormField>