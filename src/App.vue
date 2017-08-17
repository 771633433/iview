<template>
  <div id="app">
    <p>
      <router-link to='/Grid'>Grid</router-link>
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <router-link to='/Layout'>Layout</router-link>
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <router-link to='/Button'>Button</router-link>
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <router-link to='/Icon'>Icon</router-link>
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <router-link to='/Radio'>Radio</router-link>
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <router-link to='/Switch'>Switch</router-link>
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <router-link to='/Table'>Table</router-link>
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <router-link to='/Select'>Select</router-link>
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <router-link to='/Slider'>Slider</router-link>
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <router-link to='/DatePicker'>DatePicker</router-link>
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <router-link to='/TimePicker'>TimePicker</router-link>
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <router-link to='/Cascader'>Cascader</router-link>
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <router-link to='/Rate'>Rate</router-link>
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <router-link to='/Form'>Form</router-link>
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <router-link to='/Card'>Card</router-link>
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <router-link to='/Badge'>Badge</router-link>
      <br>
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <router-link to='/Collapse'>Collapse</router-link>
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <router-link to='/InputNumber'>InputNumber</router-link>
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <router-link to='/Timeline'>Timeline</router-link>
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <router-link to='/Tooltip'>Tooltip</router-link>
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <router-link to='/Carousel'>Carousel</router-link>
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <router-link to='/Tree'>Tree</router-link>
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <router-link to='/Tab'>Tab</router-link>
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <router-link to='/Dropdown'>Dropdown</router-link>
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <router-link to='/Progress'>Progress</router-link>
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <router-link to='/Menu'>Menu</router-link>
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <router-link to='/Page'>Page</router-link>
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <router-link to='/Steps'>Steps</router-link>
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <router-link to='/Circle'>Circle</router-link>
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <router-link to='/BackTop'>BackTop</router-link>
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <router-link to='/Spin'>Spin</router-link>
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <router-link to='/Upload'>Upload</router-link>
    </p>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 20px;
  height: 2000px;
}
a {
  font-size: 16px;
  color: #ccc
}

.router-link-active{
  color: red;
}

</style>
