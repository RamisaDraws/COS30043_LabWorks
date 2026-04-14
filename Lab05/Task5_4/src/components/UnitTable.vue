<script>
import {units} from '../units.js'

export default{
    data(){
        return{
            units
        }
    }
}
</script>

<template>
    <div class="container">
        <div class="row">
            <div class="col-12">
                <h1>
                    Unit Information System
                </h1>
            </div>
        </div>
        <div class="row">
            <div class="col-12">
                <table class="table table-striped">
                    <thead>
                        <tr>
                            <th>Code</th>
                            <th>Description</th>
                            <th>More Info</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="unit in units" :key="unit.code">
                            <td>{{ unit.code }}</td>
                            <td>{{ unit.desc }}</td>
                            <td>
                                <router-link :to="'/unit/' + unit.code">show details</router-link>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>

        <div class="row">
            <div class="col-12">
                <router-view></router-view>
            </div>
        </div>
    </div>
    
</template>
