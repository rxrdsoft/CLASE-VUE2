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
	el:'#app12',
	mounted:function(){
		axios.get(APIUrl)
  .then(function (respuesta) {
    console.log(respuesta);
    this.lista=respuesta.data.results;
  });
	},

	data:{
		lista:[]
	},
	methods:{
	}
});


