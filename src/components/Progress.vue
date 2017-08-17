<template>
	<div>
		<Progress :percent="percent"></Progress>
		<Button-group size="large">
			<Button icon="ios-plus-empty" @click="add"></Button>
			<Button icon="ios-minus-empty" @click="minus"></Button>
		</Button-group>
	</div>
</template>

<script>
	export default{
		data(){
			return{
				percent:10
			}
		},
		methods:{
			add(){
				if(this.percent>=100){
					return false;
				}else{
					this.percent+=10;
				}
			},
			minus(){
				if(this.percent<=0){
					return false;
				}else{
					this.percent-=10;
				}
			}
		}
	}
</script>

<style scoped></style>






