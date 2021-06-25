<template>
        <div>
		<Navbar />
        	<b-container fluid>
			<b-row>
					<div>
	  					<b-jumbotron text-variant="light" bg-variant="transparent">
				    			<template #header>FakeNews Buster</template>
							<template #lead>
				     		 		La plateforme fakenews buster est une plateforme permettant d'evaluer les performances des modèles proposés dans l'étude menée dans le cadre de l'obtention de diplome de licence en informatique générale à l'université des science et de la technologie Houari Boumedien
    							</template>
    							<hr class="my-1">
    							<b-row>
							<b-col lg="7">
								<p>
      								Avec l'utilisation actuelle des plateformes de médias sociaux, les consommateurs créent et partagent  plus d'informations que jamais, dont certaines sont trompeuses et sans rapport avec la réalité.
	    							</p>
								<p>
								En vue de la nécessité de détecter ce type d’information de manières rapides pour éviter qu’elles ne se propagent, nous proposons deux approches différentes basées sur des techniques de machine learning et deep learning.
								</p>
    							<b-button class="my-1" variant="outline-light" href="/#/approach/">Inspecter les architectures des approches proposées dans notre étude </b-button>
				    			<b-button class="my-1" variant="outline-light" href="/#/tests/">Testez vos propres modèles de machine learning</b-button>
							<b-button class="my-1"  variant="outline-light" href="/#/tests/">Examiner les résultats obtenus par nos modèle</b-button>
							</b-col>
							<b-col  lg="5">
								 <b-img fluid :src="require('../../public/pic.png')"  alt="Social media"></b-img>
							</b-col>
							</b-row>
  						</b-jumbotron>
					</div>
			</b-row>
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

</style>

