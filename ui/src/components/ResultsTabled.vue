<template>
	<div>
		<Navbar/>
		<b-container>
			<b-table class="text-light mt-5" :dark="true" id="results-table" striped hover :items="get_results().values" :fields="fields(get_results().fields)"></b-table>
			<p class="text-light text-center">{{get_results().caption}}</p>
		</b-container>
	</div>
</template>
<script>
	import Navbar from "@/components/Navbar";
	export default{
		components:{
			Navbar
		},
		data:()=>{
			return {
				DLinguisticISOT:{
					values:[
						{
							"Modèle":"Full linguistic module with average pooling and GloVe word embedding",
							"Justesse":0.9984,
							"MAE":0.0019,
							"MSE":0.00139,
							"Temps d'entrainement":947.46
						}, {
                                        		"Modèle":"Full linguistic module with max pooling and GloVe word embedding",
	                                        	"Justesse":0.9984,
	        	                                "MAE":0.0018,
        	        	                        "MSE":0.00141,
                	        	                "Temps d'entrainement":1544.46
                        	        	},{
                                	        	"Modèle":"Full linguistic module with average pooling and trainable  word embedding",
	                                	        "Justesse":0.9963,
        	                                	"MAE":0.0043,
	                	                        "MSE":0.0032,
        	                	                "Temps d'entrainement":3607.56
                	                	},{
                        	                	"Modèle":"GloVe word embedding + DNN",
	                        	                "Justesse":0.9767,
        	                        	        "MAE":0.0253,
                	                        	"MSE":0.0193,
                        	                	"Temps d'entrainement": 802.62
                                		}
					],
					fields:"DL",
					caption:"Résultats obtenus par le module linguistique du modèle basé DL et ses variantes sur les données de test du dataset ISOT"
				},DLUser:{
					values:[
                                                {
                                                        "Modèle":"Module user basé DL",
							"Justesse":0.4965,
                                                        "MAE":0.5000,
                                                        "MSE":0.2500,
                                                        "Temps d'entrainement":202
                                                }
					],
					fields:"DL",
					caption:"Résultats obtenus par le module User du modèle basé DL sur les données de test du dataset FNN"

				},DLCombination:{
					values:[
                                                {
                                                        "Modèle":"Modèle au complet basé DL",
                                                        "Justesse":0.5001,
                                                        "MAE":0.4999,
                                                        "MSE":0.2514,
                                                        "Temps d'entrainement":"/"
                                                }
                                        ],
                                        fields:"DL",
                                        caption:"Résultats obtenus par le modèle basé DL sur les données de test du dataset FNN"
				},MLUser:{
					values:[
						{
							"Modèle":"Module User basé ML",
							"Justesse":0.7090,
							"Précision":0.8076,
							"Rappel":0.6562,
							"Score-F1":0.7241
						}
					],
					fields:"ML",
					caption:"Résultats obtenus par le module d'analyse des caractéristiques utilisateurs basé machine learning utilisant une régression logistique sur le dataset FNN"
				},MLCombination:{
                                        values:[
                                                {
                                                        "Modèle":"Modèle basé ML utilisant un algorithme de regression linéaire",
                                                        "Justesse":0.7272,
                                                        "Précision":0.59375,
                                                        "Rappel":0.9047,
                                                        "Score-F1":0.7169
                                                }, {
                                                        "Modèle":"Modèle basé ML utilisant un algorithme d'arbre de décision",
                                                        "Justesse":0.6909,
                                                        "Précision":0.65625,
                                                        "Rappel":0.7777,
                                                        "Score-F1":0.7118
                                                }, {
                                                        "Modèle":"Modèle basé ML utilisant un algorithme de foret aléatoire d'arbre de décision",
                                                        "Justesse":0.7090,
                                                        "Précision":0.625,
                                                        "Rappel":0.8333,
                                                        "Score-F1":0.7142
                                                }
                                        ],
                                        fields:"ML",
                                        caption:"Résultats obtenus par le modèle basé machine learning en utilisant plusieurs algorithmes de classification sur le dataset FNN"
			},MLinguisticISOT:{
 					values:[
                                                {
                                                        "Modèle":"Modèle basé ML utilisant un algorithme de regression linéaire",
                                                        "Justesse":0.8834,
                                                        "Précision":0.9130,
                                                        "Rappel":0.8598,
                                                        "Score-F1":0.8856
                                                }, {
                                                        "Modèle":"Modèle basé ML utilisant un algorithme d'arbre de décision",
                                                        "Justesse":0.8920,
                                                        "Précision":0.8959,
                                                        "Rappel":0.8986,
                                                        "Score-F1":0.8972,
                                                }, {
                                                        "Modèle":"Modèle basé ML utilisant un algorithme de foret aléatoire d'arbre de décision",
                                                        "Justesse":0.9242,
                                                        "Précision":0.9390,
                                                        "Rappel":0.9150,
                                                        "Score-F1":0.9268
                                                }
                                        ],
                                        fields:"ML",
                                        caption:"Résultats obtenus par le module linguistique du modèle basé machine learning sur le dataset ISOT en utilisant plusieurs algorithmes de classification"
			},MLinguisticFNN:{
 					values:[
                                                {
                                                        "Modèle":"Module linguistique du modèle  basé ML utilisant un algorithme de regression linéaire",
                                                        "Justesse":0.6363,
                                                        "Précision":0.6666,
                                                        "Rappel":0.5185,
                                                        "Score-F1":0.5833
                                                }, {
                                                        "Modèle":"Module linguistique du Modèle basé ML utilisant un algorithme d'arbre de décision",
                                                        "Justesse":0.6000,
                                                        "Précision":0.6087,
                                                        "Rappel":0.5185,
                                                        "Score-F1":0.5599
                                                }, {
                                                        "Modèle":"Module linguistique du Modèle basé ML utilisant un algorithme de foret aléatoire d'arbre de décision",
                                                        "Justesse":0.6182,
                                                        "Précision":0.6071,
                                                        "Rappel":0.6296,
                                                        "Score-F1":0.6182
                                                }
                                        ],
                                        fields:"ML",
                                        caption:"Résultats obtenus par le module linguistique du modèle basé machine learning sur le dataset FNN en utilisant plusieurs algorithmes de classification"
				}		
			}
		},
		methods:{
			get_results(){
				if(!this.$route.params.approach.localeCompare("DL")){
					if(!this.$route.params.model.localeCompare("linguistic")){
						return this.DLinguisticISOT;
					}
				}
				if(!this.$route.params.approach.localeCompare("DL")){
                                        if(!this.$route.params.model.localeCompare("user")){
                                                return this.DLUser;
                                        }
                                }
				if(!this.$route.params.approach.localeCompare("DL")){
                                        if(!this.$route.params.model.localeCompare("combination")){
                                                return this.DLCombination;
                                        }
                                }
				if(!this.$route.params.approach.localeCompare("ML")){
                                        if(!this.$route.params.model.localeCompare("combination")){
                                                return this.MLCombination;
                                        }
                                }
				if(!this.$route.params.approach.localeCompare("ML")){
                                        if(!this.$route.params.model.localeCompare("user")){
                                                return this.MLUser;
                                        }
                                }
				if(!this.$route.params.approach.localeCompare("ML")){
                                        if(!this.$route.params.model.localeCompare("linguistic")){
                                                if(!this.$route.params.dataset.localeCompare("FNN")){
							return this.MLinguisticFNN;
						}
						else if(!this.$route.params.dataset.localeCompare("ISOT")){
							return this.MLinguisticISOT
						}
                                        }
                                }


			},
			fields(approach){
				if(!approach.localeCompare("DL")){
					return [
                                                {
                                                        key: "Modèle",
                                                        sortable:false,
                                                },
                                                {
                                                        key: 'Justesse',
                                                        sortable: true,
                                                        sortDirection: 'asc'
                                                },
                                                {
                                                        key: 'MAE',
                                                        label: 'Mean Absolute Error',
                                                        sortable: true,
                                                        sortDirection: 'desc'
                                                },
                                                {
                                                        key: 'MSE',
                                                        label: "Mean Squared Error",
                                                        sortable: true,
                                                        sortDirection: 'desc'
                                                },
                                                {
                                                        key: "Temps d'entrainement",
                                                        sortable:true,
                                                        sortDirection: 'desc'
                                                }
                                        ]
				}else{
					 return [
                                                {
                                                        key: "Modèle",
                                                        sortable:false,
                                                },
                                                {
                                                        key: 'Justesse',
                                                        sortable: true,
                                                        sortDirection: 'asc'
                                                },
                                                {
                                                        key: 'Précision',
                                                        sortable: true,
                                                        sortDirection: 'asc'
                                                },
                                                {
                                                        key: 'Rappel',
                                                        sortable: true,
                                                        sortDirection: 'asc'
                                                },
                                                {
                                                        key: "Score-F1",
                                                        sortable:true,
                                                        sortDirection: 'asc'
                                                }
                                        ]
				}
			}	
		}
	}
</script>
<style scoped>
	#results-table{
		max-width:50%;	
	}
<style>
