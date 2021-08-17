<template>
    <div class="flex flex-wrap min-h-full w-screen">
        <p v-if="$fetchState.pending">Fetching movies...</p>
        <p v-else-if="$fetchState.error">An error occurred :(</p>
        <div v-else class="flex flex-wrap">
        <movieComp v-for="result in movies.results" 
          :key="result.id" 
          :movie-title="result.original_title" 
          :base-img-path="result.poster_path"
          :movie-id="result.id" />
        </div>
    </div>
</template>

<script>
import movieComp from '../../components/movieComp.vue'
export default {
  components: { movieComp },
    
    data() {
      return {
        movies: [],
        apiKey: "7ed6d2f608b8f66d8fd54d5f11c9e7d4",
        baseURL: "http://api.themoviedb.org/3/discover/movie?api_key=7ed6d2f608b8f66d8fd54d5f11c9e7d4",
        }
    },
    fetchDelay: 1000,
    async fetch() {
      this.movies = await fetch(
        this.baseURL
      ).then(res => res.json())
      console.log(this.movies)

    },
    head() {
      return {
        title: "List of movies",
        meta: [
          {
            hid: 'description',
            name: 'description',
            content: 'Home page description'
          }
        ]
      }
    },
    methods: {
    }
}
</script>

<style>

</style>