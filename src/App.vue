<template>
  <div id="app">
    <component :is="layout ">
      <router-view/>
    </component>
  </div>
</template>

<script>
    import EmptyLayout from '@/layouts/EmptyLayout'
    import MainLayout from '@/layouts/MainLayout'
    export default {
        computed: {
            layout() {
                return (this.$route.meta.layout || 'empty') + '-layout'
            }
        },
        components: {
            EmptyLayout, MainLayout
        }
    }
</script>

<style>
  body {
    font-family: 'Cabin', Helvetica, Arial, sans-serif;
    font-size: 15px;
    line-height: 25px;
  }
  h1 {
    font-family: 'Lobster', Georgia, Times, serif;
    font-size: 70px;
    line-height: 100px;
    color: #76B7CA;
  }

  /* Chrome, Safari, Edge, Opera */
  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  /* Firefox */
  input[type=number] {
    -moz-appearance: textfield;
  }
</style>
