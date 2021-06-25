<template>
	<div>
		<Navbar/>
		<b-container>
			<h1 class="text-light">Architecture de l'approche basée Machine Learning</h1>
			<b-img fluid-grow :src="require('../../public/ML.jpg')" alt="Architecture du modèle basé ML"></b-img>
			<b-button variant="outline-light" href="/#/approach" >Revenir à la page de description des architectures</b-button> 
		</b-container>
	</div>
</template>
<script>
import Navbar from "@/components/Navbar"
        export default{
                components:{
                         Navbar,
                },
                data:()=>{
                        return{
                        
                        }
           
                }
        }
</script>
<style scoped>
        #container{
                background-color:#292b2c;
        }
</style>

