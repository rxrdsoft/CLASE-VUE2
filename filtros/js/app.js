// Vanilla JavaScript
/*
const input=document.querySelector('input');
const h1=document.querySelector('h1');
input.addEventListener('keyup',function(){
	h1.innerHTML=input.value;
});
*/
Vue.filter('textoReves',(texto)=>texto.split('').reverse().join(''));

new Vue({
	el:'#app5',
	data:{
		busqueda:'',
		minimo:5,
		juegos:[
			{
				titulo:'Aprender Vue JS',
				genero:'FPS',
				puntuacion:9
			},
			{
				titulo:'Civilition',
				genero:'Estrategia',
				puntuacion:10
			},
			{
				titulo:'Resident Evil',
				genero:'Survival',
				puntuacion:7
			},
		]
	},
	methods:{
		
	},
	computed:{
		mejoresJuegos:function(){
			return this.juegos.filter(juego=>juego.puntuacion>=this.minimo);
		},
		busquedaJuego:function(){
			return this.juegos.filter(juego=>juego.titulo.includes(this.busqueda));
		}
	}
});