<template>
	<div class="Icon">
		<ul>
			<li v-for="(car,index) in cars">
				<Icon :type="cars[index].type" :color="cars[index].color" :size="cars[index].size" />
				{{cars[index].name}} &nbsp;&nbsp;&nbsp;{{cars[index].cphm}}
			</li>
		</ul>	
	</div>
</template>


<script type="text/javascript">
	export default{
		data(){
			return {
				cars:[
					{name:"Joe",cphm:"粤AC9989",color:"red",size:18,type:"checkmark"},
					{name:"Paul",cphm:"粤ACE888",color:"blue",size:18,type:"close"},
					{name:"Ray",cphm:"粤CD2146",color:"green",size:18,type:"arrow-right-a"},
					{name:"Chris",cphm:"粤EE3154",color:"green",size:18,type:"arrow-expand"}
				]
			}
		}
	}
</script>

<style scoped>
	.Icon{
		margin-top: 80px;
	}
</style>