new Vue({
	el:'#myApp',
	data:{
		persona:{
			nombre:"",
			apellido:"",
			telefono:"",
			direccion:""
		}
	},

	methods:{
		enviar(){
			
			/*this.$http.post('insertar2.php',{persona:this.persona})
			.then(respuesta=>console.log(respuesta));*/
			axios.post('insertar2.php',{persona:this.persona})
			.then(respuesta=>{
				this.persona.nombre="",
				this.persona.apellido="",
				this.persona.telefono="",
				this.persona.direccion=""
				console.log(respuesta)})
			.catch(error=>console.log(error));
		}
	},
	/*created(){
		axios.get('https://randomuser.me/api/?results=100')
		.then(respuesta=>console.log(respuesta))
		.catch(error=>console.log(error));
	}*/
});