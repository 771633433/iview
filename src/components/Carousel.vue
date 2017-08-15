<template>
	<div class="Carousel">
		<Carousel autoplay v-model="value2">
			<Carousel-item>
				<div class="demo-carousel"><img width="100%" height="100%" src="../../src/assets/1.jpg"></div>
			</Carousel-item>
			<Carousel-item>
				<div class="demo-carousel"><img width="100%" height="100%" src="../../src/assets/large.jpg"></div>
			</Carousel-item>
			<Carousel-item>
				<div class="demo-carousel"><img width="100%" height="100%" src="../../src/assets/2.jpg"></div>
			</Carousel-item>
			<Carousel-item>
				<div class="demo-carousel"><img width="100%" height="100%" src="../../src/assets/3.jpg"></div>
			</Carousel-item>
		</Carousel>
	</div>
</template>


<script>
	export default{
		data(){
			return {
				value2:0
			}
		}
	}
</script>

<style scoped>
.Carousel{
	width: 400px;
	height: 300px;
	margin: 0 auto;
}
	.demo-carousel{
		width: 400px;
		height: 300px;
		margin: 0 auto;
	}
</style>









