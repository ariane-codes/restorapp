<script lang="ts">
    import "./Textfield.scss";
    import Textfield from '@smui/textfield';
    import Icon from "@smui/textfield/icon";
    import HelperText from '@smui/textfield/helper-text';
    import { Skull, SkullIcon } from "lucide-svelte";
    let valueC = '';
    export let label: string | undefined = undefined;

    
</script>

<Textfield 
    withLeadingIcon
    variant="outlined" 
    bind:value={valueC} 
    {label}
    class="textfield-ra"
>
    <!-- <Icon slot="leadingIcon" class="material-icons">email</Icon> -->
    <Skull class="mdc-text-field__icon mdc-text-field__icon--leading"/>
</Textfield>