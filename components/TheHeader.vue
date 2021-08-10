<template>
    <div class="h-24 min-w-full border-b-2 border-gray-100 bg-green-100">
        <button class="p-2 bg-red-100" @click="$emit('toggle-sidebar-open')"> {{btnText}} </button>
        <nuxt-link class="p-2 bg-blue-100" to="/">Back</nuxt-link>
    </div>
</template>

<script>
export default {
    props: {
        btnText: {
            type: [String],
            default: ''
        }
    }

}
</script>

<style>

</style>