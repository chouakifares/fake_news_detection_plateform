<template>
        <div>
                <Navbar />
                <h2 class="text-light mt-2 p-2">{{title}}</h2>
                <b-card v-if="!sent" id="card-form" class="mx-auto mb-2" title-tag="h3"  bg-variant="dark" text-variant="light" title="Remplissez le formulaire avec les hyperparamètres de votre choix pour entraîner un modèle de ML et examinez ses resultats">       
                <hr/>
                <b-form class="p-1" @reset="onReset" v-if="show">
                        <b-row class="p-1">
                                <b-form-group label="Choisissez le pourcentage des données utilisées pour le test" class="h5 col text-light" v-slot="{ ariaDescribedby }">   
					<b-col sm="12" lg="4"  offset-lg="4">
        					<b-form-input  v-model="testSize" class="text-light" style=" background-color:#292b2c;"  placeholder="pourcentage des données de test"  type="text"></b-form-input>
      					</b-col>
                                </b-form-group>    
                        </b-row>
                        <b-row class="mt-1 p-1">
                                <b-form-group label="Sur quel dataset voulez vous appliquer ce modèle ?" class="h5 col text-light" v-slot="{ ariaDescribedby }">
                                        <b-form-radio-group>
                                                <b-form-radio v-model="dataset" class="text-left h6" @change="checkUser"  :aria-describedby="ariaDescribedby" name="dataset-radio" value="ISOT">ISOT</b-form-radio>
                                                <b-form-radio v-model="dataset" class="text-left h6" @change="checkUser" :aria-describedby="ariaDescribedby" name="dataset-radio" value="FNN">FakeNews Dataset</b-form-radio>
                                        </b-form-radio-group>
                                </b-form-group>
                        </b-row>
                        <b-row class="mt-1 p-1">
                                <b-form-group label="Quels sont les modules que vous voulez  utiliser ?" class="h5 col text-light" v-slot="{ ariaDescribedby }">
                                         <b-form-checkbox-group
                                                :aria-describedby="ariaDescribedby"     
                                                name="modules"
                                                v-model="modules"
                                                :checked="modules"
                                                switches>
                                                <b-form-checkbox class="text-left h6" value="linguistic" >Analyse Linguistique</b-form-checkbox>
        					 <b-form-checkbox class="text-left h6"  value="user" :disabled='disabledUser'>Analyse des Caractéristiques utilisateur</b-form-checkbox>
                                        </b-form-checkbox-group>
                                </b-form-group>
                        </b-row>
                        <b-button type="submit" @click.prevent="show=false" class="col-lg-3 "  variant="outline-light">Suivant</b-button>
                        <b-button type="reset"  @click="onReset"  class="col-lg-3 offset-lg-3" variant="outline-secondary">Reset</b-button>
                </b-form>
		<b-form class="p-1" @reset="onReset" v-else>
			<b-row class="p-1">
                                <b-form-group label="Quel algorithme de classification voulez vous utiliser ?" class="h5 col text-light" v-slot="{ ariaDescribedby }">
                                        <b-form-radio-group>
                                                <b-form-radio v-model="classificationAlgo" class="text-left h6"  :aria-describedby="ariaDescribedby" name="algo-radio" value="1">Regression logistique</b-form-radio>
                                                <b-form-radio v-model="classificationAlgo" class="text-left h6"  :aria-describedby="ariaDescribedby" name="algo-radio" value="2">Arbre de décision</b-form-radio>
						<b-form-radio v-model="classificationAlgo" class="text-left h6"  :aria-describedby="ariaDescribedby" name="algo-radio" value="3">Forêt aléatoire d'arbre de décision</b-form-radio>
                                        </b-form-radio-group>
                                </b-form-group>
                        </b-row>
			<b-row class="p-1" v-if="modules.includes('linguistic')"> 
                                <b-form-group label="Choisissez le nombre de paramètre d'entrée à donner au module linguistique" class="h5 col text-light" v-slot="{ ariaDescribedby }">   
                                        <b-col sm="12" lg="4"  offset-lg="4">
                                                <b-form-input  v-model="nbInput" class="text-light" style=" background-color:#292b2c;"   type="text"></b-form-input>
                                        </b-col>
                                </b-form-group>    
                        </b-row>
			<b-row class="p-1" v-if="modules.includes('user') && modules.length===1">
                                <b-form-group label="Choisissez la valeur de l'hyperparamètre min_user_like" class="h5 col text-light" v-slot="{ ariaDescribedby }">   
                                        <b-col sm="12" lg="4"  offset-lg="4">
                                                <b-form-input  v-model="minUserLike" class="text-light" style=" background-color:#292b2c;"   type="text"></b-form-input>
                                        </b-col>
                                </b-form-group>    
                        </b-row>
			<b-row class="p-1" v-if="modules.includes('user') && modules.length===1">
                                <b-form-group label="Choisissez la valeur de l'hyperparamètre min_post_like"  class="h5 col text-light" v-slot="{ ariaDescribedby }">   
                                        <b-col sm="12" lg="4"  offset-lg="4">
                                                <b-form-input v-model="minPostLike" class="text-light" style=" background-color:#292b2c;"   type="text"></b-form-input>
                                        </b-col>
                                </b-form-group>    
                        </b-row>
			<b-button type="submit" @click.prevent="onSubmit"  class="col-lg-3 " variant="outline-light">Tester le modele</b-button>
                        <b-button type="reset"  @click="onReset" variant="outline-secondary"class="col-lg-3 offset-lg-3" >Reset</b-button>
		</b-form>
             	</b-card>
		<b-card v-else id="card-form" class="mx-auto mb-2" title-tag="h3"  bg-variant="dark">
			<div class="container" >
				<b-row>
					<b-col sm ="12" lg="6">
						<b-table class="text-light mt-5" :dark="true" id="results-table" :busy="loading" striped hover :items="metricResults" :fields="fieldsMetrique">
							<template #table-busy>
       								<div class="text-center text-light my-2">
          								<b-spinner class="align-middle"></b-spinner>
          									<br/><strong>Loading...</strong>
        								</div>
      							</template>
						</b-table>
					</b-col>
					<b-col sm ="12" lg="6">
                                                <b-table class="text-light mt-5" :dark="true" id="results-table"  :busy="loading" striped hover :items="confusionMatrix" :fields="fieldsMatrix">
							<template #table-busy>
                                                                <div class="text-center text-light my-2">
                                                                        <b-spinner class="align-middle"></b-spinner>
                                                                                <br/><strong>Loading...</strong>
                                                                        </div>
                                                        </template>
						</b-table>
                                        </b-col>
				</b-row>
			</div>
			<b-button class="col-lg-3" v-if="!loading" @click="onReset()" variant="outline-light">
				Tester d'autre Modèle	
			</b-button>
		</b-card>
	</div>
