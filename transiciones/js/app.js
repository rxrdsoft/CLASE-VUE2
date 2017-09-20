// Vanilla JavaScript
/*
const input=document.querySelector('input');
const h1=document.querySelector('h1');
input.addEventListener('keyup',function(){
	h1.innerHTML=input.value;
});
*/
new Vue({
	el:'#app10',
	data:{
		mostrar:true,
		show:true,
		show1:true,
		mensajes:{
			transicion:'Transicion CSS con vue.js',
			animacion:'Animaciones CSS con vue.js',
			animationCustom:'Animaciones Custom CSS con vue.js',
			entreElementos:'Transiciones entre elementos con vue.js'
		}
	}
});
