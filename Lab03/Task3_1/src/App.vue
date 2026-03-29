<script>
  export default{
    data(){
      return{
        strName: '',
        actualName: 'Issac'
      }
    }
  }
</script>

<template>
<div class="container">
  <div class="row">
    <div class="col-12">
      <h1>String Test</h1>
    </div>
    
  </div>
  <div class="row">
    <div class="col-12">
      
      <label for="strName">Please enter your name</label>
      <input type="text" id="strName" v-model="strName"/>
    
    </div>
  </div>
  <div class="row">
    <div class="col-12">
      <p v-show="strName.toLowerCase() == actualName.toLowerCase()">Awrsome Name</p>
      <p v-show="strName != '' && strName.toLowerCase() !== actualName.toLowerCase()">{{strName}}, is not my name</p>
    </div>
  </div>
</div>
  
  
</template>

<style scoped></style>
