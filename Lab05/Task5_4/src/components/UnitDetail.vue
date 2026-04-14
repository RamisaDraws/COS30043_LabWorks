<script>
import { units } from '../units.js'
import { useRoute } from 'vue-router'
import { computed } from 'vue'

export default {
    setup() {
        const route = useRoute()

        const filteredUnit = computed(() => {
            return units.find(unit => unit.code === route.params.id)
        })

        return { filteredUnit }
    }
}
</script>

<template>
    <div class="container" v-if="filteredUnit">
        <div class="row">
            <div class="col-12">
                <h2>Unit Code: {{ filteredUnit.code }}</h2>
            </div>
        </div>

        <div class="row">
            <div class="col-12">
                <ul class="list-group">
                    <li class="list-group-item">{{ filteredUnit.code }}</li>
                    <li class="list-group-item">{{ filteredUnit.desc }}</li>
                    <li class="list-group-item">{{ filteredUnit.cp }}</li>
                    <li class="list-group-item">{{ filteredUnit.type }}</li>
                </ul>
            </div>
        </div>
    </div>
</template>