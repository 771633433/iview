<template>
	<div class="tab">
		<Tabs value="name1">
			<Tab-pane label="标签一" name="name1">标签一的内容</Tab-pane>
			<Tab-pane label="标签二" name="name2">标签二的内容</Tab-pane>
			<Tab-pane label="标签三" name="name3">标签三的内容</Tab-pane>
		</Tabs>
	</div>
</template>

<script>
	export default{
		data(){
			return{

			}
		}
	}
</script>

<style scoped>
	.tab{
		width: 400px;
		height: 300px;
		margin: 0 auto;
	}
</style>













