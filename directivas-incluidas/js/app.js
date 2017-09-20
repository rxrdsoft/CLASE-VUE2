// Vanilla JavaScript
/*
const input=document.querySelector('input');
const h1=document.querySelector('h1');
input.addEventListener('keyup',function(){
	h1.innerHTML=input.value;
});
*/
const vm =new Vue({
	el:'#app1',
	data:{
		mensaje:true, /*using v-if directive*/
		edad:true /*using v-show directive*/
	}
});


