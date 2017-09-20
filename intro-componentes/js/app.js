// Vanilla JavaScript
/*
const input=document.querySelector('input');
const h1=document.querySelector('h1');
input.addEventListener('keyup',function(){
	h1.innerHTML=input.value;
});
*/
var APIUrl='http://jsonplaceholder.typicode.com/todos';

Vue.component('mis-tareas',{
	template:'#miTarea',
	props:['tare']
});



new Vue({
	el:'#app15',
	mounted:function(){
		this.consultarAPI();
	},
	data:{
		tareas:[],
		tareasLocales:[
		{id:1,title:'Aprender vue.js',completed:false},
		{id:2,title:'Aprender PHP',completed:false},
		{id:3,title:'Aprender NodeJS',completed:false},
		{id:4,title:'Aprender FireBase',completed:false},
		]
	},
	methods:{
		consultarAPI:function(){
			this.$http.get(APIUrl).then(function(respuesta){
			this.tareas=respuesta.body;
			console.log(respuesta);
		});
		}
	}
});


