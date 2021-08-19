<template>
    <div class="flex flex-col w-screen">
        <div>
            <TheHeader :btn-text="text" @toggle-sidebar-open="changetext"/>
        </div>
        <div class="flex flex-row">
            <div>
                <TheSidebar :seen="isSidebarOpen"/>
            </div>
            <div class="w-screen h-screen">
                <Nuxt />
            </div>
        </div>
    </div>
    
    
</template>

<script>
export default {
    middleware({app, redirect}) {
    if (!app.$cookies.get("username")) {
      return redirect('http://localhost:3000/')
    }
    },
    data () {
        return{
            isSidebarOpen : false,
            text : "Sidebar is closed"
        }
    },
    mounted(){
        const listOfMovies = JSON.parse(localStorage.getItem('listOfMovies'))
        this.$store.dispatch('setListOfMovies', listOfMovies)
    },
    methods: {
        changetext() {
            this.isSidebarOpen = !this.isSidebarOpen
            if (this.isSidebarOpen === true) (
                this.text = "Sidebar is open"
            );
            else (this.text="Sidebar is closed")

        },
        konzola(){
            console.log(localStorage.getItem('listOfMovies'))
        }

    },
}
</script>

<style>

</style>