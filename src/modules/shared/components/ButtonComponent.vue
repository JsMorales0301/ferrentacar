<template>
    <button :class="props.typeButton">
        {{ props.nameButton }}
    </button>
</template>

<script setup lang="ts">
// import '@/assets/styles.css'
const props = defineProps({
    nameButton: {
        type: String,
        required: true
    },
    typeButton: {
        type: String,
        required: true
    }
})

</script>

<style scoped>

</style>