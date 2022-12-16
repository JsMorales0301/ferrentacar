<template>
    <button :class="props.typeButton">
        {{ props.nameButton }}
    </button>
</template>

<script lang="ts">
// import '@/assets/styles.css'

import { defineComponent } from 'vue';

export default defineComponent({
    props: {
        nameButton: {
            type: String,
            required: true
        },
        typeButton: {
            type: String,
            required: true
        }
    },
    
    setup(props){

        return{
            props
        }
    }
})

</script>

<style scoped>

</style>