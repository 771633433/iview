<template>
	<div class="steps">
		<Steps :current="1">
			<Step title="注册" icon="person-add"></Step>
			<Step title="上传头像" icon="camera"></Step>
			<Step title="验证邮箱" icon="email"></Step>
		</Steps>
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
	.steps{
		margin-top: 50px;
	}
</style>















