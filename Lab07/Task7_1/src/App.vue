<script>
export default{
  data(){
    return{
      posts: []
    }
  },
  mounted(){
    $.getJSON("https://jsonplaceholder.typicode.com/posts",
      (data) => this.posts = data
    )
  }
}
</script>

<template>
  <div class="container">
    <div class="row">
      <div class="col-12">
        <h1>Posts</h1>
      </div>
    </div>
    <ul class="list-group">
        <li class="list-group-item" v-for="post in posts" :key="post.id">
          {{post.id}} - {{post.title}}
        </li>
    </ul>
  </div>
  
</template>

<style scoped></style>
