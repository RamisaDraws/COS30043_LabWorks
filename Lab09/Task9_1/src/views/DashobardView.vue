<script>
export default {
    data() {
        return {
            units: [],
            currentPage: 1,
            pageSize: 5,
            tab: 0,
            newUnit: { code: '', desc: '', cp: '', type: '' },
            insertMsg: '',
            editUnit: { code: '', desc: '', cp: '', type: '' },
            updateMsg: '',
            deleteCode: '',
            deleteMsg: ''
        }
    },
    mounted() {
        this.loadUnits();
    },
    computed: {
        totalPages() {
            return Math.ceil(this.units.length / this.pageSize);
        },
        paginatedUnits() {
            const start = (this.currentPage - 1) * this.pageSize;
            return this.units.slice(start, start + this.pageSize);
        }
    },
    methods: {
        changePage(page) {
            this.currentPage = page;
        },
        async insertUnit() {
            const { valid } = await this.$refs.insertForm.validate()
            if (!valid) return
            fetch('http://localhost/resources/apis.php/', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(this.newUnit)
            })
                .then(() => {
                    this.insertMsg = 'Insert successful'
                    this.loadUnits()
                })
        },
        loadUnits() {
            fetch('http://localhost/resources/apis.php/')
                .then(response => response.json())
                .then(data => {
                    this.units = data;
                })
        },
        async updateUnit() {
            const { valid } = await this.$refs.updateForm.validate()
            if (!valid) return
            fetch('http://localhost/resources/apis.php/code/' + this.editUnit.code, {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(this.editUnit)
            })
                .then(r => r.text())
                .then(data => {
                    this.updateMsg = data > 0 ? 'Update successful' : 'No record found'
                    this.loadUnits()
                })
        },
        deleteUnit() {
            if (!this.deleteCode) { this.deleteMsg = 'Please enter a unit code.'; return }
            fetch('http://localhost/resources/apis.php/code/' + this.deleteCode, {
                method: 'DELETE'
            })
                .then(r => r.text())
                .then(data => {
                    this.deleteMsg = data > 0 ? 'Delete successful' : 'No record found'
                    this.loadUnits()
                })
        }
    }
}
</script>

<template>
    <v-container>
        <v-card class="pa-4 mt-5">
            <v-card-title>Unit Table</v-card-title>
            <v-tabs v-model="tab">
                <v-tab>Units</v-tab>
                <v-tab>Insert</v-tab>
                <v-tab>Update</v-tab>
                <v-tab>Delete</v-tab>
            </v-tabs>
            <v-window v-model="tab">
                <v-window-item>
                    <div class="container">
                        <div class="row">
                            <div class="col-12">
                                <h1>Unit Table</h1>
                            </div>
                        </div>
                        <div class="table-responsive">
                            <table class="table table-striped">
                                <caption>List of Units</caption>
                                <thead>
                                    <tr>
                                        <th scope="col" id="code">Unit Code</th>
                                        <th scope="col" id="desc">Unit Desc</th>
                                        <th scope="col" id="cp">Credit Points</th>
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
                            <paginate :page-count="totalPages" :click-handler="changePage"
                                :container-class="'pagination justify-content-center'" :prev-text="'<<'"
                                :next-text="'>>'"></paginate>
                        </div>
                    </div>
                </v-window-item>
                <v-window-item>
                    <h2>Insert Unit</h2>
                    <v-form ref="insertForm">
                        <v-text-field v-model="newUnit.code" label="Unit Code" :rules="[v => !!v || 'Required']"></v-text-field>
                        <v-text-field v-model="newUnit.desc" label="Unit Description" :rules="[v => !!v || 'Required']"></v-text-field>
                        <v-text-field v-model="newUnit.cp" label="Credit Points" type="number" :rules="[v => !!v || 'Required']"></v-text-field>
                        <v-text-field v-model="newUnit.type" label="Type" :rules="[v => !!v || 'Required']"></v-text-field>
                        <p>{{ insertMsg }}</p>
                        <v-btn color="primary" @click="insertUnit">Insert</v-btn>
                    </v-form>
                </v-window-item>
                <v-window-item>
                    <div class="container">
                        <v-form ref="updateForm">
                            <v-text-field v-model="editUnit.code" label="Unit Code" :rules="[v => !!v || 'Required']" />
                            <v-text-field v-model="editUnit.desc" label="Description" :rules="[v => !!v || 'Required']" />
                            <v-text-field v-model="editUnit.cp" label="Credit Points" :rules="[v => !!v || 'Required']" />
                            <v-text-field v-model="editUnit.type" label="Type" :rules="[v => !!v || 'Required']" />
                            <p>{{ updateMsg }}</p>
                            <v-btn color="primary" @click="updateUnit">Update</v-btn>
                        </v-form>
                    </div>
                </v-window-item>
                <v-window-item>
                    <div class="container">
                        <v-text-field v-model="deleteCode" label="Unit Code" :rules="[v => !!v || 'Required']" />
                        <p>{{ deleteMsg }}</p>
                        <v-btn color="error" @click="deleteUnit">Delete</v-btn>
                    </div>
                </v-window-item>
            </v-window>
        </v-card>
    </v-container>
</template>