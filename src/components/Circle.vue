<template>
	<div>
		<i-circle :percent="80">
			<span class="demo-i-circle-inner" style="font-size:20px">80%</span>
		</i-circle>
		<i-circle :percent="100" stroke-color="#5cb85c">
			<Icon type="ios-checkmark-empty" size="60" style="color:#5cb85c"></Icon>
		</i-circle>
		<i-circle :percent="35" stroke-color="#ff5500">
        	<span class="demo-i-circle-inner">
            <Icon type="ios-close-empty" size="50" style="color:#ff5500"></Icon>
        </span>
    </i-circle>
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




















