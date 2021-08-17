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
    data () {
        return{
            isSidebarOpen : false,
            text : "Sidebar is closed"
        }
    },
    methods: {
        changetext() {
            this.isSidebarOpen = !this.isSidebarOpen
            if (this.isSidebarOpen === true) (
                this.text = "Sidebar is open"
            );
            else (this.text="Sidebar is closed")

        }

    }
 

}
</script>

<style>

</style>