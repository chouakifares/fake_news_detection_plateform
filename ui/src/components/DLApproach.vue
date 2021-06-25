<template>
        <div>
                <Navbar/>
                <b-container>
                        <h1 class="text-light">Architecture de l'approche basée Deep Learning</h1>
                        <b-img fluid-grow :src="require('../../public/DL.jpg')" alt="Architecture du modèle basé DL"></b-img>
                	<b-button background-variant="outline-light" href="/#/approach">Revenir à la page de description des architectures</b-button>
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


