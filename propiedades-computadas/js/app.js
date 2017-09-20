// Vanilla JavaScript
/*
const input=document.querySelector('input');
const h1=document.querySelector('h1');
input.addEventListener('keyup',function(){
	h1.innerHTML=input.value;
});
*/
new Vue({
	el:'#app4',
	data:{
		mensaje:'Hola mundo !!',
		nuevaTarea:'',
		tareas:[
			{
				titulo:'Aprender Vue JS',
				prioridad:true,
				antiguedad:23
			},
			{
				titulo:'Aprender NodeJS',
				prioridad:false,
				antiguedad:153
			},
			{
				titulo:'Aprender MongoDB',
				prioridad:true,
				antiguedad:378
			},
		]
	},
	methods:{
		agregarTarea:function(){
			this.tareas.unshift({
				titulo:this.nuevaTarea,
				prioridad:false,
				antiguedad:0
			});
			this.nuevaTarea='';
		}
	},
	computed:{
		mensajeAlRevez:function(){
			return this.mensaje.split('').reverse().join('');
		},
		tareasConPrioridad:function(){
			return this.tareas.filter(tare=>tare.prioridad);
		},
		tareasPorAntiguedad:function(){
			return this.tareas.sort((a,b)=>b.antiguedad-a.antiguedad);
		}
	}
});