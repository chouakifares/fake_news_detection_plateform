webpackJsonp([1],{"1uuo":function(t,e){},"2KL8":function(t,e){},"9M+g":function(t,e){},GjGi:function(t,e){},Jmt5:function(t,e){},N64v:function(t,e){},NHnr:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=s("7+uW"),i={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"app"}},[e("router-view")],1)},staticRenderFns:[]};var r=s("VU/8")({name:"App"},i,!1,function(t){s("2KL8")},null,null).exports,o=s("/ocq"),n={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"hello"},[s("h1",[t._v(t._s(t.msg))]),t._v(" "),s("h2",[t._v("Essential Links")]),t._v(" "),t._m(0),t._v(" "),s("h2",[t._v("Ecosystem")]),t._v(" "),t._m(1)])},staticRenderFns:[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ul",[s("li",[s("a",{attrs:{href:"https://vuejs.org",target:"_blank"}},[t._v("\n        Core Docs\n      ")])]),t._v(" "),s("li",[s("a",{attrs:{href:"https://forum.vuejs.org",target:"_blank"}},[t._v("\n        Forum\n      ")])]),t._v(" "),s("li",[s("a",{attrs:{href:"https://chat.vuejs.org",target:"_blank"}},[t._v("\n        Community Chat\n      ")])]),t._v(" "),s("li",[s("a",{attrs:{href:"https://twitter.com/vuejs",target:"_blank"}},[t._v("\n        Twitter\n      ")])]),t._v(" "),s("br"),t._v(" "),s("li",[s("a",{attrs:{href:"http://vuejs-templates.github.io/webpack/",target:"_blank"}},[t._v("\n        Docs for This Template\n      ")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("ul",[e("li",[e("a",{attrs:{href:"http://router.vuejs.org/",target:"_blank"}},[this._v("\n        vue-router\n      ")])]),this._v(" "),e("li",[e("a",{attrs:{href:"http://vuex.vuejs.org/",target:"_blank"}},[this._v("\n        vuex\n      ")])]),this._v(" "),e("li",[e("a",{attrs:{href:"http://vue-loader.vuejs.org/",target:"_blank"}},[this._v("\n        vue-loader\n      ")])]),this._v(" "),e("li",[e("a",{attrs:{href:"https://github.com/vuejs/awesome-vue",target:"_blank"}},[this._v("\n        awesome-vue\n      ")])])])}]};s("VU/8")({name:"HelloWorld",data:function(){return{msg:"Welcome to Your Vue.js App"}}},n,!1,function(t){s("1uuo")},"data-v-d8ec41bc",null).exports;var l={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{attrs:{id:"home"}},[s("b-navbar",{attrs:{toggleable:"lg",type:"dark",variant:"dark",sticky:!0}},[s("b-navbar-brand",{attrs:{href:"/#/"}},[t._v("FakeNews Buster")]),t._v(" "),s("b-navbar-toggle",{attrs:{target:"nav-collapse"}}),t._v(" "),s("b-collapse",{attrs:{id:"nav-collapse","is-nav":""}},[s("b-navbar-nav",{staticClass:"ml-auto"},[s("b-nav-item-dropdown",{attrs:{right:""},scopedSlots:t._u([{key:"button-content",fn:function(){return[s("b-icon",{attrs:{icon:"gear-fill",animation:"spin"}}),t._v(" Approche\n      \t\t\t\t\t\t")]},proxy:!0}])},[t._v(" "),s("b-dropdown-item",{attrs:{href:"/#/approach/"}},[t._v("Description des approches")]),t._v(" "),s("b-dropdown-item",{attrs:{href:"/#/approach/ML"}},[t._v("Architecture ML")]),t._v(" "),s("b-dropdown-item",{attrs:{href:"/#/approach/DL"}},[t._v("Architecture DL")])],1),t._v(" "),s("b-nav-item",{attrs:{"active-class":"active",href:t.items[0].path,right:""}},[s("b-icon",{attrs:{icon:"zoom-in",animation:"throb"}}),t._v(" "+t._s(t.items[0].title))],1),t._v(" "),s("b-nav-item",{attrs:{"active-class":"active",href:t.items[1].path,right:""}},[s("b-icon",{attrs:{icon:"bar-chart-fill"}}),t._v(" "+t._s(t.items[1].title))],1)],1)],1)],1)],1)},staticRenderFns:[]},c=s("VU/8")({data:function(){return{sidebar:!1,items:[{title:"Tester vos propre Modele",path:"/#/tests",name:"Tests"},{title:"Resultats",path:"/#/results",name:"Results"}]}}},l,!1,null,null,null).exports,u={components:{Navbar:c},data:function(){return{}}},d={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("Navbar"),t._v(" "),s("b-container",{attrs:{fluid:""}},[s("b-row",[s("div",[s("b-jumbotron",{attrs:{"text-variant":"light","bg-variant":"transparent"},scopedSlots:t._u([{key:"header",fn:function(){return[t._v("Fake News Buster")]},proxy:!0},{key:"lead",fn:function(){return[t._v("\n\t\t\t\t     \t\t \t\tLa plateforme fake news buster est une plateforme permettant d'evaluer les preformance des modèles proposés dans l'etude menée dans le cadre de l'obtention de diplome de license academique à l'unversité bab Ezzouar\n    \t\t\t\t\t\t\t")]},proxy:!0}])},[t._v(" "),t._v(" "),s("hr",{staticClass:"my-1"}),t._v(" "),s("b-row",[s("b-col",{attrs:{lg:"7"}},[s("p",[t._v("\n      \t\t\t\t\t\t\t\tAvec l'utilisation actuelle des plateformes de médias sociaux, les consommateurs créent et partagent  plus d'informations que jamais, dont certaines sont trompeuses et sans rapport avec la réalité.\n\t    \t\t\t\t\t\t\t")]),t._v(" "),s("p",[t._v("\n\t\t\t\t\t\t\t\tEn vue de la nécessité de détecter ce type d’information de manières rapides pour éviter qu’elles ne se propagent, nous proposons deux approches différentes basées sur des techniques de machine learning et deep learning.\n\t\t\t\t\t\t\t\t")]),t._v(" "),s("b-button",{staticClass:"my-1",attrs:{variant:"outline-light",href:"/#/approach/"}},[t._v("Inspecter les architecture des approches proposées dans notre etude ")]),t._v(" "),s("b-button",{staticClass:"my-1",attrs:{variant:"outline-light",href:"/#/tests/"}},[t._v("Tester vos propre modèle de machine learning")]),t._v(" "),s("b-button",{staticClass:"my-1",attrs:{variant:"outline-light",href:"/#/tests/"}},[t._v("Examiner les resultats obtenus par nos modèle")])],1),t._v(" "),s("b-col",{attrs:{lg:"5"}},[s("b-img",{attrs:{fluid:"",src:"../../static/pic.png",alt:"Social media"}})],1)],1)],1)],1)])],1)],1)},staticRenderFns:[]};var p=s("VU/8")(u,d,!1,function(t){s("GjGi")},"data-v-0c02c66e",null).exports,m={components:{Navbar:c},data:function(){return{}}},h={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{attrs:{id:"container"}},[s("Navbar"),t._v(" "),s("b-container",[s("div",[s("p",{staticClass:"text-justify p-2 mt-2  h2 text-light text-center"},[t._v("Afin de detecter les fausses nouvelles automatiquement et de distinguer les informations fiables des fake news nous proposons les deux approches suivantes")]),t._v(" "),s("b-card-group",{staticClass:"mt-3",attrs:{deck:""}},[s("b-card",{attrs:{"bg-variant":"dark","text-variant":"light","title-tag":"h3",title:"Approche Basée Machine Learning"},scopedSlots:t._u([{key:"footer",fn:function(){return[s("b-button",{attrs:{variant:"light"}},[s("a",{staticClass:"text-dark",attrs:{href:"/#/approach/ML"}},[t._v("Voir l'architecture du modele construit à partir de cette approche")])])]},proxy:!0}])},[s("hr"),t._v(" "),s("b-card-text",{staticClass:"p-3 mt-3",staticStyle:{"font-size":"1.3rem"},attrs:{"text-variant":"white"}},[t._v("\n        \t\t\t\t\t\tDans cette approche on applique des algorithmes d’apprentissage non profond tel que les régressions logiques pour entraîner un modèle de classification.\n      \t\t\t\t\t\t")])],1),t._v(" "),s("b-card",{attrs:{title:"Approche Basée Deep Learning","bg-variant":"dark","text-variant":"light","title-tag":"h3"},scopedSlots:t._u([{key:"footer",fn:function(){return[s("b-button",{attrs:{variant:"light"}},[s("a",{staticClass:"text-dark",attrs:{href:"/#/approach/DL"}},[t._v("Voir l'architecture du modele construit à partir de cette approche")])])]},proxy:!0}])},[s("hr"),t._v(" "),s("b-card-text",{staticClass:"p-3 mt-3",staticStyle:{"font-size":"1.3rem"},attrs:{"text-variant":"white"}},[t._v("\n        \t\t\t\t\t\tDans cette approche on construit des modèles de classification en utilisant des réseaux de neurone profond avec plusieurs types de couches cachées.\n      \t\t\t\t\t\t")])],1)],1)],1)])],1)},staticRenderFns:[]};var b=s("VU/8")(m,h,!1,function(t){s("VjUi")},"data-v-63bbf4c6",null).exports,v=s("mtWM").default,f={components:{Navbar:c},data:function(){return{dataset:"",testSize:"0.2",modules:[],show:!0,disabledUser:!1,nbInput:10,minPostLike:20,minUserLike:40,classificationAlgo:"",sent:!1,loading:!1,fieldsMetrique:["Métrique","Score"],fieldsMatrix:["/","Prédit fake news","Prédit information fiable"],confusionMatrix:null,metricResults:null}},computed:{title:function(){return this.sent?"Resultat obtenus par votre modele":"Tester l'effet de la variations des hyperparametre sur nos modele basés ML"}},methods:{checkDataset:function(){return this.dataset.localeCompare("ISOT")},checkUser:function(){this.dataset.localeCompare("ISOT")?this.disabledUser=!1:(this.modules.includes("user")&&(1===this.modules.length?this.modules.pop():this.modules.splice(1,this.modules.indexOf("user")),console.log(this.modules)),this.disabledUser=!0)},onReset:function(t){var e=this;void 0!==t&&t.preventDefault(),this.sent=!1,this.approach="",this.dataset="",this.modules=[],this.nbInput=10,this.minPostLike=20,this.minUserLike=40,this.disabledUser=!1,this.show=!1,this.$nextTick(function(){e.show=!0})},onSubmit:function(){var t=this,e={algo:parseInt(this.classificationAlgo),dataset:this.dataset,model:2===this.modules.length?"combination":this.modules.includes("linguistic")?"linguistic_only":"user_only",matrix_nb_row:parseInt(this.nbInput),min_post_like:parseInt(this.minPostLike),min_user_like:parseInt(this.minUserLike),test_size:parseFloat(this.testSize)};this.sent=!0,this.loading=!0,v.post("http://localhost:5000/evaluation",e).then(function(e){var s=e.data;t.confusionMatrix=[{"/":"Fake news","Prédit fake news":s.true_positive,"Prédit information fiable":s.false_negative},{"/":"Information fiable","Prédit fake news":s.false_positive,"Prédit information fiable":s.true_negative}],console.log(s),t.metricResults=[{"Métrique":"Justesse",Score:s.accuracy.toFixed(4)},{"Métrique":"Précision",Score:s.precision.toFixed(4)},{"Métrique":"Rappel",Score:s.recall.toFixed(4)},{"Métrique":"Score-F1",Score:s.f1_score.toFixed(4)}],t.loading=!1})}}},g={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("Navbar"),t._v(" "),s("h2",{staticClass:"text-light mt-2 p-2"},[t._v(t._s(t.title))]),t._v(" "),t.sent?s("b-card",{staticClass:"mx-auto mb-2",attrs:{id:"card-form","title-tag":"h3","bg-variant":"dark"}},[s("div",{staticClass:"container"},[s("b-row",[s("b-col",{attrs:{sm:"12",lg:"6"}},[s("b-table",{staticClass:"text-light mt-5",attrs:{dark:!0,id:"results-table",busy:t.loading,striped:"",hover:"",items:t.metricResults,fields:t.fieldsMetrique},scopedSlots:t._u([{key:"table-busy",fn:function(){return[s("div",{staticClass:"text-center text-light my-2"},[s("b-spinner",{staticClass:"align-middle"}),t._v(" "),s("strong",[t._v("Loading...")])],1)]},proxy:!0}])})],1),t._v(" "),s("b-col",{attrs:{sm:"12",lg:"6"}},[s("b-table",{staticClass:"text-light mt-5",attrs:{dark:!0,id:"results-table",busy:t.loading,striped:"",hover:"",items:t.confusionMatrix,fields:t.fieldsMatrix},scopedSlots:t._u([{key:"table-busy",fn:function(){return[s("div",{staticClass:"text-center text-light my-2"},[s("b-spinner",{staticClass:"align-middle"}),t._v(" "),s("strong",[t._v("Loading...")])],1)]},proxy:!0}])})],1)],1)],1),t._v(" "),t.loading?t._e():s("b-button",{staticClass:"col-lg-3",attrs:{variant:"outline-light"},on:{click:function(e){return t.onReset()}}},[t._v("\n\t\t\t\tTester d'autre Modele\t\n\t\t\t")])],1):s("b-card",{staticClass:"mx-auto mb-2",attrs:{id:"card-form","title-tag":"h3","bg-variant":"dark","text-variant":"light",title:"Remplissez le formulaire avec les hyperparametre de votre choix pour entrainer un modele de ML et examiner ses resultats"}},[s("hr"),t._v(" "),t.show?s("b-form",{staticClass:"p-1",on:{reset:t.onReset}},[s("b-row",{staticClass:"p-1"},[s("b-form-group",{staticClass:"h5 col text-light",attrs:{label:"Choisissez le pourcentage des données utilisées pour le test"},scopedSlots:t._u([{key:"default",fn:function(e){return e.ariaDescribedby,[s("b-col",{attrs:{sm:"12",lg:"4","offset-lg":"4"}},[s("b-form-input",{staticClass:"text-light black-input",attrs:{placeholder:"pourcentage des données de test",type:"text"},model:{value:t.testSize,callback:function(e){t.testSize=e},expression:"testSize"}})],1)]}}],null,!1,3960463697)})],1),t._v(" "),s("b-row",{staticClass:"mt-1 p-1"},[s("b-form-group",{staticClass:"h5 col text-light",attrs:{label:"Sur quel dataset voulais vous appliquer ce modele ?"},scopedSlots:t._u([{key:"default",fn:function(e){var a=e.ariaDescribedby;return[s("b-form-radio-group",[s("b-form-radio",{staticClass:"text-left h6",attrs:{"aria-describedby":a,name:"dataset-radio",value:"ISOT"},on:{change:t.checkUser},model:{value:t.dataset,callback:function(e){t.dataset=e},expression:"dataset"}},[t._v("ISOT")]),t._v(" "),s("b-form-radio",{staticClass:"text-left h6",attrs:{"aria-describedby":a,name:"dataset-radio",value:"FNN"},on:{change:t.checkUser},model:{value:t.dataset,callback:function(e){t.dataset=e},expression:"dataset"}},[t._v("FakeNews Dataset")])],1)]}}],null,!1,1952567898)})],1),t._v(" "),s("b-row",{staticClass:"mt-1 p-1"},[s("b-form-group",{staticClass:"h5 col text-light",attrs:{label:"Quels sont les modules que vous voulez  utilisés ?"},scopedSlots:t._u([{key:"default",fn:function(e){var a=e.ariaDescribedby;return[s("b-form-checkbox-group",{attrs:{"aria-describedby":a,name:"modules",checked:t.modules,switches:""},model:{value:t.modules,callback:function(e){t.modules=e},expression:"modules"}},[s("b-form-checkbox",{staticClass:"text-left h6",attrs:{value:"linguistic"}},[t._v("Analyse Linguistique")]),t._v(" "),s("b-form-checkbox",{staticClass:"text-left h6",attrs:{value:"user",disabled:t.disabledUser}},[t._v("Analyse des Caracteristiques utilisateur")])],1)]}}],null,!1,3301615863)})],1),t._v(" "),s("b-button",{staticClass:"col-lg-3 ",attrs:{type:"submit",variant:"outline-light"},on:{click:function(e){e.preventDefault(),t.show=!1}}},[t._v("Next")]),t._v(" "),s("b-button",{staticClass:"col-lg-3 offset-lg-3",attrs:{type:"reset",variant:"outline-secondary"},on:{click:t.onReset}},[t._v("Reset")])],1):s("b-form",{staticClass:"p-1",on:{reset:t.onReset}},[s("b-row",{staticClass:"p-1"},[s("b-form-group",{staticClass:"h5 col text-light",attrs:{label:"Quel algorithme de classification voulez vous utiliser ?"},scopedSlots:t._u([{key:"default",fn:function(e){var a=e.ariaDescribedby;return[s("b-form-radio-group",[s("b-form-radio",{staticClass:"text-left h6",attrs:{"aria-describedby":a,name:"algo-radio",value:"1"},model:{value:t.classificationAlgo,callback:function(e){t.classificationAlgo=e},expression:"classificationAlgo"}},[t._v("Regression Logistique")]),t._v(" "),s("b-form-radio",{staticClass:"text-left h6",attrs:{"aria-describedby":a,name:"algo-radio",value:"2"},model:{value:t.classificationAlgo,callback:function(e){t.classificationAlgo=e},expression:"classificationAlgo"}},[t._v("Arbre de décision")]),t._v(" "),s("b-form-radio",{staticClass:"text-left h6",attrs:{"aria-describedby":a,name:"algo-radio",value:"3"},model:{value:t.classificationAlgo,callback:function(e){t.classificationAlgo=e},expression:"classificationAlgo"}},[t._v("Forêt aléatoire d'arbre de décision")])],1)]}}],null,!1,2655846719)})],1),t._v(" "),t.modules.includes("linguistic")?s("b-row",{staticClass:"p-1"},[s("b-form-group",{staticClass:"h5 col text-light",attrs:{label:"Choisissez le nombre de parametre d'entrée à donner au module linguistique"},scopedSlots:t._u([{key:"default",fn:function(e){return e.ariaDescribedby,[s("b-col",{attrs:{sm:"12",lg:"4","offset-lg":"4"}},[s("b-form-input",{staticClass:"text-light black-input",attrs:{type:"text"},model:{value:t.nbInput,callback:function(e){t.nbInput=e},expression:"nbInput"}})],1)]}}],null,!1,4248612539)})],1):t._e(),t._v(" "),t.modules.includes("user")&&1===t.modules.length?s("b-row",{staticClass:"p-1"},[s("b-form-group",{staticClass:"h5 col text-light",attrs:{label:"Choisissez la valeur de l'hyperparametre min_user_like"},scopedSlots:t._u([{key:"default",fn:function(e){return e.ariaDescribedby,[s("b-col",{attrs:{sm:"12",lg:"4","offset-lg":"4"}},[s("b-form-input",{staticClass:"text-light black-input",attrs:{type:"text"},model:{value:t.minUserLike,callback:function(e){t.minUserLike=e},expression:"minUserLike"}})],1)]}}],null,!1,3532591985)})],1):t._e(),t._v(" "),t.modules.includes("user")&&1===t.modules.length?s("b-row",{staticClass:"p-1"},[s("b-form-group",{staticClass:"h5 col text-light",attrs:{label:"Choisissez la valeur de l'hyperparametre min_post_like"},scopedSlots:t._u([{key:"default",fn:function(e){return e.ariaDescribedby,[s("b-col",{attrs:{sm:"12",lg:"4","offset-lg":"4"}},[s("b-form-input",{staticClass:"text-light black-input",attrs:{type:"text"},model:{value:t.minPostLike,callback:function(e){t.minPostLike=e},expression:"minPostLike"}})],1)]}}],null,!1,2318587544)})],1):t._e(),t._v(" "),s("b-button",{staticClass:"col-lg-3 ",attrs:{type:"submit",variant:"outline-light"},on:{click:function(e){return e.preventDefault(),t.onSubmit.apply(null,arguments)}}},[t._v("Tester le modele")]),t._v(" "),s("b-button",{staticClass:"col-lg-3 offset-lg-3",attrs:{type:"reset",variant:"outline-secondary"},on:{click:t.onReset}},[t._v("Reset")])],1)],1)],1)},staticRenderFns:[]};var _=s("VU/8")(f,g,!1,function(t){s("Vk3s")},"data-v-1d6d8110",null).exports,x={components:{Navbar:c},data:function(){return{dataset:"",approche:"",modules:[],show:!0,disabledUser:!1,disabledFNN:!1}},methods:{switchFNN:function(){console.log("DONE"),this.approche.localeCompare("DL")?this.disabledFNN=!1:(this.dataset.localeCompare("FNN")||(this.dataset=""),this.disabledFNN=!0)},checkDataset:function(){return this.dataset.localeCompare("ISOT")},checkUser:function(){this.dataset.localeCompare("ISOT")?this.disabledUser=!1:(this.modules.includes("user")&&(1===this.modules.length?this.modules.pop():this.modules.splice(1,this.modules.indexOf("user")),console.log(this.modules)),this.disabledUser=!0)},onReset:function(t){var e=this;t.preventDefault(),this.approche="",this.dataset="",this.modules=[],this.disabledFNN=!1,this.disabledUser=!1,this.show=!1,this.$nextTick(function(){e.show=!0})},onSubmit:function(t){window.location.href="/#/results/"+this.approche+"/"+(2===this.modules.length?"combination":this.modules[0])+"/"+this.dataset}}},k={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("Navbar"),t._v(" "),s("h2",{staticClass:"text-light mt-2 p-2"},[t._v("Examiner les resultats obtenus par nos modèles")]),t._v(" "),s("b-card",{staticClass:"mx-auto",attrs:{id:"card-form","title-tag":"h3","bg-variant":"dark","text-variant":"light",title:"Remplissez le formulaire avec la configuration qui vous conviens et  jetter un oeil à ses resultats"}},[s("hr"),t._v(" "),t.show?s("b-form",{staticClass:"p-1",on:{reset:t.onReset}},[s("b-row",{staticClass:"p-1"},[s("b-form-group",{staticClass:"h5 col text-light",attrs:{label:"Choisissez l'approche qui vous interesse"},scopedSlots:t._u([{key:"default",fn:function(e){var a=e.ariaDescribedby;return[s("b-form-radio-group",[s("b-form-radio",{staticClass:"text-left h6",attrs:{"aria-describedby":a,name:"approach-radio",value:"ML"},on:{change:function(e){return t.switchFNN()}},model:{value:t.approche,callback:function(e){t.approche=e},expression:"approche"}},[t._v("Basée Machine Learning")]),t._v(" "),s("b-form-radio",{staticClass:"text-left h6",attrs:{"aria-describedby":a,name:"approach-radio",value:"DL"},on:{change:function(e){return t.switchFNN()}},model:{value:t.approche,callback:function(e){t.approche=e},expression:"approche"}},[t._v("Basée Deep Learning")])],1)]}}],null,!1,927418416)})],1),t._v(" "),s("b-row",{staticClass:"mt-1 p-1"},[s("b-form-group",{staticClass:"h5 col text-light",attrs:{label:"Sur quel dataset voulais vous appliquer ce modele ?"},scopedSlots:t._u([{key:"default",fn:function(e){var a=e.ariaDescribedby;return[s("b-form-radio-group",[s("b-form-radio",{staticClass:"text-left h6",attrs:{"aria-describedby":a,name:"dataset-radio",value:"ISOT"},on:{change:t.checkUser},model:{value:t.dataset,callback:function(e){t.dataset=e},expression:"dataset"}},[t._v("ISOT")]),t._v(" "),s("b-form-radio",{staticClass:"text-left h6",attrs:{disabled:t.disabledFNN,"aria-describedby":a,name:"dataset-radio",value:"FNN"},on:{change:t.checkUser},model:{value:t.dataset,callback:function(e){t.dataset=e},expression:"dataset"}},[t._v("FakeNews Dataset")])],1)]}}],null,!1,3603071018)})],1),t._v(" "),s("b-row",{staticClass:"mt-1 p-1"},[s("b-form-group",{staticClass:"h5 col text-light",attrs:{label:"Quels sont les modules que vous voulez  utilisés ?"},scopedSlots:t._u([{key:"default",fn:function(e){var a=e.ariaDescribedby;return[s("b-form-checkbox-group",{attrs:{"aria-describedby":a,name:"modules",checked:t.modules,switches:""},model:{value:t.modules,callback:function(e){t.modules=e},expression:"modules"}},[s("b-form-checkbox",{staticClass:"text-left h6",attrs:{value:"linguistic"}},[t._v("Analyse Linguistique")]),t._v(" "),s("b-form-checkbox",{staticClass:"text-left h6",attrs:{value:"user",disabled:t.disabledUser}},[t._v("Analyse des Caracteristiques utilisateur")])],1)]}}],null,!1,3301615863)})],1),t._v(" "),s("b-button",{staticClass:"col-lg-3",attrs:{type:"submit",variant:"outline-light"},on:{click:function(e){return e.preventDefault(),t.onSubmit()}}},[t._v("Submit")]),t._v(" "),s("b-button",{staticClass:"col-lg-3 offset-lg-3",attrs:{type:"reset",variant:"outline-secondary"}},[t._v("Reset")])],1):t._e()],1)],1)},staticRenderFns:[]};var C=s("VU/8")(x,k,!1,function(t){s("c1WF")},"data-v-e7440546",null).exports,y={components:{Navbar:c},data:function(){return{}}},M={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("Navbar"),this._v(" "),e("b-container",[e("h1",{staticClass:"text-light"},[this._v("Architecture de l'approche basée Machine Learning")]),this._v(" "),e("b-img-lazy",{attrs:{"fluid-grow":"",src:"../../static/ML.jpg",height:"200px",alt:"Architecture du modele basé ML"}})],1)],1)},staticRenderFns:[]};var L=s("VU/8")(y,M,!1,function(t){s("z7yW")},"data-v-06a87eba",null).exports,S={components:{Navbar:c},data:function(){return{}}},w={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("Navbar"),this._v(" "),e("b-container",[e("h1",{staticClass:"text-light"},[this._v("Architecture de l'approche basée Deep Learning")]),this._v(" "),e("b-img-lazy",{attrs:{"fluid-grow":"",src:"../../static/DL.jpg",alt:"Architecture du modele basé ML"}})],1)],1)},staticRenderFns:[]};var D=s("VU/8")(S,w,!1,function(t){s("N64v")},"data-v-f8ee91ea",null).exports,N={components:{Navbar:c},data:function(){return{DLinguisticISOT:{values:[{"Modèle":"Full linguistic module with average pooling and GloVe word embedding",Justesse:.9984,MAE:.0019,MSE:.00139,"Temps d'entrainement":947.46},{"Modèle":"Full linguistic module with max pooling and GloVe word embedding",Justesse:.9984,MAE:.0018,MSE:.00141,"Temps d'entrainement":1544.46},{"Modèle":"Full linguistic module with average pooling and trainable  word embedding",Justesse:.9963,MAE:.0043,MSE:.0032,"Temps d'entrainement":3607.56},{"Modèle":"GloVe word embedding + DNN",Justesse:.9767,MAE:.0253,MSE:.0193,"Temps d'entrainement":802.62}],fields:"DL",caption:"Résultats obtenus par le module linguistique du modèle basé DL et ses variantes sur les données de test du dataset ISOT"},DLUser:{values:[{"Modèle":"Module user basé DL",Justesse:.4965,MAE:.5,MSE:.25,"Temps d'entrainement":202}],fields:"DL",caption:"Résultats obtenus par le module User du modèle basé DL sur les données de test du dataset FNN"},DLCombination:{values:[{"Modèle":"Modèle au complet basé DL",Justesse:.5001,MAE:.4999,MSE:.2514,"Temps d'entrainement":"/"}],fields:"DL",caption:"Résultats obtenus par le modèle basé DL sur les données de test du dataset FNN"},MLUser:{values:[{"Modèle":"Module User basé ML",Justesse:.709,"Précision":.8076,Rappel:.6562,"Score-F1":.7241}],fields:"ML",caption:"Résultats obtenus par le module d'analyse des caractéristiques utilisateurs basé machine learning utilisant une régression logistique"},MLCombination:{values:[{"Modèle":"Modèle basé ML utilisant un algorithme de regression linéaire",Justesse:.7272,"Précision":.59375,Rappel:.9047,"Score-F1":.7169},{"Modèle":"Modèle basé ML utilisant un algorithme d'arbre de décision",Justesse:.6909,"Précision":.65625,Rappel:.7777,"Score-F1":.7118},{"Modèle":"Modèle basé ML utilisant un algorithme de foret aléatoire d'arbre de décision",Justesse:.709,"Précision":.625,Rappel:.8333,"Score-F1":.7142}],fields:"ML",caption:"Résultats obtenus par le modèle basé machine learning en utilisant plusierus algorithme de classification"},MLinguisticISOT:{values:[{"Modèle":"Modèle basé ML utilisant un algorithme de regression linéaire",Justesse:.8834,"Précision":.913,Rappel:.8598,"Score-F1":.8856},{"Modèle":"Modèle basé ML utilisant un algorithme d'arbre de décision",Justesse:.892,"Précision":.8959,Rappel:.8986,"Score-F1":.8972},{"Modèle":"Modèle basé ML utilisant un algorithme de foret aléatoire d'arbre de décision",Justesse:.9242,"Précision":.939,Rappel:.915,"Score-F1":.9268}],fields:"ML",caption:"Résultats obtenus par le module linguistique du modèle basé machine learning utilisant sur le dataset ISOT en utilisant plusieurs algorithmes de classification"},MLinguisticFNN:{values:[{"Modèle":"Module linguistique du modèle  basé ML utilisant un algorithme de regression linéaire",Justesse:.6363,"Précision":.6666,Rappel:.5185,"Score-F1":.5833},{"Modèle":"Module linguistique du Modèle basé ML utilisant un algorithme d'arbre de décision",Justesse:.6,"Précision":.6087,Rappel:.5185,"Score-F1":.5599},{"Modèle":"Module linguistique du Modèle basé ML utilisant un algorithme de foret aléatoire d'arbre de décision",Justesse:.6182,"Précision":.6071,Rappel:.6296,"Score-F1":.6182}],fields:"ML",caption:"Résultats obtenus par le module linguistique du modèle basé machine learning utilisant sur le dataset FNN en utilisant plusieurs algorithmes de classification"}}},methods:{get_results:function(){if(!this.$route.params.approach.localeCompare("DL")&&!this.$route.params.model.localeCompare("linguistic"))return this.DLinguisticISOT;if(!this.$route.params.approach.localeCompare("DL")&&!this.$route.params.model.localeCompare("user"))return this.DLUser;if(!this.$route.params.approach.localeCompare("DL")&&!this.$route.params.model.localeCompare("combination"))return this.DLCombination;if(!this.$route.params.approach.localeCompare("ML")&&!this.$route.params.model.localeCompare("combination"))return this.MLCombination;if(!this.$route.params.approach.localeCompare("ML")&&!this.$route.params.model.localeCompare("user"))return this.MLUser;if(!this.$route.params.approach.localeCompare("ML")&&!this.$route.params.model.localeCompare("linguistic")){if(!this.$route.params.dataset.localeCompare("FNN"))return this.MLinguisticFNN;if(!this.$route.params.dataset.localeCompare("ISOT"))return this.MLinguisticISOT}},fields:function(t){return t.localeCompare("DL")?[{key:"Modèle",sortable:!1},{key:"Justesse",sortable:!0,sortDirection:"asc"},{key:"Précision",sortable:!0,sortDirection:"asc"},{key:"Rappel",sortable:!0,sortDirection:"asc"},{key:"Score-F1",sortable:!0,sortDirection:"asc"}]:[{key:"Modèle",sortable:!1},{key:"Justesse",sortable:!0,sortDirection:"asc"},{key:"MAE",label:"Mean Absolute Error",sortable:!0,sortDirection:"desc"},{key:"MSE",label:"Mean Squared Error",sortable:!0,sortDirection:"desc"},{key:"Temps d'entrainement",sortable:!0,sortDirection:"desc"}]}}},F={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("Navbar"),t._v(" "),s("b-container",[s("b-table",{staticClass:"text-light mt-5",attrs:{dark:!0,id:"results-table",striped:"",hover:"",items:t.get_results().values,fields:t.fields(t.get_results().fields)}}),t._v(" "),s("p",{staticClass:"text-light text-center"},[t._v(t._s(t.get_results().caption))])],1)],1)},staticRenderFns:[]};var R=s("VU/8")(N,F,!1,function(t){s("T9ZX")},"data-v-caf82998",null).exports;a.default.use(o.a);var q=new o.a({routes:[{path:"/",name:"HomePage",component:p},{path:"/approach",name:"Approach",component:b},{path:"/approach/ML",name:"ML",component:L},{path:"/approach/DL",name:"DL",component:D},{path:"/tests",name:"Tests",component:_},{path:"/results",name:"Results",component:C},{path:"/results/:approach/:model/:dataset",name:"TabledResults",component:R}]}),A=s("Tqaz");s("Jmt5"),s("9M+g");a.default.use(A.a),a.default.use(A.b),a.default.config.productionTip=!0,new a.default({el:"#app",router:q,components:{App:r},template:"<App/>"})},T9ZX:function(t,e){},VjUi:function(t,e){},Vk3s:function(t,e){},c1WF:function(t,e){},z7yW:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.343e7223451bbec5aefe.js.map