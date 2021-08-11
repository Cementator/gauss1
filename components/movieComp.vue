<template>
  <div class="flex flex-col bg-gray-100 p-2">
      <h1 class="text-xl">{{movieTitle}}</h1>
      <img :src="'https://image.tmdb.org/t/p/w300'+baseImgPath" alt="Image">
      <nuxt-link to="/movies/">Details</nuxt-link>
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
  }

}
</script>

<style>

</style>