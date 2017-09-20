// Vanilla JavaScript
/*
const input=document.querySelector('input');
const h1=document.querySelector('h1');
input.addEventListener('keyup',function(){
	h1.innerHTML=input.value;
});
*/
 const vm1=new Vue({
	el:'#app6',
	data:{
		mensaje:'Instancia Vue 1'
	},
	beforeUpdate(){
		console.log('beforeUpdated',this.mensaje);
	},
	updated(){
		console.log('updated',this.mensaje);
	},
	methods:{
		alReves(){
			this.mensaje=this.mensaje.split('').reverse().join('');
		}
	},
	computed:{
		mensajeMayuscula(){
			return this.mensaje.toUpperCase();
		}
	}
});

 const vm2=new Vue({
 	el:'#app7',
 	data:{
 		mensaje:'Instancia Vue 2'
 	}
 });


