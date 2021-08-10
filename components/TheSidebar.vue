<template>
    <div v-show="seen" class="flex flex-col min-h-full max-w-xl w-auto p-4 bg-yellow-200">
        <nuxt-link to="/movies">Movies</nuxt-link>
        <nuxt-link to="#">Zelje</nuxt-link>
    </div>
</template>

<script>
export default {
    props: {
        seen: {
            type: [Boolean],
            default: false
        }
    }

}
</script>

<style>

</style>