 Vue.component('lista-tareas',{
 	template:`
			<div>
				<h1><slot></slot></h1>
				<ul>
					<tarea v-for="tarea in tareas" :tarea="tarea"></tarea>
				</ul>
			</div>
 			`,
 	data(){
 		return{
 			tareas:[
 				"Finalizar seccion componentes",
 				"Iniciar workflow con Vue CLI y webpack",
 				"Terminar de estudiar la documentacion de Vuex",
 				"Seguir jugando con Vue router"
 			]
 		};
 	}
 });

 Vue.component('tarea',{
 	props:['tarea'],
 	template:`<li>{{tarea}}</li>`
 });
 Vue.component('contacto',{
 	template:`<div><a href="mailto:rxrdsoft@gmail.com">rxrdsoft@gmail.com</a><hr /></div>`
 });
 Vue.component('bio',{
 	template:`<div><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Id quasi numquam reprehenderit tempore omnis delectus saepe quisquam, necessitatibus laudantium? Atque, voluptatum, quia voluptatem eos quibusdam nesciunt sed totam quam dicta.</p></div>`
 });
 new Vue({
 	el:'#app25',
 	data:{
		seleccionado:'lista-tareas'
 	}
 });