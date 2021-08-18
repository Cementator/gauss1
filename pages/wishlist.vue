<template>
    <div class="flex flex-wrap min-h-full w-screen">
        <div class="flex flex-wrap">
        <movieComp v-for="movie in $store.state.movies" 
          :key="movie.id" 
          :movie-title="movie.name" 
          :base-img-path="movie.picture"
          :movie-id="movie.id" />
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style>

</style>