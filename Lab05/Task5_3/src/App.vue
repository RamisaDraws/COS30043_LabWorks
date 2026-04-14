<script>
  import MyMenu from './components/MyMenu.vue'

  export default{
    components:{
      MyMenu
    }
  }
</script>

<template>
  <div class="container">
    <div class="row">
      <div class="col-12">
        <MyMenu :menu="['Home', 'Settings', 'About']"/>
      </div>
    </div>
  </div>
  

</template>

<style scoped></style>
