// Vanilla JavaScript
/*
const input=document.querySelector('input');
const h1=document.querySelector('h1');
input.addEventListener('keyup',function(){
	h1.innerHTML=input.value;
});
*/

Vue.component('app-ganador',{
	template:'#lista',
	props:['personas'],
	data: function(){
		return{
			nameGanador:'',
			listado:this.personas
			
		};
		
	},
	methods:{
		elegirGanador(){
			let cantidad=this.listado.length;
			console.log(cantidad);
			let indice=Math.floor((Math.random()*cantidad)+1);//retorna numero random entre 1 y cantidad=6
			console.log(indice);
			this.nameGanador=this.listado[indice-1];
		}
	}

});



new Vue({
	el:'#app16',
	data:{
		participantes:[
				"Richard","Jans","Michael","Jorge","Kely","Xiomara"
			]
	}
});


