<template>
	<div>
		<Row>
			<Col span="12">
				<Date-picker type="date" placeholder="选择日期" style="width:200px"></Date-picker>
			</Col>
			<!--	daterange	-->
			<Col span="12">
				<Date-picker type="daterange" placeholder="选择日期" style="width:200px"></Date-picker>
			</Col>
			<!--	时间选择	-->
			<date-picker type="datetime" placeholder="选择日期和时间" style="width:200px"></date-picker>
		</Row>
	</div>
</template>


<script>
	export default{
		data(){
			return {

			}
		}
	}
</script>


<style scoped>
	
</style>







