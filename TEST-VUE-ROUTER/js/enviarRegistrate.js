new Vue({
	el:'#rigistrateVue',
	created(){
		this.cargaListaTipo();
	},
	data:{
		empresa:{
			elegido:"",
			nombreEmpresa:"",
			numberRuc:"",
			correoEmpresa:"",
			usuarioEmpresa:"",
			contraEmpresa:"",
			addressEmpresa:""
		},
		tipos:[]
	},
	methods:{
		cargaListaTipo(){
			axios.get('http://proyectos2017.esy.es/Proyecto_Licitacion/php/src/tipo_empresa.php')
				 .then(respuesta=>{
				 	this.tipos=respuesta.data
				 	console.log(this.tipos)
				 })
		},
		registrate(){
			axios.post('api/registrarEmpresa.php',{empresa:this.empresa})
			.then(respuesta => {
				this.elegido='',
				this.nombreEmpresa='',
				this.numberRuc='',
				this.correoEmpresa='',
				this.usuarioEmpresa='',
				this.contraEmpresa='',
				this.addressEmpresa='',
				console.log(respuesta)
			})
			.catch(error=>console.log(error));
		}
	}
})
