
<Button
    on:click
    variant="outlined"
    class="button-rounded {color}"
    {href}
    style="width: {width}"
>
<Label>{label}</Label>
</Button>

  
  
<script lang="ts">
    import "./Button.scss";
    import Button, { Label, Icon } from '@smui/button';
    export let label: string;
    export let href: string | undefined = undefined;
    export let color: "primary" | "secondary" = "primary";
    export let width: string | undefined = undefined;
</script>
