<template>
	<div class="InputNumber">
		<Input-number :max="10" :min="0" step="0.1" v-model="value1"></Input-number>
	</div>
</template>

<script>
	export default{
		data(){
			return {
				value1:0
			}
		}
	}
</script>

<style scoped>
	.InputNumber{
		margin-top: 50px;
	}
</style>













