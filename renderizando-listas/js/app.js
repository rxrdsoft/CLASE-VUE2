// Vanilla JavaScript
/*
const input=document.querySelector('input');
const h1=document.querySelector('h1');
input.addEventListener('keyup',function(){
	h1.innerHTML=input.value;
});
*/
new Vue({
	el:'#app2',
	data:{
		frutas:['manzana','pera','sandia','platano','durazno','papaya','melon'
		],
		semana:['lunes','martes','miercoles','jueves','viernes'],
		persona:{
			nombre:'Richard',
			apellido:'Inga',
			edad:23,
			ocupacion:'Web Developer'
		},
		arrPersona:[
		{nombre:'jans',apellido:'aliaga',ciudad:'Peru'},
		{nombre:'Luis',apellido:'coco',ciudad:'Chile'},
		{nombre:'Tosshiba',apellido:'nasa',ciudad:'Argentina'},
		]
	}
});


