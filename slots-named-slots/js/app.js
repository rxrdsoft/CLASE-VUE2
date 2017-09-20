// Vanilla JavaScript
/*
const input=document.querySelector('input');
const h1=document.querySelector('h1');
input.addEventListener('keyup',function(){
	h1.innerHTML=input.value;
});
*/
//Permite modificar parte del template de forma dinamica
Vue.component('alerta',{
	props:['tipo','posicion'],
	template:`<section class="alerta" :class="[tipo,posicion]">
				<header class="alerta-header">
					<slot name="header">Hola</slot>
				</header>
				<div class="alerta-body">
					<slot>Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet.</slot>
				</div>
				<footer class="alerta-footer">
					<slot name="footer">Este es el footer</slot>
				</footer>
			  </section>`
});


new Vue({
	el:'#app20'
});


