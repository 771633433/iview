<template>
	<div>
		<Slider	v-model="value1"></Slider>
		<Slider	v-model="value2" range></Slider>
		<Slider	v-model="value3" range disabled></Slider>
		<!--	可以设置step，来设置每次滑动的间隔	-->
		<Slider v-model="value4"  :step="10" range></Slider>
	</div>
</template>

<script>
	export default{
		data(){
			return{
				value1:41,
				value2:[41,67],
				value3:[20,50],
				value4:[13,67]
			}
		}
	}
</script>


<style scoped>
	
</style>







