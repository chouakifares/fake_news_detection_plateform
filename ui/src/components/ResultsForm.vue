<template>
        <div>
                <h2 class="text-light mt-2 p-2">Tester l'effet de la variations des hyperparametre sur nos modele basés ML</h2>
                <b-card id="card-form" class="mx-auto"  bg-variant="dark" text-variant="light" title="Remplissez le formulaire avec les hyperparametre de votre choix pour entrainer un modele de ML et examiner ses resultats">       
                <hr/>
                <b-form class="p-1" @reset="onReset" v-if="show">
                        <b-row class="p-1">
                                <b-form-group label="Choisissez le pourcentage des données utilisées pour le test" class="h5 col text-light" v-slot="{ ariaDescribedby }">   
                                </b-form-group>    
                        </b-row>
                        <b-row class="mt-1 p-1">
                                <b-form-group label="Sur quel dataset voulais vous appliquer ce modele ?" class="h5 col text-light" v-slot="{ ariaDescribedby }">
                                        <b-form-radio-group>
                                                <b-form-radio v-model="dataset" class="text-left h6" @change="checkUser"  :aria-describedby="ariaDescribedby" name="dataset-radio" value="ISOT">ISOT</b-form-radio>
                                                <b-form-radio v-model="dataset" class="text-left h6" @change="checkUser" :aria-describedby="ariaDescribedby" name="dataset-radio" value="FNN">FakeNews Dataset</b-form-radio>
                                        </b-form-radio-group>
                                </b-form-group>
                        </b-row>
                        <b-row class="mt-1 p-1">
                                <b-form-group label="Quels sont les modules que vous voulez  utilisés ?" class="h5 col text-light" v-slot="{ ariaDescribedby }">
                                         <b-form-checkbox-group
                                                :aria-describedby="ariaDescribedby"     
                                                name="modules"
                                                v-model="modules"
                                                :checked="modules"
                                                switches>
                                                <b-form-checkbox class="text-left h6" value="linguistic" >Analyse Linguistique</b-form-checkbox>
						<b-form-checkbox class="text-left h6"  value="user" :disabled='disabledUser'>Analyse des Caracteristiques utilisateur</b-form-checkbox>
                                        </b-form-checkbox-group>
                                </b-form-group>
                        </b-row>
                        <b-button type="submit"   variant="outline-light">Submit</b-button>
                        <b-button type="reset"  variant="outline-secondary">Reset</b-button>
                </b-form>
                </b-card>
        </div>
</template>
<script>
        export default{
                data:()=>{
                        return{
                                dataset:"",
                                testSize:0.2,
                                modules:[],
                                show: true,
                                disabledUser:false,
                                linguistic:false,
                                user:false,
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
                                event.preventDefault()
                                this.approach = '';
                                this.dataset = '';
                                this.modules = [];
                                // Trick to reset/clear native browser form validation state
                                this.show = false;
                                this.$nextTick(() => {
                                        this.show = true;
                                });
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









