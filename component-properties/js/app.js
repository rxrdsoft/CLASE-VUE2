// Vanilla JavaScript
/*
const input=document.querySelector('input');
const h1=document.querySelector('h1');
input.addEventListener('keyup',function(){
	h1.innerHTML=input.value;
});
*/
Vue.component('autor',{
	props:['nombre','edad'],
	mounted(){
		console.log(typeof this.edad);
		console.log(this.nombre);//las props son accesibles desde this(proxy)
	},
	template:`<h1>{{nombre}}</h1>`
})

new Vue({
	el:'#app17',
	data:{
		autor:'Richard Inga Aliaga'
	}
});


