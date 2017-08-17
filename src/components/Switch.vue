<template>
	<div class="switch">
			<!--	可以设置 size 属性,large表示大,small表示小 -->
			<!--	可以设置disabled属性将按钮禁用-->
		<i-switch v-model="switch1" @on-change="change"></i-switch>
		<br>
		<i-switch :disabled="disabled"></i-switch>
		<Button type="warning" @click="disabled=!disabled">Toggle</Button>
	</div>
</template>


<script>
	export default{
		data(){
			return{
				switch1:false,
				disabled:true
			}
		},
		methods:{
			change(status){
				this.$Message.info('开关状态：'+ status);
			}
		}
	}
</script>

<style scoped>
	.switch{
		margin-top: 50px;
	}
</style>

















