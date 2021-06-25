<template>
	<div id="home">
  		<b-navbar toggleable="lg" type="dark" variant="dark" :sticky="true">
    			<b-navbar-brand href="/#/">FakeNews Buster</b-navbar-brand>
    			<b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
   			<b-collapse id="nav-collapse" is-nav>
      				<b-navbar-nav class="ml-auto">
					<b-nav-item-dropdown right>
						<template #button-content>
        						<b-icon icon="gear-fill" animation="spin"></b-icon> Approche
      						</template>
          					<b-dropdown-item href="/#/approach/">Description des approches</b-dropdown-item>
          					<b-dropdown-item href="/#/approach/ML">Architecture ML</b-dropdown-item>
          					<b-dropdown-item href="/#/approach/DL">Architecture DL</b-dropdown-item>
        				</b-nav-item-dropdown>
       					<b-nav-item  active-class="active"  :href="items[0].path" right><b-icon icon="zoom-in" animation="throb"></b-icon> {{items[0].title}}</b-nav-item>
					<b-nav-item  active-class="active"  :href="items[1].path" right><b-icon icon="bar-chart-fill"></b-icon> {{items[1].title}}</b-nav-item>
      				</b-navbar-nav>
    			</b-collapse>
  		</b-navbar>
        </div>
</template>

<script>
export default {
        data: () => ({
                sidebar: false,
                items: [
                        //{ title: "Approches", path: "/#/approach",name:"Approach"},
                        { title: "Testez vos propres modèles", path: "/#/tests",name:"Tests"},
                        { title: "Résultats", path: "/#/results",name:"Results"},
                        //{ title: "Médias", path: "/#/media"},
                ]
        }),
};
</script>
