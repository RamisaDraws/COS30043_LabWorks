<script>
export default{
    props: ['menu']
}
</script>

<template>
    <ul>
        <li v-for="(item, index) in menu" :key="index">
            {{item}}
        </li>
    </ul>
    
</template>
