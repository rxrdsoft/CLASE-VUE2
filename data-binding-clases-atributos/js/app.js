// Vanilla JavaScript
/*
const input=document.querySelector('input');
const h1=document.querySelector('h1');
input.addEventListener('keyup',function(){
	h1.innerHTML=input.value;
});
*/
 new Vue({
 	el:'#app8',
 	data:{
 		contador:0,
 		tareas:[
 			{name:'Hacer la compra',completado:false},
 			{name:'Aprender Vue JS',completado:false},
 			{name:'Aprender Firebase',completado:false},
 			{name:'Dominar ES6',completado:false},
 			{name:'Salir a correr',completado:false},
 		]
 	},
 	methods:{
 		estadoTarea(tarea){
 			console.log(tarea);
 			tarea.completado=!tarea.completado;
 		},
 		/*contadorTarea(tarea){
 			if(tarea.completado){
 				this.contador+=1;
 			}
 			else{
 				this.contador-=1;
 			}
 		}*/
 	},
 	computed:{
 		tareasCompletadas(){
 			return this.tareas.filter(complete=>complete.completado);
 		}
 	}
 });


