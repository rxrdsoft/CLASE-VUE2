Vue.component('contrasena',{
	props:['contrasena'],
	template:`
	<div>
		<h1>{{contrasena}}</h1>
		<input ref="pass" 
			   :value="contrasena" 
			   @input="comprobarPass($event.target.value)" 
		/>
	</div>
	`,

	methods:{
		comprobarPass(password){
			//console.log(password);
			//this.$emit('input',password);
			if(this.noValido.includes(password)){
				this.$refs.pass.value='';
			}
			this.$emit('input',password);
		}
	},
	data(){
		return{
			noValido:["root","123456","abc","admin"]
		};
	}


});

 new Vue({
 	el:'#app26',
 	data:{
 		contrasena:'234rfggtd_'
 	}
 });