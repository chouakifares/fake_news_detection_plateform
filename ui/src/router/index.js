import Vue from 'vue';
import Router from 'vue-router';
import HomePage from '@/components/HomePage';
import Approch from '@/components/Approach';
import Tests from '@/components/Tests';
import Results from '@/components/Results';
import ML from "@/components/MLApproach";
import DL from "@/components/DLApproach";
import TabledResults from "@/components/ResultsTabled";
Vue.use(Router)

export default new Router({
  routes: [
    	{
      		path: '/',
      		name: 'HomePage',
      		component: HomePage
    	},
	{
     		path: '/approach',
		name: 'Approach',
      		component: Approch
    	},
	{
		path:"/approach/ML",
		name:"ML",
		component:ML
	},
	{
                path:"/approach/DL",
                name:"DL",
                component:DL
        },
	{
      		path: '/tests',
      		name: 'Tests',
     	 	component: Tests
    	},
	{
                path: '/results',
                name: 'Results',
                component: Results
        },
	{
		path: '/results/:approach/:model/:dataset',
		name: 'TabledResults',
		component: TabledResults
	}
  ]
})
