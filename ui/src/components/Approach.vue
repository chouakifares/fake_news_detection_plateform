<template>
        <div id="container" >
		<Navbar/>
		<b-container>
  			<div>
				<p class="text-justify p-2 mt-2  h2 text-light text-center">Afin de détecter les fausses nouvelles automatiquement et de distinguer les informations fiables des fake news nous proposons les deux approches suivantes</p>
  				<b-card-group deck class="mt-3">
    					<b-card bg-variant="dark" text-variant="light" title-tag="h3"   title="Approche Basée Machine Learning">
      						<hr>
						<b-card-text class="p-3 mt-3" text-variant="white" style="font-size:1.3rem;">
        						Dans cette approche on applique des algorithmes d’apprentissage non profond tel que les régressions logiques pour entraîner un modèle de classification.
      						</b-card-text>
						<template #footer>
                                                        <b-button variant="light"><a href ="/#/approach/ML" class="text-dark">Voir l'architecture du modèle construit à partir de cette approche</a></b-button>
                                                </template>
    					</b-card>
    					<b-card  title="Approche Basée Deep Learning" bg-variant="dark" text-variant="light" title-tag="h3">
      						<hr>
						<b-card-text class="p-3 mt-3" style="font-size:1.3rem;" text-variant="white">
        						Dans cette approche on construit des modèles de classification en utilisant des réseaux de neurone profond avec plusieurs types de couches cachées.
      						</b-card-text>
						<template #footer>
							<b-button variant="light"><a href ="/#/approach/DL" class="text-dark">Voir l'architecture du modèle construit à partir de cette approche</a></b-button>
						</template>
    					</b-card>
  				</b-card-group>
			</div>
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

