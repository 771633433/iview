<template>
	<div class="Tool">
		<Tooltip content="这里是提示文字">
			当鼠标经过这里的时候，会显示一个气泡框
		</Tooltip>
		<br><br><br><br>
		<!--	可以显示多行，自定义样式-->
		<Tooltip placement="top">
			<Button>多行</Button>
			<div slot="content">
				<p>显示多行信息</p>
				<p><i>可以自定义样式</i></p>
			</div>
		</Tooltip>
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
	.Tool{
		margin-top: 40px;
	}
</style>















