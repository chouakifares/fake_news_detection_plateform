<template>
        <div>
                <Navbar/>
                <b-container>
                        <h1 class="text-light">Architecture de l'approche basée Deep Learning</h1>
                        <b-img-lazy fluid-grow src="../../static/DL.jpg" alt="Architecture du modele basé ML"></b-img-lazy>
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


