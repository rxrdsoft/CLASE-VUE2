// Vanilla JavaScript
/*
const input=document.querySelector('input');
const h1=document.querySelector('h1');
input.addEventListener('keyup',function(){
	h1.innerHTML=input.value;
});
*/
var APIURL="https://randomuser.me/api/?results=100";
Vue.component('candidato',{
//	props:['nombre','correo','imagen'],
	props:{
		nombre:{
			type:[String,Array],
			required:true,
		},
		correo:{
			type:String,
			default:'rxrdsoft@gmail.com'
		},
		imagen:String,
		location:{
			type:Object,
			default:function(){
				return{
					ciudad:'Lima,Peru'
				};
			}
		}
	},
	template:'#candidato-template'
});

new Vue({
	el:'#app19',
	mounted:function(){
		this.consultarAPI();
	},
	data:{
		candidatos:[]
	},
	methods:{
		consultarAPI(){
			this.$http.get(APIURL).then(function(respuesta){
				this.candidatos=respuesta.body.results;
			});
		}
	}
});