</template>
<script>
const axios = require("axios").default;
import Navbar from "@/components/Navbar";
        export default{
                components:{
                        Navbar,
                },
                data:()=>{
                        return{
                        	dataset:"",
				testSize:"0.2",
				modules:[],
				show: true,
				disabledUser:false,
				nbInput:10,
				minPostLike:20,
				minUserLike:40,
				classificationAlgo:"",
				sent:false,
				loading:false,
				fieldsMetrique:["Métrique", "Score"],
				fieldsMatrix:["/","Prédit fake news","Prédit information fiable"],
				confusionMatrix:null,
				metricResults:null
                        }
           
                },
		computed:{
			title(){
				if(!this.sent){
					return "Testez l'effet de la variation des hyperparametres sur nos modèles basés ML";
				}
				else{
					return "Resultat obtenus par votre modèle";
				}
			}
		},
		methods:{
			checkDataset(){
				return this.dataset.localeCompare("ISOT");
			},
			checkUser(){
				if(!this.dataset.localeCompare("ISOT")){
					if(this.modules.includes("user")){
						if(this.modules.length ===1){
							this.modules.pop()
						}
						else{
							this.modules.splice(1,this.modules.indexOf("user"));				
						}
						console.log(this.modules);
					}
					this.disabledUser=true;
				}
				else{
					this.disabledUser=false;
				}
			},
			onReset(event) {
				if(event!==undefined){
                               		event.preventDefault()
				}
				this.sent=false;
                                this.approach = '';
                                this.dataset = '';
                                this.modules = [];
				this.nbInput=10;
				this.minPostLike=20;
				this.minUserLike=40;
				this.disabledUser = false;
                                // Trick to reset/clear native browser form validation state
                                this.show = false;
                                this.$nextTick(() => {
                                        this.show = true;
                                });
                        },
			onSubmit(){
				let data = {
					"algo":parseInt(this.classificationAlgo),
					"dataset":this.dataset,
					"model":this.modules.length===2 ? "combination":this.modules.includes("linguistic") ? "linguistic_only":"user_only",
					"matrix_nb_row":parseInt(this.nbInput),
					"min_post_like":parseInt(this.minPostLike),
					"min_user_like":parseInt(this.minUserLike),
					"test_size": parseFloat(this.testSize),
				}
				this.sent=true;
				this.loading=true;
				axios.post("/api/evaluation",data).then((res)=>{
					let d = res.data;
					this.confusionMatrix= [
						{
							"/":"Fake news",
							"Prédit fake news":d.true_positive,
							"Prédit information fiable":d.false_negative,
						},
						 {
                                                        "/":"Information fiable",
                                                        "Prédit fake news":d.false_positive,
                                                        "Prédit information fiable":d.true_negative,
                                                }

					];
					console.log(d);
					this.metricResults=[
						{
							"Métrique":"Justesse",
							"Score":d.accuracy.toFixed(4)
						},{
                                                        "Métrique":"Précision",
                                                        "Score":d.precision.toFixed(4)
                                                },{
                                                        "Métrique":"Rappel",
                                                        "Score":d.recall.toFixed(4)
                                                },{
                                                        "Métrique":"Score-F1",
                                                        "Score":d.f1_score.toFixed(4)
                                                }
					];
					this.loading=false;
				});
			}
		}
        } 
</script>
<style  scoped>
        #container{
                max-width:90%;  
        }
        #card-form{
                max-width:80%;
        }
	.black-input{
		background-color:#292b2c;
	}
	.black-input:focus{
		color:#292b2c;
	}
	.loader{  /* Loader Div Class */    position: absolute;
    		top:0px;
		right:0px;
    		width:100%;
    		height:100%;
    		background-color:#eceaea;
    		background-image: url('../assets/img/loading.gif');
    		background-size: 50px;
    		background-repeat:no-repeat;
    		background-position:center;
    		z-index:10000000;
    		opacity: 0.4;
    		filter: alpha(opacity=40);
	}
		
</style>

