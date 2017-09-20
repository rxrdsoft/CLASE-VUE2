const User ={ template:`
	<div>
		<h1>Usuario: {{$route.params.id}}</h1>
		<router-view></router-view>
	</div>

`}

const Home ={ template:`
		<section>
			<h1>Home</h1>
			<div class="jumbotron">
				<h2>Hola soy el Home</h2>
				<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Hic quod odit, voluptatibus sunt? Inventore cupiditate error temporibus architecto ipsum suscipit id voluptatibus animi laboriosam, atque magnam quasi ab ut, beatae.</p>
				<button class="btn btn-primary">Leer mas</button>
			</div>
		</section>
	`};
const Profile ={ template:`
		<section>
			<h1>Perfil</h1>
			<div class="jumbotron">
				<form action="">
					<div class="form-group">
						<label for="">Usuario</label>
						<input type="text" class="form-control" value="@rxrdsoft" />
					</div>
					<div class="form-group">
						<label for="">Correo</label>
						<input type="email" class="form-control" value="rxrdsoft@gmail.com" />
					</div>
					<div class="form-group">
						<label for="">Direccion</label>
						<input type="text" class="form-control" value="Jr Bacilo Ramirez" />
					</div>

					<button class="btn btn-primary">Aceptar</button>
					<button class="btn btn-danger">Cancelar</button>
				</form>
			</div>
		</section>
	`};
const Post ={ template:`
		<section>
			<h1>Post</h1>
			<div class="panel panel-primary">
				<div class="panel-heading">
					<h3>Estoy Contento de aprender</h3>
				</div>
			</div>
			<div class="panel panel-success">
				<div class="panel-heading">
					<h3>Le fascina aprender </h3>
				</div>
			</div>
			<div class="panel panel-info">
				<div class="panel-heading">
					<h3>Autodidacta es lo mejor</h3>
				</div>	
			</div>
			<div class="panel panel-warning">
				<div class="panel-heading">
					<h3>Help me! I have much mistakes</h3>
				</div>
			</div>
			<div class="panel panel-danger">
				<div class="panel-heading">
					<h3>Dangerous code!!!</h3>
				</div>
			</div>

		</section>
	`};
	const Ini ={ template:`
		<section>
			<h3>WElcome!!!</h3>

		</section>
	`};

const routes=[
	{path:'/',component:Ini},
	{path:'/user/:id',component:User,children:[

		{path:'',component:Home},
		{path:'profile',component:Profile},
		{path:'post',component:Post}
	]}
]

const router = new VueRouter({
	routes
})

new Vue({
	el:'#app',
	router
})