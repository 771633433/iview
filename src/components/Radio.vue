<template>
	<div class="Radio">
		<Radio v-model="single">Radio</Radio>
		{{single}}
		<br>
		<Radio-group v-model="phone">
			<Radio label="apple">
				<Icon type="social-apple"></Icon>
				<span>Apple</span>
			</Radio>
			<Radio label="android">
				<Icon type="social-andriod"></Icon>
				<span>Android</span>
			</Radio>
			<Radio label="windows">
	            <Icon type="social-windows"></Icon>
	            <span>Windows</span>
        </Radio>
        <br>
        <!--	可以设置disabled属性 使得按钮不能点击 -->
        <Radio-group v-model="button1" type="button">
	        <Radio label="北京"></Radio>
	        <Radio label="上海" disabled></Radio>
	        <Radio label="深圳"></Radio>
	        <Radio label="杭州"></Radio>
    	</Radio-group>
		</Radio-group>
	</div>
</template>


<script>
	export default{
		data(){
			return {
				single:false,
				phone:"apple"
			}
		}
	}
</script>


<style scoped>
	.Radio{
		margin-top: 60px;
	}
</style>