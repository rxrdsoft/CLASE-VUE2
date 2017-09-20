 Vue.component('lista-tareas',{
 	props:['tareas'],
 	template:`
			<div>
				<h1><slot></slot></h1>
				<ul>
					<tarea v-for="tarea in tareas" :tarea="tarea"></tarea>
				</ul>
			</div>
 			`
 });
 Vue.component('tarea',{
 	props:['tarea'],
 	template:` <li>{{tarea}}</li>`	
 });
 new Vue({
 	el:'#app23',

 	data:{
 		tareas:[
 		"Finalizar seccion componentes",
 		"Iniciar workflow con Vue CLI y webpack",
 		"Terminar de estudiar la documentacion de Vuex",
 		"Seguir jugando con Vue router"
 		]
 	}
 });