const APIURL="https://randomuser.me/api/?results=500";

Vue.component('usuarios',{
	template:'#usuarios-template',
	created(){
		this.consultarAPI();
	},
	data(){
		return{
			busqueda:'',
			usuarios:[]
		}
	},
	methods:{
		consultarAPI(){
			this.$http.get(APIURL).then(respuesta=>{
				const listado=respuesta.body.results.map(user=>{
					return{
						nombre:`${user.name.title} ${user.name.first} ${user.name.last}`,
						correo:user.email,
						foto:user.picture.thumbnail
					};
				});
				this.usuarios=listado;	
			});
		}
	},
	computed:{
		buscar(){
			return this.usuarios.filter(usuario=>{
				return usuario.nombre.indexOf(this.busqueda)>-1;
			});
		}
	}
});

Vue.component('usuario',{
	props:['datos'],
	template:'#usuario-template'
})


new Vue({
	el:'#app27'
});