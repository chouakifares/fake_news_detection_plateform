<template>
        <div>
                <Navbar />
		<h2 class="text-light mt-2 p-2">Examinez les resultats obtenus par nos modèles</h2>
                <b-card id="card-form" class="mx-auto" title-tag="h3" bg-variant="dark" text-variant="light" title="Remplissez le formulaire avec la configuration qui vous convient et  jettez un oeil à ses resultats">       
                <hr/>
                <b-form class="p-1" @reset="onReset" v-if="show">
                        <b-row class="p-1">
                                <b-form-group label="Choisissez l'approche qui vous interesse" class="h5 col text-light" v-slot="{ ariaDescribedby }">
					<b-form-radio-group>
                                                <b-form-radio v-model="approche" class="text-left h6" @change="switchFNN()" :aria-describedby="ariaDescribedby" name="approach-radio" value="ML">Basée Machine Learning</b-form-radio>
                                                <b-form-radio v-model="approche" class="text-left h6" @change="switchFNN()" :aria-describedby="ariaDescribedby" name="approach-radio" value="DL">Basée Deep Learning</b-form-radio>
                                        </b-form-radio-group>

				</b-form-group>
                        </b-row>
                        <b-row class="mt-1 p-1">
                                <b-form-group label="Sur quel dataset voulez vous appliquer ce modele ?" class="h5 col text-light" v-slot="{ ariaDescribedby }">
                                        <b-form-radio-group>
                                                <b-form-radio v-model="dataset" class="text-left h6" @change="checkUser"  :aria-describedby="ariaDescribedby" name="dataset-radio" value="ISOT">ISOT</b-form-radio>
                                                <b-form-radio v-model="dataset" class="text-left h6" @change="checkUser" :disabled="disabledFNN" :aria-describedby="ariaDescribedby" name="dataset-radio" value="FNN">FakeNews Dataset</b-form-radio>
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
                        <b-button type="submit" @click.prevent="onSubmit()" class="col-lg-3" variant="outline-light">Confirmer</b-button>
                        <b-button type="reset"  class="col-lg-3 offset-lg-3"  variant="outline-secondary">Reset</b-button>
                </b-form>
                </b-card>
        
        </div>
</template>
<script>
import Navbar from "@/components/Navbar";
        export default{
                components:{
                        Navbar,
                },
                data:()=>{
                        return{
                                dataset:"",
				approche:"",
                                modules:[],
                                show: true,
                                disabledUser:false,
				disabledFNN:false,
                        }
           
                },
                methods:{
			switchFNN(){
				console.log("DONE");
				if(!this.approche.localeCompare("DL")){
					if(!this.dataset.localeCompare("FNN")){
						this.dataset= "";
					}
					this.disabledFNN=true;
				}
				else{
					this.disabledFNN=false;
				}
			},
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
                                event.preventDefault()
                                this.approche = '';
                                this.dataset = '';
                                this.modules = [];
				this.disabledFNN=false;
                               	this.disabledUser=false;
				// Trick to reset/clear native browser form validation state
                                this.show = false;
                                this.$nextTick(() => {
                                        this.show = true;
                                });
                        },
			onSubmit(event){
				window.location.href=`/#/results/${this.approche}/${this.modules.length===2 ? "combination":this.modules[0]}/${this.dataset}`;
			}

                }
        } 
</script>
<style scoped>
        #container{
		 max-width:90%;  
        }
        #card-form{
                max-width:80%
        }
</style>

