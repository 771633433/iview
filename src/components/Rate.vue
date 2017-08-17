<template>
	<div>
		<Rate allow-half v-model="valueHalf"></Rate>
		<!--	设置属性 show-text可以显示提示文字	-->
		<Row>
			<i-col span="12">
				<Rate show-text allow-half v-model="valueText"></Rate>
			</i-col>
		</Row>
	</div>
</template>


<script>
	export default{
		data(){
			return {
				valueHalf:2.5,
				valueText:4
			}
		}
	}
</script>

