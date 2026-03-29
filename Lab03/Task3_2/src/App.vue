<script setup>
import {ref, computed} from 'vue'

const units = [
     {code:'ICT10001', desc:'Problem Solving with ICT', cp:12.5, type:'Core'},
     {code:'COS10005', desc:'Web Development', cp:12.5, type:'Core'},
     {code:'INF10003', desc:'Introduction to Business Information Systems', cp:12.5, type:'Core'},
     {code:'INF10002', desc:'Database Analysis and Design', cp:12.5, type:'Core'},
     {code:'COS10009', desc:'Introduction to Programming', cp:12.5, type:'Core'},
     {code:'INF30029', desc:'Information Technology Project Management', cp:12.5, type:'Core'},
     {code:'ICT30005', desc:'Professional Issues in Information Technology', cp:12.5, type:'Core'},
     {code:'ICT30001', desc:'Information Technology Project', cp:12.5, type:'Core'},
     {code:'COS20001', desc:'User-Centred Design', cp:12.5, type:'Software Development'},
     {code:'TNE10005', desc:'Network Administration', cp:12.5, type:'Software Development'},
     {code:'COS20016', desc:'Operating System Configuration', cp:12.5, type:'Software Development'},
     {code:'SWE20001', desc:'Development Project 1 - Tools and Practices', cp:12.5, type:'Software Development'},
     {code:'COS20007', desc:'Object Oriented Programming', cp:12.5, type:'Software Development'},
     {code:'COS30015', desc:'IT Security', cp:12.5, type:'Software Development'},
     {code:'COS30043', desc:'Interface Design and Development', cp:12.5, type:'Software Development'},
     {code:'COS30017', desc:'Software Development for Mobile Devices', cp:12.5, type:'Software Development'},
     {code:'INF20012', desc:'Enterprise Systems', cp:12.5, type:'Systems Analysis'},
     {code:'ACC10007', desc:'Financial Information for Decision Making', cp:12.5, type:'Systems Analysis'},
     {code:'INF20003', desc:'Requirements Analysis and Modelling', cp:12.5, type:'Systems Analysis'},
     {code:'ACC20014', desc:'Management Decision Making', cp:12.5, type:'Systems Analysis'},
     {code:'INF30005', desc:'Business Process Management', cp:12.5, type:'Systems Analysis'},
     {code:'INF30003', desc:'Business Information Systems Analysis', cp:12.5, type:'Systems Analysis'},
     {code:'INF30020', desc:'Information Systems Risk and Security', cp:12.5, type:'Systems Analysis'},
     {code:'INF30001', desc:'Systems Acquisition & Implementation Management', cp:12.5, type:'Systems Analysis'}
	 ]

   const filterCode = ref('')
   const filterDesc = ref('')
   const filterType = ref('All')

   const filteredUnits = computed(() =>{
    return units
    .filter(unit=>{
      const matchCode = unit.code.toLocaleLowerCase().includes(filterCode.value.toLocaleLowerCase())
      const matchDesc = unit.desc.toLocaleLowerCase().includes(filterDesc.value.toLocaleLowerCase())
      const matchType = filterType.value === 'All' || unit.type === filterType.value
      return matchCode && matchDesc && matchType
    })
    .sort((a, b) => a.desc.localeCompare(b.desc))
   })
</script>

<template>
  <div class="container">
    <div class="row">
      <div class="col-12">
        <h1>Lookup App: Unit Search Filter</h1>

        <div class="row mb-3">
          <div class="col-4">
            <label>Code: </label>
            <input type="text" class="form-control" v-model="filterCode">
          </div>

          <div class="col-4">
            <label>Description: </label>
            <input type="text" class="form-control" v-model="filterDesc">
          </div>
          <div class="col-4">
            <label>Unit Type:</label> <br/>
            <div class="form-check" v-for="type in ['Core', 'Software Development', 'Systems Analysis', 'All']" :key="type">
              <input
              class="form-check-input"
              type="radio"
              :value="type"
              v-model="filterType"
              :id="type"
              />
              <label class="form-check-label" :for="type">{{type}}</label>
            </div>
          </div>
        </div>

        <div class="row">
          <div class="col-12">
            <table class="table table-bordered">
              <thead>
                <tr>
                  <th>Code</th>
                  <th>Description</th>
                  <th>Credit Points</th>
                  <th>Type</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="unit in filteredUnits" :key="unit.code">
                  <td>{{unit.code}}</td>
                  <td>{{unit.desc}}</td>
                  <td>{{unit.cp.toFixed(2)}}</td>
                  <td>{{unit.type}}</td>

                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </div>
  
</template>

<style scoped></style>
