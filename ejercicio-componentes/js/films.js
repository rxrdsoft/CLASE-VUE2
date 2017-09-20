new Vue({
	el:'#films',
	
	data:{
		busqueda:'',
		peliculas:{}
	},
	methods:{
		consultarApi(){
			this.$http.get('http://www.omdbapi.com/?t='+this.busqueda)
			.then(respuesta =>
			this.peliculas=respuesta.body)
		}
	}
});