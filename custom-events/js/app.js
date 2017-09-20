// Vanilla JavaScript
/*
const input=document.querySelector('input');
const h1=document.querySelector('h1');
input.addEventListener('keyup',function(){
	h1.innerHTML=input.value;
});
*/
//MOdificar la data desde el componente hace la intancia hijo a padre
// Utilizando $emit()
Vue.component('alerta',{
	props:['tipo','posicion'],
	template:`<section class="alerta" :class="[tipo,posicion]">
				<header class="alerta-header">
					<a href="#" @click="ocularWidget">Cerrar</a>
					<slot name="header">Hola</slot>
				</header>
				<div class="alerta-body">
					<slot>Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet.</slot>
				</div>
				<footer class="alerta-footer">
					<slot name="footer">Este es el footer</slot>
				</footer>
			  </section>`,
	methods:{
		ocularWidget(){
			this.$emit('ocultar');
		}
	}
});


new Vue({
	el:'#app20',
	data:{
		mostrarExito:false,
		mostrarError:false,
		mostrarAdvertencia:false
	}
});


