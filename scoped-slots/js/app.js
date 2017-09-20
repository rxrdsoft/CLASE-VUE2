// Vanilla JavaScript
/*
const input=document.querySelector('input');
const h1=document.querySelector('h1');
input.addEventListener('keyup',function(){
	h1.innerHTML=input.value;
});
*/

//scoped slots hace el accedo a los datos o al modelo
Vue.component('app-tarea',{
	props:['lista'],
	template:'#tareas-template'
});


new Vue({
	el:'#app21',
	data:{
		tareas:[
			{titulo:'Aprender vue.js'},
			{titulo:'Hacer ejercicio'},
			{titulo:'Aprender Ingles'},
			{titulo:'Aprender PHP'},
			{titulo:'Aprender Backend'},

		]
	}
});

