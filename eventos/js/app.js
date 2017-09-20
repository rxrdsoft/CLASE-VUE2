// Vanilla JavaScript
/*
const input=document.querySelector('input');
const h1=document.querySelector('h1');
input.addEventListener('keyup',function(){
	h1.innerHTML=input.value;
});
*/
const vm=new Vue({
	el:'#app3',
	data:{
		tareaInput:'',
		tareas:[
			'aprender VueJS',
			'aprender Backend',
			'Ser un full stack'
		]
	},
	methods:{
		agregarT:function(){
			//this hace referencia a la instancia Vue
			this.tareas.unshift(this.tareaInput);
			this.tareaInput='';
		}
	}
});
//Vanilla JavaScript
/*function agregarTarea(){
	const input=document.querySelector('input[type=text]');
	vm.tareas.unshift(input.value);
	input.value='';
}*/