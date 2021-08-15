<template>
  <div class="flex flex-col">
    <loading v-if="loading" />
    <div v-else class="flex flex-col">
      <div>
        <h1 class="text-xl p-2">{{movie.original_title}}</h1>
        <img :src="'https://image.tmdb.org/t/p/w500'+movie.poster_path" alt="Image" class="p-2">
      </div>
      <div class="max-w-2xl p-2">
        <p>{{movie.overview}}</p>
      </div>
      <div>
        <button class="border-2 w-32 h-10 m-2" @click="backPage">back page</button>
        <button class="border-2 w-32 h-10 m-2" @click="nextPage">next page</button>
      </div>
    </div>

  </div>
</template>

<script>
import loading from '../../components/loading.vue'
export default {
  components: { loading },
    async asyncData({ params, $http }) {
      const api = 'http://api.themoviedb.org/3/movie/'+params.id+'?api_key=7ed6d2f608b8f66d8fd54d5f11c9e7d4'
      const movie = await $http.$get(api)
      return { movie }
    },
    data(){
      return {
        loading : false
    }
    },
    methods: {
      nextPage(){
        this.loading = true
        const nextId = (Number(this.$route.params.id) + 1)
        this.$router.push({ path: `/movies/${nextId}` })
        setTimeout(() => {  this.loading = false}, 2000);
        this.loading = false;
        console.log(this.loading)
      },
      backPage(){
        const nextId = (Number(this.$route.params.id) - 1)
        this.$router.push({ path: `/movies/${nextId}` })
      }      
    }
}
</script>

<style>

</style>