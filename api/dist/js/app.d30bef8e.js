(function(e){function t(t){for(var a,o,l=t[0],n=t[1],c=t[2],d=0,p=[];d<l.length;d++)o=l[d],Object.prototype.hasOwnProperty.call(i,o)&&i[o]&&p.push(i[o][0]),i[o]=0;for(a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a]);u&&u(t);while(p.length)p.shift()();return r.push.apply(r,c||[]),s()}function s(){for(var e,t=0;t<r.length;t++){for(var s=r[t],a=!0,l=1;l<s.length;l++){var n=s[l];0!==i[n]&&(a=!1)}a&&(r.splice(t--,1),e=o(o.s=s[0]))}return e}var a={},i={app:0},r=[];function o(t){if(a[t])return a[t].exports;var s=a[t]={i:t,l:!1,exports:{}};return e[t].call(s.exports,s,s.exports,o),s.l=!0,s.exports}o.m=e,o.c=a,o.d=function(e,t,s){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:s})},o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var s=Object.create(null);if(o.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)o.d(s,a,function(t){return e[t]}.bind(null,a));return s},o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="/dist/";var l=window["webpackJsonp"]=window["webpackJsonp"]||[],n=l.push.bind(l);l.push=t,l=l.slice();for(var c=0;c<l.length;c++)t(l[c]);var u=n;r.push([0,"chunk-vendors"]),s()})({0:function(e,t,s){e.exports=s("56d7")},"034f":function(e,t,s){"use strict";s("85ec")},2597:function(e,t,s){"use strict";s("ce08")},"4adc":function(e,t,s){e.exports=s.p+"img/ML.9e88361d.jpg"},5201:function(e,t,s){},"56d7":function(e,t,s){"use strict";s.r(t);s("e260"),s("e6cf"),s("cca6"),s("a79d");var a=s("a026"),i=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{attrs:{id:"app"}},[s("router-view")],1)},r=[],o={name:"App"},l=o,n=(s("034f"),s("2877")),c=Object(n["a"])(l,i,r,!1,null,null,null),u=c.exports,d=s("8c4f"),p=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("Navbar"),a("b-container",{attrs:{fluid:""}},[a("b-row",[a("div",[a("b-jumbotron",{attrs:{"text-variant":"light","bg-variant":"transparent"},scopedSlots:e._u([{key:"header",fn:function(){return[e._v("FakeNews Buster")]},proxy:!0},{key:"lead",fn:function(){return[e._v(" La plateforme fakenews buster est une plateforme permettant d'evaluer les performances des modèles proposés dans l'étude menée dans le cadre de l'obtention de diplome de licence en informatique générale à l'université des science et de la technologie Houari Boumedien ")]},proxy:!0}])},[a("hr",{staticClass:"my-1"}),a("b-row",[a("b-col",{attrs:{lg:"7"}},[a("p",[e._v(" Avec l'utilisation actuelle des plateformes de médias sociaux, les consommateurs créent et partagent plus d'informations que jamais, dont certaines sont trompeuses et sans rapport avec la réalité. ")]),a("p",[e._v(" En vue de la nécessité de détecter ce type d’information de manières rapides pour éviter qu’elles ne se propagent, nous proposons deux approches différentes basées sur des techniques de machine learning et deep learning. ")]),a("b-button",{staticClass:"my-1",attrs:{variant:"outline-light",href:"/#/approach/"}},[e._v("Inspecter les architectures des approches proposées dans notre étude ")]),a("b-button",{staticClass:"my-1",attrs:{variant:"outline-light",href:"/#/tests/"}},[e._v("Testez vos propres modèles de machine learning")]),a("b-button",{staticClass:"my-1",attrs:{variant:"outline-light",href:"/#/tests/"}},[e._v("Examiner les résultats obtenus par nos modèle")])],1),a("b-col",{attrs:{lg:"5"}},[a("b-img",{attrs:{fluid:"",src:s("c1d4"),alt:"Social media"}})],1)],1)],1)],1)])],1)],1)},b=[],m=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{attrs:{id:"home"}},[s("b-navbar",{attrs:{toggleable:"lg",type:"dark",variant:"dark",sticky:!0}},[s("b-navbar-brand",{attrs:{href:"/#/"}},[e._v("FakeNews Buster")]),s("b-navbar-toggle",{attrs:{target:"nav-collapse"}}),s("b-collapse",{attrs:{id:"nav-collapse","is-nav":""}},[s("b-navbar-nav",{staticClass:"ml-auto"},[s("b-nav-item-dropdown",{attrs:{right:""},scopedSlots:e._u([{key:"button-content",fn:function(){return[s("b-icon",{attrs:{icon:"gear-fill",animation:"spin"}}),e._v(" Approche ")]},proxy:!0}])},[s("b-dropdown-item",{attrs:{href:"/#/approach/"}},[e._v("Description des approches")]),s("b-dropdown-item",{attrs:{href:"/#/approach/ML"}},[e._v("Architecture ML")]),s("b-dropdown-item",{attrs:{href:"/#/approach/DL"}},[e._v("Architecture DL")])],1),s("b-nav-item",{attrs:{"active-class":"active",href:e.items[0].path,right:""}},[s("b-icon",{attrs:{icon:"zoom-in",animation:"throb"}}),e._v(" "+e._s(e.items[0].title))],1),s("b-nav-item",{attrs:{"active-class":"active",href:e.items[1].path,right:""}},[s("b-icon",{attrs:{icon:"bar-chart-fill"}}),e._v(" "+e._s(e.items[1].title))],1)],1)],1)],1)],1)},h=[],f={data:function(){return{sidebar:!1,items:[{title:"Testez vos propres modèles",path:"/#/tests",name:"Tests"},{title:"Résultats",path:"/#/results",name:"Results"}]}}},g=f,v=Object(n["a"])(g,m,h,!1,null,null,null),x=v.exports,y={components:{Navbar:x},data:function(){return{}}},_=y,k=Object(n["a"])(_,p,b,!1,null,"50aaeee3",null),C=k.exports,M=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{attrs:{id:"container"}},[s("Navbar"),s("b-container",[s("div",[s("p",{staticClass:"text-justify p-2 mt-2  h2 text-light text-center"},[e._v("Afin de détecter les fausses nouvelles automatiquement et de distinguer les informations fiables des fake news nous proposons les deux approches suivantes")]),s("b-card-group",{staticClass:"mt-3",attrs:{deck:""}},[s("b-card",{attrs:{"bg-variant":"dark","text-variant":"light","title-tag":"h3",title:"Approche Basée Machine Learning"},scopedSlots:e._u([{key:"footer",fn:function(){return[s("b-button",{attrs:{variant:"light"}},[s("a",{staticClass:"text-dark",attrs:{href:"/#/approach/ML"}},[e._v("Voir l'architecture du modèle construit à partir de cette approche")])])]},proxy:!0}])},[s("hr"),s("b-card-text",{staticClass:"p-3 mt-3",staticStyle:{"font-size":"1.3rem"},attrs:{"text-variant":"white"}},[e._v(" Dans cette approche on applique des algorithmes d’apprentissage non profond tel que les régressions logiques pour entraîner un modèle de classification. ")])],1),s("b-card",{attrs:{title:"Approche Basée Deep Learning","bg-variant":"dark","text-variant":"light","title-tag":"h3"},scopedSlots:e._u([{key:"footer",fn:function(){return[s("b-button",{attrs:{variant:"light"}},[s("a",{staticClass:"text-dark",attrs:{href:"/#/approach/DL"}},[e._v("Voir l'architecture du modèle construit à partir de cette approche")])])]},proxy:!0}])},[s("hr"),s("b-card-text",{staticClass:"p-3 mt-3",staticStyle:{"font-size":"1.3rem"},attrs:{"text-variant":"white"}},[e._v(" Dans cette approche on construit des modèles de classification en utilisant des réseaux de neurone profond avec plusieurs types de couches cachées. ")])],1)],1)],1)])],1)},L=[],S={components:{Navbar:x},data:function(){return{}}},w=S,D=(s("d2ec"),Object(n["a"])(w,M,L,!1,null,"ccf4e22c",null)),N=D.exports,F=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",[s("Navbar"),s("h2",{staticClass:"text-light mt-2 p-2"},[e._v(e._s(e.title))]),e.sent?s("b-card",{staticClass:"mx-auto mb-2",attrs:{id:"card-form","title-tag":"h3","bg-variant":"dark"}},[s("div",{staticClass:"container"},[s("b-row",[s("b-col",{attrs:{sm:"12",lg:"6"}},[s("b-table",{staticClass:"text-light mt-5",attrs:{dark:!0,id:"results-table",busy:e.loading,striped:"",hover:"",items:e.metricResults,fields:e.fieldsMetrique},scopedSlots:e._u([{key:"table-busy",fn:function(){return[s("div",{staticClass:"text-center text-light my-2"},[s("b-spinner",{staticClass:"align-middle"}),s("br"),s("strong",[e._v("Loading...")])],1)]},proxy:!0}])})],1),s("b-col",{attrs:{sm:"12",lg:"6"}},[s("b-table",{staticClass:"text-light mt-5",attrs:{dark:!0,id:"results-table",busy:e.loading,striped:"",hover:"",items:e.confusionMatrix,fields:e.fieldsMatrix},scopedSlots:e._u([{key:"table-busy",fn:function(){return[s("div",{staticClass:"text-center text-light my-2"},[s("b-spinner",{staticClass:"align-middle"}),s("br"),s("strong",[e._v("Loading...")])],1)]},proxy:!0}])})],1)],1)],1),e.loading?e._e():s("b-button",{staticClass:"col-lg-3",attrs:{variant:"outline-light"},on:{click:function(t){return e.onReset()}}},[e._v(" Tester d'autre Modèle ")])],1):s("b-card",{staticClass:"mx-auto mb-2",attrs:{id:"card-form","title-tag":"h3","bg-variant":"dark","text-variant":"light",title:"Remplissez le formulaire avec les hyperparamètres de votre choix pour entraîner un modèle de ML et examinez ses resultats"}},[s("hr"),e.show?s("b-form",{staticClass:"p-1",on:{reset:e.onReset}},[s("b-row",{staticClass:"p-1"},[s("b-form-group",{staticClass:"h5 col text-light",attrs:{label:"Choisissez le pourcentage des données utilisées pour le test"},scopedSlots:e._u([{key:"default",fn:function(t){t.ariaDescribedby;return[s("b-col",{attrs:{sm:"12",lg:"4","offset-lg":"4"}},[s("b-form-input",{staticClass:"text-light",staticStyle:{"background-color":"#292b2c"},attrs:{placeholder:"pourcentage des données de test",type:"text"},model:{value:e.testSize,callback:function(t){e.testSize=t},expression:"testSize"}})],1)]}}],null,!1,3874105631)})],1),s("b-row",{staticClass:"mt-1 p-1"},[s("b-form-group",{staticClass:"h5 col text-light",attrs:{label:"Sur quel dataset voulez vous appliquer ce modèle ?"},scopedSlots:e._u([{key:"default",fn:function(t){var a=t.ariaDescribedby;return[s("b-form-radio-group",[s("b-form-radio",{staticClass:"text-left h6",attrs:{"aria-describedby":a,name:"dataset-radio",value:"ISOT"},on:{change:e.checkUser},model:{value:e.dataset,callback:function(t){e.dataset=t},expression:"dataset"}},[e._v("ISOT")]),s("b-form-radio",{staticClass:"text-left h6",attrs:{"aria-describedby":a,name:"dataset-radio",value:"FNN"},on:{change:e.checkUser},model:{value:e.dataset,callback:function(t){e.dataset=t},expression:"dataset"}},[e._v("FakeNews Dataset")])],1)]}}],null,!1,3523035006)})],1),s("b-row",{staticClass:"mt-1 p-1"},[s("b-form-group",{staticClass:"h5 col text-light",attrs:{label:"Quels sont les modules que vous voulez  utiliser ?"},scopedSlots:e._u([{key:"default",fn:function(t){var a=t.ariaDescribedby;return[s("b-form-checkbox-group",{attrs:{"aria-describedby":a,name:"modules",checked:e.modules,switches:""},model:{value:e.modules,callback:function(t){e.modules=t},expression:"modules"}},[s("b-form-checkbox",{staticClass:"text-left h6",attrs:{value:"linguistic"}},[e._v("Analyse Linguistique")]),s("b-form-checkbox",{staticClass:"text-left h6",attrs:{value:"user",disabled:e.disabledUser}},[e._v("Analyse des Caractéristiques utilisateur")])],1)]}}],null,!1,3439535967)})],1),s("b-button",{staticClass:"col-lg-3 ",attrs:{type:"submit",variant:"outline-light"},on:{click:function(t){t.preventDefault(),e.show=!1}}},[e._v("Suivant")]),s("b-button",{staticClass:"col-lg-3 offset-lg-3",attrs:{type:"reset",variant:"outline-secondary"},on:{click:e.onReset}},[e._v("Reset")])],1):s("b-form",{staticClass:"p-1",on:{reset:e.onReset}},[s("b-row",{staticClass:"p-1"},[s("b-form-group",{staticClass:"h5 col text-light",attrs:{label:"Quel algorithme de classification voulez vous utiliser ?"},scopedSlots:e._u([{key:"default",fn:function(t){var a=t.ariaDescribedby;return[s("b-form-radio-group",[s("b-form-radio",{staticClass:"text-left h6",attrs:{"aria-describedby":a,name:"algo-radio",value:"1"},model:{value:e.classificationAlgo,callback:function(t){e.classificationAlgo=t},expression:"classificationAlgo"}},[e._v("Regression logistique")]),s("b-form-radio",{staticClass:"text-left h6",attrs:{"aria-describedby":a,name:"algo-radio",value:"2"},model:{value:e.classificationAlgo,callback:function(t){e.classificationAlgo=t},expression:"classificationAlgo"}},[e._v("Arbre de décision")]),s("b-form-radio",{staticClass:"text-left h6",attrs:{"aria-describedby":a,name:"algo-radio",value:"3"},model:{value:e.classificationAlgo,callback:function(t){e.classificationAlgo=t},expression:"classificationAlgo"}},[e._v("Forêt aléatoire d'arbre de décision")])],1)]}}],null,!1,2755800479)})],1),e.modules.includes("linguistic")?s("b-row",{staticClass:"p-1"},[s("b-form-group",{staticClass:"h5 col text-light",attrs:{label:"Choisissez le nombre de paramètre d'entrée à donner au module linguistique"},scopedSlots:e._u([{key:"default",fn:function(t){t.ariaDescribedby;return[s("b-col",{attrs:{sm:"12",lg:"4","offset-lg":"4"}},[s("b-form-input",{staticClass:"text-light",staticStyle:{"background-color":"#292b2c"},attrs:{type:"text"},model:{value:e.nbInput,callback:function(t){e.nbInput=t},expression:"nbInput"}})],1)]}}],null,!1,151593013)})],1):e._e(),e.modules.includes("user")&&1===e.modules.length?s("b-row",{staticClass:"p-1"},[s("b-form-group",{staticClass:"h5 col text-light",attrs:{label:"Choisissez la valeur de l'hyperparamètre min_user_like"},scopedSlots:e._u([{key:"default",fn:function(t){t.ariaDescribedby;return[s("b-col",{attrs:{sm:"12",lg:"4","offset-lg":"4"}},[s("b-form-input",{staticClass:"text-light",staticStyle:{"background-color":"#292b2c"},attrs:{type:"text"},model:{value:e.minUserLike,callback:function(t){e.minUserLike=t},expression:"minUserLike"}})],1)]}}],null,!1,2198230591)})],1):e._e(),e.modules.includes("user")&&1===e.modules.length?s("b-row",{staticClass:"p-1"},[s("b-form-group",{staticClass:"h5 col text-light",attrs:{label:"Choisissez la valeur de l'hyperparamètre min_post_like"},scopedSlots:e._u([{key:"default",fn:function(t){t.ariaDescribedby;return[s("b-col",{attrs:{sm:"12",lg:"4","offset-lg":"4"}},[s("b-form-input",{staticClass:"text-light",staticStyle:{"background-color":"#292b2c"},attrs:{type:"text"},model:{value:e.minPostLike,callback:function(t){e.minPostLike=t},expression:"minPostLike"}})],1)]}}],null,!1,1180551990)})],1):e._e(),s("b-button",{staticClass:"col-lg-3 ",attrs:{type:"submit",variant:"outline-light"},on:{click:function(t){return t.preventDefault(),e.onSubmit.apply(null,arguments)}}},[e._v("Tester le modele")]),s("b-button",{staticClass:"col-lg-3 offset-lg-3",attrs:{type:"reset",variant:"outline-secondary"},on:{click:e.onReset}},[e._v("Reset")])],1)],1)],1)},R=[],A=(s("caad"),s("2532"),s("a434"),s("b680"),s("bc3a").default),q={components:{Navbar:x},data:function(){return{dataset:"",testSize:"0.2",modules:[],show:!0,disabledUser:!1,nbInput:10,minPostLike:20,minUserLike:40,classificationAlgo:"",sent:!1,loading:!1,fieldsMetrique:["Métrique","Score"],fieldsMatrix:["/","Prédit fake news","Prédit information fiable"],confusionMatrix:null,metricResults:null}},computed:{title:function(){return this.sent?"Resultat obtenus par votre modèle":"Testez l'effet de la variation des hyperparametres sur nos modèles basés ML"}},methods:{checkDataset:function(){return this.dataset.localeCompare("ISOT")},checkUser:function(){this.dataset.localeCompare("ISOT")?this.disabledUser=!1:(this.modules.includes("user")&&(1===this.modules.length?this.modules.pop():this.modules.splice(1,this.modules.indexOf("user")),console.log(this.modules)),this.disabledUser=!0)},onReset:function(e){var t=this;void 0!==e&&e.preventDefault(),this.sent=!1,this.approach="",this.dataset="",this.modules=[],this.nbInput=10,this.minPostLike=20,this.minUserLike=40,this.disabledUser=!1,this.show=!1,this.$nextTick((function(){t.show=!0}))},onSubmit:function(){var e=this,t={algo:parseInt(this.classificationAlgo),dataset:this.dataset,model:2===this.modules.length?"combination":this.modules.includes("linguistic")?"linguistic_only":"user_only",matrix_nb_row:parseInt(this.nbInput),min_post_like:parseInt(this.minPostLike),min_user_like:parseInt(this.minUserLike),test_size:parseFloat(this.testSize)};this.sent=!0,this.loading=!0,A.post("/api/evaluation",t).then((function(t){var s=t.data;e.confusionMatrix=[{"/":"Fake news","Prédit fake news":s.true_positive,"Prédit information fiable":s.false_negative},{"/":"Information fiable","Prédit fake news":s.false_positive,"Prédit information fiable":s.true_negative}],console.log(s),e.metricResults=[{"Métrique":"Justesse",Score:s.accuracy.toFixed(4)},{"Métrique":"Précision",Score:s.precision.toFixed(4)},{"Métrique":"Rappel",Score:s.recall.toFixed(4)},{"Métrique":"Score-F1",Score:s.f1_score.toFixed(4)}],e.loading=!1}))}}},O=q,T=(s("2597"),Object(n["a"])(O,F,R,!1,null,"03eb622a",null)),P=T.exports,E=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",[s("Navbar"),s("h2",{staticClass:"text-light mt-2 p-2"},[e._v("Examinez les resultats obtenus par nos modèles")]),s("b-card",{staticClass:"mx-auto",attrs:{id:"card-form","title-tag":"h3","bg-variant":"dark","text-variant":"light",title:"Remplissez le formulaire avec la configuration qui vous convient et  jettez un oeil à ses resultats"}},[s("hr"),e.show?s("b-form",{staticClass:"p-1",on:{reset:e.onReset}},[s("b-row",{staticClass:"p-1"},[s("b-form-group",{staticClass:"h5 col text-light",attrs:{label:"Choisissez l'approche qui vous interesse"},scopedSlots:e._u([{key:"default",fn:function(t){var a=t.ariaDescribedby;return[s("b-form-radio-group",[s("b-form-radio",{staticClass:"text-left h6",attrs:{"aria-describedby":a,name:"approach-radio",value:"ML"},on:{change:function(t){return e.switchFNN()}},model:{value:e.approche,callback:function(t){e.approche=t},expression:"approche"}},[e._v("Basée Machine Learning")]),s("b-form-radio",{staticClass:"text-left h6",attrs:{"aria-describedby":a,name:"approach-radio",value:"DL"},on:{change:function(t){return e.switchFNN()}},model:{value:e.approche,callback:function(t){e.approche=t},expression:"approche"}},[e._v("Basée Deep Learning")])],1)]}}],null,!1,2028653844)})],1),s("b-row",{staticClass:"mt-1 p-1"},[s("b-form-group",{staticClass:"h5 col text-light",attrs:{label:"Sur quel dataset voulez vous appliquer ce modele ?"},scopedSlots:e._u([{key:"default",fn:function(t){var a=t.ariaDescribedby;return[s("b-form-radio-group",[s("b-form-radio",{staticClass:"text-left h6",attrs:{"aria-describedby":a,name:"dataset-radio",value:"ISOT"},on:{change:e.checkUser},model:{value:e.dataset,callback:function(t){e.dataset=t},expression:"dataset"}},[e._v("ISOT")]),s("b-form-radio",{staticClass:"text-left h6",attrs:{disabled:e.disabledFNN,"aria-describedby":a,name:"dataset-radio",value:"FNN"},on:{change:e.checkUser},model:{value:e.dataset,callback:function(t){e.dataset=t},expression:"dataset"}},[e._v("FakeNews Dataset")])],1)]}}],null,!1,1173614606)})],1),s("b-row",{staticClass:"mt-1 p-1"},[s("b-form-group",{staticClass:"h5 col text-light",attrs:{label:"Quels sont les modules que vous voulez  utiliser ?"},scopedSlots:e._u([{key:"default",fn:function(t){var a=t.ariaDescribedby;return[s("b-form-checkbox-group",{attrs:{"aria-describedby":a,name:"modules",checked:e.modules,switches:""},model:{value:e.modules,callback:function(t){e.modules=t},expression:"modules"}},[s("b-form-checkbox",{staticClass:"text-left h6",attrs:{value:"linguistic"}},[e._v("Analyse Linguistique")]),s("b-form-checkbox",{staticClass:"text-left h6",attrs:{value:"user",disabled:e.disabledUser}},[e._v("Analyse des Caractéristiques utilisateur")])],1)]}}],null,!1,3439535967)})],1),s("b-button",{staticClass:"col-lg-3",attrs:{type:"submit",variant:"outline-light"},on:{click:function(t){return t.preventDefault(),e.onSubmit()}}},[e._v("Confirmer")]),s("b-button",{staticClass:"col-lg-3 offset-lg-3",attrs:{type:"reset",variant:"outline-secondary"}},[e._v("Reset")])],1):e._e()],1)],1)},U=[],z=(s("99af"),{components:{Navbar:x},data:function(){return{dataset:"",approche:"",modules:[],show:!0,disabledUser:!1,disabledFNN:!1}},methods:{switchFNN:function(){console.log("DONE"),this.approche.localeCompare("DL")?this.disabledFNN=!1:(this.dataset.localeCompare("FNN")||(this.dataset=""),this.disabledFNN=!0)},checkDataset:function(){return this.dataset.localeCompare("ISOT")},checkUser:function(){this.dataset.localeCompare("ISOT")?this.disabledUser=!1:(this.modules.includes("user")&&(1===this.modules.length?this.modules.pop():this.modules.splice(1,this.modules.indexOf("user")),console.log(this.modules)),this.disabledUser=!0)},onReset:function(e){var t=this;e.preventDefault(),this.approche="",this.dataset="",this.modules=[],this.disabledFNN=!1,this.disabledUser=!1,this.show=!1,this.$nextTick((function(){t.show=!0}))},onSubmit:function(e){window.location.href="/#/results/".concat(this.approche,"/").concat(2===this.modules.length?"combination":this.modules[0],"/").concat(this.dataset)}}}),I=z,$=(s("cb68"),Object(n["a"])(I,E,U,!1,null,"4a713b18",null)),j=$.exports,J=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("Navbar"),a("b-container",[a("h1",{staticClass:"text-light"},[e._v("Architecture de l'approche basée Machine Learning")]),a("b-img",{attrs:{"fluid-grow":"",src:s("4adc"),alt:"Architecture du modèle basé ML"}}),a("b-button",{attrs:{variant:"outline-light",href:"/#/approach"}},[e._v("Revenir à la page de description des architectures")])],1)],1)},B=[],V={components:{Navbar:x},data:function(){return{}}},G=V,Q=(s("fb3d"),Object(n["a"])(G,J,B,!1,null,"2dcdbe56",null)),H=Q.exports,K=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("Navbar"),a("b-container",[a("h1",{staticClass:"text-light"},[e._v("Architecture de l'approche basée Deep Learning")]),a("b-img",{attrs:{"fluid-grow":"",src:s("f62e"),alt:"Architecture du modèle basé DL"}}),a("b-button",{attrs:{"background-variant":"outline-light",href:"/#/approach"}},[e._v("Revenir à la page de description des architectures")])],1)],1)},W=[],X={components:{Navbar:x},data:function(){return{}}},Y=X,Z=(s("5a00"),Object(n["a"])(Y,K,W,!1,null,"4007d3aa",null)),ee=Z.exports,te=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",[s("Navbar"),s("b-container",[s("b-table",{staticClass:"text-light mt-5",attrs:{dark:!0,id:"results-table",striped:"",hover:"",items:e.get_results().values,fields:e.fields(e.get_results().fields)}}),s("p",{staticClass:"text-light text-center"},[e._v(e._s(e.get_results().caption))])],1)],1)},se=[],ae={components:{Navbar:x},data:function(){return{DLinguisticISOT:{values:[{"Modèle":"Full linguistic module with average pooling and GloVe word embedding",Justesse:.9984,MAE:.0019,MSE:.00139,"Temps d'entrainement":947.46},{"Modèle":"Full linguistic module with max pooling and GloVe word embedding",Justesse:.9984,MAE:.0018,MSE:.00141,"Temps d'entrainement":1544.46},{"Modèle":"Full linguistic module with average pooling and trainable  word embedding",Justesse:.9963,MAE:.0043,MSE:.0032,"Temps d'entrainement":3607.56},{"Modèle":"GloVe word embedding + DNN",Justesse:.9767,MAE:.0253,MSE:.0193,"Temps d'entrainement":802.62}],fields:"DL",caption:"Résultats obtenus par le module linguistique du modèle basé DL et ses variantes sur les données de test du dataset ISOT"},DLUser:{values:[{"Modèle":"Module user basé DL",Justesse:.4965,MAE:.5,MSE:.25,"Temps d'entrainement":202}],fields:"DL",caption:"Résultats obtenus par le module User du modèle basé DL sur les données de test du dataset FNN"},DLCombination:{values:[{"Modèle":"Modèle au complet basé DL",Justesse:.5001,MAE:.4999,MSE:.2514,"Temps d'entrainement":"/"}],fields:"DL",caption:"Résultats obtenus par le modèle basé DL sur les données de test du dataset FNN"},MLUser:{values:[{"Modèle":"Module User basé ML",Justesse:.709,"Précision":.8076,Rappel:.6562,"Score-F1":.7241}],fields:"ML",caption:"Résultats obtenus par le module d'analyse des caractéristiques utilisateurs basé machine learning utilisant une régression logistique sur le dataset FNN"},MLCombination:{values:[{"Modèle":"Modèle basé ML utilisant un algorithme de regression linéaire",Justesse:.7272,"Précision":.59375,Rappel:.9047,"Score-F1":.7169},{"Modèle":"Modèle basé ML utilisant un algorithme d'arbre de décision",Justesse:.6909,"Précision":.65625,Rappel:.7777,"Score-F1":.7118},{"Modèle":"Modèle basé ML utilisant un algorithme de foret aléatoire d'arbre de décision",Justesse:.709,"Précision":.625,Rappel:.8333,"Score-F1":.7142}],fields:"ML",caption:"Résultats obtenus par le modèle basé machine learning en utilisant plusieurs algorithmes de classification sur le dataset FNN"},MLinguisticISOT:{values:[{"Modèle":"Modèle basé ML utilisant un algorithme de regression linéaire",Justesse:.8834,"Précision":.913,Rappel:.8598,"Score-F1":.8856},{"Modèle":"Modèle basé ML utilisant un algorithme d'arbre de décision",Justesse:.892,"Précision":.8959,Rappel:.8986,"Score-F1":.8972},{"Modèle":"Modèle basé ML utilisant un algorithme de foret aléatoire d'arbre de décision",Justesse:.9242,"Précision":.939,Rappel:.915,"Score-F1":.9268}],fields:"ML",caption:"Résultats obtenus par le module linguistique du modèle basé machine learning sur le dataset ISOT en utilisant plusieurs algorithmes de classification"},MLinguisticFNN:{values:[{"Modèle":"Module linguistique du modèle  basé ML utilisant un algorithme de regression linéaire",Justesse:.6363,"Précision":.6666,Rappel:.5185,"Score-F1":.5833},{"Modèle":"Module linguistique du Modèle basé ML utilisant un algorithme d'arbre de décision",Justesse:.6,"Précision":.6087,Rappel:.5185,"Score-F1":.5599},{"Modèle":"Module linguistique du Modèle basé ML utilisant un algorithme de foret aléatoire d'arbre de décision",Justesse:.6182,"Précision":.6071,Rappel:.6296,"Score-F1":.6182}],fields:"ML",caption:"Résultats obtenus par le module linguistique du modèle basé machine learning sur le dataset FNN en utilisant plusieurs algorithmes de classification"}}},methods:{get_results:function(){if(!this.$route.params.approach.localeCompare("DL")&&!this.$route.params.model.localeCompare("linguistic"))return this.DLinguisticISOT;if(!this.$route.params.approach.localeCompare("DL")&&!this.$route.params.model.localeCompare("user"))return this.DLUser;if(!this.$route.params.approach.localeCompare("DL")&&!this.$route.params.model.localeCompare("combination"))return this.DLCombination;if(!this.$route.params.approach.localeCompare("ML")&&!this.$route.params.model.localeCompare("combination"))return this.MLCombination;if(!this.$route.params.approach.localeCompare("ML")&&!this.$route.params.model.localeCompare("user"))return this.MLUser;if(!this.$route.params.approach.localeCompare("ML")&&!this.$route.params.model.localeCompare("linguistic")){if(!this.$route.params.dataset.localeCompare("FNN"))return this.MLinguisticFNN;if(!this.$route.params.dataset.localeCompare("ISOT"))return this.MLinguisticISOT}},fields:function(e){return e.localeCompare("DL")?[{key:"Modèle",sortable:!1},{key:"Justesse",sortable:!0,sortDirection:"asc"},{key:"Précision",sortable:!0,sortDirection:"asc"},{key:"Rappel",sortable:!0,sortDirection:"asc"},{key:"Score-F1",sortable:!0,sortDirection:"asc"}]:[{key:"Modèle",sortable:!1},{key:"Justesse",sortable:!0,sortDirection:"asc"},{key:"MAE",label:"Mean Absolute Error",sortable:!0,sortDirection:"desc"},{key:"MSE",label:"Mean Squared Error",sortable:!0,sortDirection:"desc"},{key:"Temps d'entrainement",sortable:!0,sortDirection:"desc"}]}}},ie=ae,re=Object(n["a"])(ie,te,se,!1,null,"4a7a27b2",null),oe=re.exports;a["default"].use(d["a"]);var le=new d["a"]({routes:[{path:"/",name:"HomePage",component:C},{path:"/approach",name:"Approach",component:N},{path:"/approach/ML",name:"ML",component:H},{path:"/approach/DL",name:"DL",component:ee},{path:"/tests",name:"Tests",component:P},{path:"/results",name:"Results",component:j},{path:"/results/:approach/:model/:dataset",name:"TabledResults",component:oe}]}),ne=s("5f5b"),ce=s("b1e0");s("f9e3"),s("2dd8");a["default"].use(ne["a"]),a["default"].use(ce["a"]),a["default"].config.productionTip=!0,new a["default"]({el:"#app",router:le,components:{App:u},template:"<App/>"})},"5a00":function(e,t,s){"use strict";s("63d4")},"63d4":function(e,t,s){},"6ecf":function(e,t,s){},"85ec":function(e,t,s){},c1d4:function(e,t,s){e.exports=s.p+"img/pic.2bbf760f.png"},cb68:function(e,t,s){"use strict";s("e413")},ce08:function(e,t,s){},d2ec:function(e,t,s){"use strict";s("6ecf")},e413:function(e,t,s){},f62e:function(e,t,s){e.exports=s.p+"img/DL.9a295c31.jpg"},fb3d:function(e,t,s){"use strict";s("5201")}});
//# sourceMappingURL=app.d30bef8e.js.map