<template>
  <div>
      <p>id is {{$route.params.id}}</p>
  </div>
</template>

<script>
export default {
    data() {
      return {
        movies: [],
        apiKey: "7ed6d2f608b8f66d8fd54d5f11c9e7d4",
        baseURL: "http://api.themoviedb.org/3/discover/movie?api_key=7ed6d2f608b8f66d8fd54d5f11c9e7d4",
        }
    },
    
    async fetch() {
      this.movies = await fetch(
        this.baseURL
      ).then(res => res.json())
      console.log(this.movies)

    },
}
</script>

<style>

</style>