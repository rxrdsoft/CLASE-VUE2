// Vanilla JavaScript
/*
const input=document.querySelector('input');
const h1=document.querySelector('h1');
input.addEventListener('keyup',function(){
	h1.innerHTML=input.value;
});
*/
var APIUrl='https://randomuser.me/api/?results=500';
new Vue({
	el:'#app11',
	mounted:function(){
		this.consultarAPI();
	},
	data:{
		personas:[]
	},
	methods:{
		consultarAPI:function(){
			this.$http.get(APIUrl).then(function(respuesta){
			this.personas=respuesta.body.results;
			console.log(respuesta);
		});
		}
	}
});


