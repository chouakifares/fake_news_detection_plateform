<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  	font-family: Roboto,'Avenir', Helvetica, Arial, sans-serif;
  	text-align: center;
  	color: #2c3e50;
	background-color:#292b2c;
}
html{
	height:90%;
	max-width:100%;
	background-color:#292b2c;
}
body{
	min-height:100%;
	background-color:#292b2c;
}
</style>
