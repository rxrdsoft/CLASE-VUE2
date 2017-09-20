const user ={
	template:`<div>{{$route.params.id}}</div>`
}

const routes=[
	{path:'/user/:id',component:user}
]

const router = new VueRouter({
	routes
})

new Vue({
	el:'#app',
	router
})