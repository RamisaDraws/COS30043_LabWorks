<script >
export default{
  data(){
    return{
      units: []
    }
  },
  mounted(){
    fetch('units.json')
      .then(response => response.json())
      .then(data => this.units = data)
  }
}
</script>

<template>
  <div class="container">
    <div class="row">
      <div class="col-12">
        <h1>Unit Table</h1>
      </div>
      <div class="table-responsive">
        <table class="table table-striped table-bordered">
          <thead>
            <tr>
              <th>Unit Codes</th>
              <th>Description</th>
              <th>Credit Point</th>
              <th>Type</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="unit in units" :key="unit.code">
              <td>{{ unit.code }}</td>
              <td>{{ unit.desc }}</td>
              <td>{{ unit.cp }}</td>
              <td>{{ unit.type }}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
  
</template>

<style></style>
