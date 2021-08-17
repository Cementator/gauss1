<template>
  <div class="flex flex-col">
    <div class="flex flex-col">
      <div>
        <h1 class="text-xl p-2">{{movie.original_title}}</h1>
        <img :src="'https://image.tmdb.org/t/p/w500'+movie.poster_path" alt="Image" class="p-2">
      </div>
      <div class="max-w-2xl p-2">
        <p>{{movie.overview}}</p>
        <button class="p-2 border-2" @click="addMovie" > Add or remove from Wishlist</button>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  components: {  },
    async asyncData({ params, $http, error, redirect }) {
      try {
      const api = 'http://api.themoviedb.org/3/movie/'+params.id+'?api_key=7ed6d2f608b8f66d8fd54d5f11c9e7d4'
      const movie = await $http.$get(api)
      return { movie }
    } catch (e) {
       redirect('/error')
      }
    },
    data(){
      
    },
    
    head() {
      return {
        title: this.movie.original_title,
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
      konzola(){
        console.log(this.params.id)
      },
      addMovie() {
        const wishListData = {
          name : this.movie.original_title,
          picture: this.movie.poster_path,
          id : this.movie.id
        }
        if(this.$store.state.movies===undefined) {
          this.$store.dispatch('addMovie', wishListData)
        } else if(this.$store.state.movies.some(movie=> movie.id===this.movie.id)){
          this.$store.dispatch('removeMovie', this.movie)
        } else {
          this.$store.dispatch('addMovie', wishListData)}
        }
    }
}
</script>

<style>

</style>