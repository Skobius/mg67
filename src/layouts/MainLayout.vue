<template>
    <div>
        <div class="app-main-layout">
            <Navbar/>

            <Footer/>
        </div>
    </div>
</template>

<script>
    import Navbar from '@/components/app/Navbar'
    import Footer from "../components/app/Footer";
    export default {
        name: 'main-layout',
        data () {
          return {
              drawer: false
          }
        },
        components: {
            Footer,
            Navbar
        },
    }
</script>
