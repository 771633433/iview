<template>
  <div>
  	<Row>
  		<Col class="col" span="12" style="background:#4cb7ed"><p>col-12</p></Col>
  		<Col class="col" span="12" style="background:#19a3e7"><p>col-12</p></Col>
  	</Row>
  	<br>
  	<Row>
  		<Col class="col" span="8" style="background:#4cb7ed"><p>col-8</p></Col>
  		<Col class="col" span="8" style="background:#19a3e7"><p>col-8</p></Col>
  		<Col class="col" span="8" style="background:#4cb7ed"><p>col-8</p></Col>
  	</Row>
  	<br>
  	<Row>
  		<Col class="col" span="6" style="background:#4cb7ed"><p>col-6</p></Col>
  		<Col class="col" span="6" style="background:#19a3e7"><p>col-6</p></Col>
  		<Col class="col" span="6" style="background:#4cb7ed"><p>col-6</p></Col>
  		<Col class="col" span="6" style="background:#19a3e7"><p>col-6</p></Col>
  	</Row>
<br>
<br>
  	<!--	区块间隔	-->
  	<Row :gutter="16">
  		<Col span="6" style="background:#4cb7ed">
  			<p>col-6</p>
  		</Col>
  		<Col span="6" style="background:#19a3e7">
  			<p>col-6</p>
  		</Col>
  		<Col span="6" style="background:#4cb7ed">
  			<p>col-6</p>
  		</Col>
  		<Col span="6" style="background:#19a3e7">
  			<p>col-6</p>
  		</Col>
  	</Row>
<br>
<br>

  	<!--左右偏移-->
  	<Row>
  		<Col class="col" style="background:#4cb7ed" span="8">
  			<p>col-8</p>
  		</Col>
  		<Col class="col" style="background:#4cb7ed" span="8" offset="8">
  			<p>col-8 | offset-8</p>
  		</Col>
  	</Row>
  	<br>
  	<Row>
  		<Col class="col" style="background:#4cb7ed" span="6" offset="8">
  			<p>col-6 | offset-8</p>
  		</Col>
  		<Col class="col" style="background:#4cb7ed" span="6" offset="4">
  			<p>col-6 | offset-4</p>
  		</Col>
  	</Row>
  	<br>
  	<Row>
  		<Col class="col" style="background:#4cb7ed" span="12" offset="8">
  			<p>col-12 | offset-8</p>
  		</Col>
  	</Row>
  </div>
</template>

<script>
export default {
  data(){
    return {

    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style type="text/css">
.col{
	height: 40px;
}
p{
	line-height: 40px;
}
</style>
