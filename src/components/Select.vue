<template>
	<div>
		<Select v-model="model1" style="width:160px">
			<Option v-for="item in cityList" :value="item.label" :key="item.id"></Option>
		</Select>
	</div>
</template>

<script>
	export default{
		data(){
			return {
				cityList:[
					{value:"BeiJing",label:"北京市"},
					{value:"Shanghai",label:"上海市"},
					{value:"Shenzhen",label:"深圳市"},
					{value:"Hangzhou",label:"杭州市"},
					{value:"NanJing",label:"南京市"},
					{value:"Chongqing",label:"重庆市"},
				],
				model1:''
			}
		}
	}
</script>


<style scoped>
	
</style>






