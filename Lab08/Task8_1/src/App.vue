<script >
export default{
  data(){
    return{
      units: [],
      pageSize: 5,
      currentPage: 1,
    }
  },
  mounted(){
    fetch('units.json')
      .then(response => response.json())
      .then(data => {
      this.units = data;
      })
      .catch(error => console.error('Error fetching units:', error));
  },
  computed:{
    totalPageCount(){
      return Math.ceil(this.units.length / this.pageSize)
    },
    paginatedUnits(){
      const start = (this.currentPage - 1) * this.pageSize
      return this.units.slice(start, start + this.pageSize)
    }
  },
  methods:{
    changePage(page){
      this.currentPage = page
    }
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
              <th scope="col" id="code">Unit Codes</th>
              <th scope="col" id="desc">Description</th>
              <th scope="col" id="cp">Credit Point</th>
              <th scope="col" id="type">Type</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="unit in paginatedUnits" :key="unit.code">
              <td headers="code">{{ unit.code }}</td>
              <td headers="desc">{{ unit.desc }}</td>
              <td headers="cp">{{ unit.cp }}</td>
              <td headers="type">{{ unit.type }}</td>
            </tr>
          </tbody>
        </table>
        <paginate
          :page-count="totalPageCount"
          :click-handler="changePage"
          :prev-text="'Prev'"
          :next-text="'Next'"
          :container-class="'pagination justify-content-center'"
          > </paginate>
      </div>
    </div>
  </div>
  
</template>

<style></style>
