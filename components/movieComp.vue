<template>
  <div class="flex flex-col bg-gray-100 p-2">
      <h1 else class="text-xl">{{movieTitle}}</h1>
      <img :src="'https://image.tmdb.org/t/p/w300'+baseImgPath" alt="Image">
      <div class="flex mt-1">
        <nuxt-link :to="`/movies/${movieId}`" class="border-2 p-2" >Details</nuxt-link>
        <h1 v-if="$store.state.movies.map(x => x.id).indexOf(movieId)>=0" class="ml-28 p-2"> in your wishlist</h1>
      </div>
  </div>
</template>

<script>
export default {
  props: {
    movieTitle: {
      type: String,
      default: "Title"
    },
    baseImgPath: {
      type: String,
      default: "/464N3J1i6L5SsazPmX9m3q1GiZ3.jpg"
    },
    movieId :{
      type: Number,
      default: 436969
    }
  },
  data (){
    return {
    }
  },
  methods: {
    
  }
  
  
  
}
</script>

<style>

</style>