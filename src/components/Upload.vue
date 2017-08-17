<template>
	<div class="upload">
		<!--	基本用法  一次只能上传一个文件   
		 		可以设置multiple属性 支持多个文件一起上传	
		 -->
		<Upload action="">
			<Button type="ghost" icon="ios-cloud-upload-outline">上传文件</Button>
		</Upload>
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
	.upload{
		margin-top: 50px;
	}
</style>
















