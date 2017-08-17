<template>
	<div class="Cascader">
		<!--	Cascader级联选择	-->
		<Cascader :data="data" v-model="value1" style="width:168px"></Cascader>
	</div>
</template>


<script>
	export default{
		data(){
			return{
				value1:[],
				data:[
					{value:"beijing",label:"北京",children:[{value:"gugong",label:"故宫"},
						{value:"tiantan",label:"天坛"},{value:"wangfujing",label:"王府井"}
					]
					},
					{value:"jiangsu",label:"江苏",children:[{value:"nanjing",label:"南京",children:[{value:"fuzimiao",label:"夫子庙"}]},
						{value:"suzhou",label:"苏州",children:[{value:'zhuozhengyuan',label:"拙政园"},{value:"shizilin",label:"狮子林"}]}
					]
					}
				]
			}
		}
	}
</script>


<style scoped>
	.Cascader{
		text-align: center;
	}
</style>














