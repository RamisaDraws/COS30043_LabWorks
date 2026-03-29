<script setup>
import {ref, computed} from 'vue'

const numWt = ref(0)
const numHt = ref(0)

const bmi = computed(() =>{
  const heightM = numHt.value/100
  return numWt.value/(heightM*heightM)
})
</script>

<template>
  <div class="container mt-4">
    <h1>Compute App</h1>
    <div class="row mt-4">
      <div class="col-4">
        <label>Enter weight in kilograms: </label>
      </div>
      <div class="col-4">
        <input type="number" class="form-control" v-model="numWt"/>
      </div>
    </div>
    <div class="row mt-2">
      <div class="col-4">
        <label>Enter height in centimeters: </label>
        
      </div>
      <div class="col-4">
        <input type="number" class="form-control" v-model="numHt"/>
      </div>
    </div>
    <div class="row mt-4">
      <p v-if="numWt>0 && numHt>0" >
        Computed BMI is: {{bmi.toFixed(2)}}
        <span v-if="bmi < 18.5"> Underweight</span>
        <span v-else-if="bmi < 25"> Normal</span>
        <span v-else-if="bmi < 30">Overweight</span>
        <span v-else> Obese</span>
      </p>
    </div>
  </div>
  
  
</template>

<style scoped></style>
