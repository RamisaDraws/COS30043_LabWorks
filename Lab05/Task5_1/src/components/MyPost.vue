<script>
    export default{
        data(){
            return{
                newPost: '',
                postArray: [],

            }
        },
        methods:{
            addNewPost(){
                this.postArray.unshift(this.newPost)
                this.newPost = ''
            },
            deletePost(idx){
                this.postArray.splice(idx, 1)
            }
        }
    }

</script>
<template>
    <div class="container">
        <div class="row">
            <div class="col-12">
                <h1>Status Post App</h1>
            </div>
        </div>

        <div class="row">
            <div class="col-12">
                <label for="newPost" class="form-label">Status</label>
                <input type="text" id="newPost" class="form-control" v-model="newPost"/>
                <button class="btn btn-primary mt-2" @click="addNewPost">Post</button>
            </div>
        </div>

        <ul class="list-group">
            <li class="list-group-item mt-2" v-for="(post, index) in postArray" :key="index">
                {{post}}
                <button @click="deletePost(index)" class="btn btn-danger ms-2">Delete</button>
            </li>
        </ul>
    </div>
</template>
