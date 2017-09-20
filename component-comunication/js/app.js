// Vanilla JavaScript
/*
const input=document.querySelector('input');
const h1=document.querySelector('h1');
input.addEventListener('keyup',function(){
	h1.innerHTML=input.value;
});
*/

 const eventBus=new Vue();

Vue.component('listado-productos',{
	props:['productos'],
	template:`
		<section>
			<li v-for="producto in productos">
				{{producto.nombre}} - 
				<small>{{producto.precio.toFixed(2)}} $</small>
				<button @click="eliminarProducto(producto.precio)" class="btn btn-default">-</button>
				<button @click="anadirProducto(producto.precio)" class="btn btn-primary">+</button>
			</li>
		</section>
			`,
	methods:{
		anadirProducto(precio){
			eventBus.$emit('anadir',precio);
		},
		eliminarProducto(precio){
			eventBus.$emit('eliminar',precio);
		}
	}
});

Vue.component('carrito-compra',{
	template:`
		<section>
			<h1>{{total.toFixed(2)}} $</h1>
			<h3>{{ cantidadProductos}} productos</h3>
		</section>
	`,
	data:function(){
		return{
			cantidadProductos:0,
			total:0
		};
	},
	created:function(){
		eventBus.$on('anadir',(precio)=>{
			if (this.total>=0) {
				this.total+=precio;
				this.cantidadProductos++;
			}
		});
		eventBus.$on('eliminar',(precio)=>{
			if (this.total>0) {
				this.total-=precio;
				this.cantidadProductos--;
			}
		});
	}
});

new Vue({
	el:'#app22',
	data:{
		productos:[
			{nombre:'Libro ES6',precio:150},
			{nombre:'Laptop',precio:2400},
			{nombre:'Cafe',precio:10},
			{nombre:'Cama',precio:500},
		]
	}
});