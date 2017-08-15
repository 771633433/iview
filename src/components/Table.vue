<template>
	<div>
		<Table :columns="columns1" :data="data1"></Table>
		<!--	通过API设置,可以实现排序功能 详情可以参见文档	-->
	</div>
</template>


<script>
	export default{
		data(){
			return {
				columns1:[
					{title:"姓名",key:"name"},
					{title:"年龄",key:"age"},
					{title:"地址",key:"address"}
				],
				data1:[
					{name:"王小明",age:18,address:"北京市朝阳区"},
					{name:"张小刚",age:25,address:"北京市海淀区"},
					{name:"李小红",age:30,address:"南京市鼓楼区"},
					{name:"周小伟",age:33,address:"广州市番禺区"}
				]
			}
		}
	}
</script>

<style scoped>
	

</style>

















