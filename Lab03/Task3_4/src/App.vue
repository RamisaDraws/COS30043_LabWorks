<script setup>
import {ref, computed} from 'vue'

const username = ref('')
const password = ref('')
const rePassword = ref('')

const selectedOS = ref('')
const phones = ref([
	{model:'HTC 10', os:'Android'},
	{model:'Nokia 6', os:'Android'},
	{model:'Samsung Galaxy 20 Ultra', os:'Android'},
	{model:'IDD VIOS Non Windows', os:'Android'},
	{model:'iPhone X', os:'IOS'},
	{model:'iPhone Xs Max', os:'IOS'},
	{model:'iPhone 11 Pro Max', os:'IOS'},
	{model:'IDD Windows Non Android', os:'IOS'},
	{model:'HP Elite x3', os:'Windows'},
	{model:'Microsoft 950', os:'Windows'},
	{model:'Microsoft 950XL', os:'Windows'},
	{model:'IDD VIOS Non Android', os:'Windows'}
])

const selectedModel = ref('')

const filteredPhones = computed(() =>{
  return phones.value.filter(phone => phone.os === selectedOS.value)
})
</script>
<template>
  <div class="container mt-4">
	<h1>Registration App: Cloud Service</h1>

	<div class="row mt-4">
		<h2>Login Information</h2>
	</div>

	<div class="row mt-4">
		<div class="col-3">
			<label>Enter Username: </label>
		</div>
		<div class="col-4">
			<input type="text" name="username" class="form-control" v-model="username"/>
		</div>
	</div>

	<div class="row mt-3">
		<div class="col-3">
			<label>Enter password: </label>
		</div>
		<div class="col-4">
			<input type="password" name="password" class="form-control" v-model="password"/>
		</div>
	</div>

	<div class="row mt-3">
		<div class="col-3">
			<label>Re-Enter password: </label>
		</div>
		<div class="col-4">
			<input type="password" name="rePassword" class="form-control" v-model="rePassword"/>
		</div>
		<div class="col-4">
			<span v-show="password !== rePassword && rePassword !== ''" class="text-danger">
				Password does not match
			</span>
		</div>
	</div>
	<div class="row mt-4">
		<div class="col-6">
			<h2>Phone Information</h2>
		</div>
	</div>
	<div class="row mt-5">
		<div class="col-6">
			<h2>Operating System</h2>
			<div class="form-check form-check-inline">
				<input class="form-check-input" type="radio" name="os" id="android" value="Android" v-model="selectedOS">
				<label class="form-check-label" for="android">Android</label>
			</div>
			<div class="form-check form-check-inline">
				<input class="form-check-input" type="radio" name="os" id="ios" value="IOS" v-model="selectedOS">
				<label class="form-check-label" for="ios">IOS</label>
			</div>

			<div class="form-check form-check-inline">
				<input class="form-check-input" type="radio" name="os" id="windows" value="Windows" v-model="selectedOS">
				<label class="form-check-label" for="windows">Windows</label>
			</div>

			
		</div>
		<div class="col-6">
			<h2>Model</h2>
			
			<div class="row">
				<div class="col-4">
					<label class="form-label">Select phone model: </label>
				</div>
				<div class="col-8">
					<select name="model" class="form-select w-auto" v-model="selectedModel">
					<option v-for="phone in filteredPhones" :key="phone.model" :value="phone.model">{{phone.model}}</option>
					</select>
				</div>
			
			</div>
			
		</div>

	</div>

	<div class="row mt-4">
		<h2>
			Summary
		</h2>
		<ul class="ps-5">
			<li>Username: {{username}}</li>
			<li>OS: {{selectedOS}}</li>
			<li>Phone: {{selectedModel}}</li>
		</ul>
	</div>
  </div>
  
</template>

<style scoped></style>
