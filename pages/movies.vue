<template>
    <div>
        <h1>Most popular movies</h1>
    <ul>
      <li v-for="result in movies.results" :key="result.id">{{ result.original_title }}</li>
    </ul>
    </div>
</template>

<script>
export default {
    data() {
      return {
        movies: [],
        apiKey: "7ed6d2f608b8f66d8fd54d5f11c9e7d4",
        baseURL: "http://api.themoviedb.org/3/discover/movie?api_key=7ed6d2f608b8f66d8fd54d5f11c9e7d4"
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