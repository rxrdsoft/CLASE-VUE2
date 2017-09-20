const eventBus=new Vue();
Vue.component('registrar',{
	template:`
		<div class="col-xs-12 col-sm-12 col-md-12">
      <div class="page-title">
        <div class="title_left">
          <h3>Personal</h3>
        </div>

        <div class="title_right">
          <div class="row">
            <div class="col-md-12 col-sm-12 col-xs-12 form-group pull-right top_search">
				<div class="form-group col-md-6 col-sm-6 col-xs-12">
                     <div class="input-group">
                        <input type="text" class="form-control" placeholder="Buscar">
                        <span class="input-group-btn">
                          <button class="btn btn-default">
                            <i class="fa fa-search" aria-hidden="true"></i>
                          </button>
                        </span>
                      </div> 
                </div>
              <div class="form-group col-md-6 col-sm-6 col-xs-12">
                <button class="btn btn-primary" data-target="#registraPersonal" data-toggle="modal">
                  <i class="fa fa-plus" aria-hidden="true"></i>
                  Añadir Personal
                </button>
                <div class="modal fade" id="registraPersonal">
                  <div class="modal-dialog">
                    <div class="modal-content">
                      <div class="modal-header">
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                          <h4 class="modal-title">Nuevo Personal</h4>
                      </div>
                      <div class="modal-body">
                        <form action="" class="form-horizontal" @submit.prevent="anadir(codigo,name,apelli,dni,edad,email,address,ocupacion)">
                          <div class="form-group">
                            <label for="codigo" class="col-sm-2 col-xs-2 control-label">Codigo:</label>
                            <div class="col-sm-10 col-xs-12">
                              <input type="text" class="form-control" placeholder="Codigo" id="codigo" v-model="codigo">
                            </div>
                          </div>

                          <div class="form-group">
                            <label for="nombre" class="col-sm-2 col-xs-2 control-label">Nombre:</label>
                            <div class="col-sm-10 col-xs-12">
                              <input type="text" class="form-control" placeholder="Nombre" id="nombre" v-model="name" required>
                            </div>
                          </div>

                          <div class="form-group">
                            <label for="apellido" class="col-sm-2 col-xs-2 control-label">Apellido:</label>
                            <div class="col-sm-10 col-xs-12">
                              <input type="text" class="form-control" placeholder="Apellido" id="apellido" v-model="apelli" required>
                            </div>
                          </div>

                          <div class="form-group">
                            <label for="dni" class="col-sm-2 col-xs-2 control-label">DNI:</label>
                            <div class="col-sm-10 col-xs-12">
                              <input type="number" class="form-control" placeholder="DNI" id="dni" v-model="dni" required>
                            </div>
                          </div>

                          <div class="form-group">
                            <label for="edad" class="col-sm-2 col-xs-2 control-label">Edad:</label>
                            <div class="col-sm-10 col-xs-12">
                              <input type="number" class="form-control" placeholder="Edad" v-model="edad" required>
                            </div>
                          </div>

                          <div class="form-group">
                            <label for="correo" class="col-sm-2 col-xs-2 control-label">Correo:</label>
                            <div class="col-sm-10 col-xs-12">
                              <input type="email" class="form-control" placeholder="Correo" v-model="email" required>
                            </div>
                          </div>
						  
						  <div class="form-group">
                            <label for="correo" class="col-sm-2 col-xs-2 control-label">Direccion:</label>
                            <div class="col-sm-10 col-xs-12">
                              <input type="text" class="form-control" placeholder="Correo" v-model="address" required>
                            </div>
                          </div>
						  
						  <div class="form-group">
                            <label for="ocupa" class="col-sm-2 col-xs-2 control-label">Ocupacion:</label>
                            <div class="col-sm-10 col-xs-12">
                              <input type="text" class="form-control" placeholder="Ocupacion" id="ocupa" v-model="ocupacion" required>
                            </div>
                          </div>
						  
						  
                          <div class="modal-footer">
                            <button type="submit" class="btn btn-primary" style="margin-bottom: 5px">Aceptar</button>
                            <button type="button" class="btn btn-danger" data-dismiss="modal">Cancelar</button>
                          </div>
                        </form>  
                      </div>
                    </div>      
                  </div>
                </div>
              </div>
            </div>
          </div>    
        </div>
      </div>
    </div>

	`,
	data(){
		return{
			
			codigo:'',
			name:'',
			apelli:'',
			dni:'',
			edad:'',
			email:'',
			address:'',
			ocupacion:''
		}
	},
	methods:{
		anadir(codigo,name,apelli,dni,edad,email,address,ocupacion){
			eventBus.$emit('agregar',[codigo,name,apelli,dni,edad,email,address,ocupacion]);
			this.codigo="",
			this.name="",
			this.apelli="",
			this.dni="",
			this.edad="",
			this.email="",
			this.address="",
			this.ocupacion=""
		}
	}
});


Vue.component('personas',{
	props:['lista'],
	template:`
	<div class="table-responsive">
		<table class="table table-striped projects" id="tablePersonal">
            <thead>
              <tr>
                <th>Codigo</th>
                <th>Nombre</th>
                <th>Apellido</th>
                <th>DNI</th>
                <th>Edad</th>
                <th>Correo</th>
                <th>Direccion</th>
                <th>Ocupacion</th>
                <th>Opciones</th>
                            
               </tr>
            </thead>
            <tbody>
				<tr v-for="(list,index) in lista">
				 <td v-text="list.codigo"></td>
				 <td v-text="list.nombre"></td>
				 <td v-text="list.apellido"></td>
				 <td v-text="list.dni"></td>
				 <td v-text="list.edad"></td>
				 <td v-text="list.correo"></td>
				 <td v-text="list.direccion"></td>
				 <td v-text="list.ocupacion"></td>
				 <td>
					<a href="#" class="btn btn-primary btn-xs herra"><i class="fa fa-folder"></i> Ver </a>
                    <a href="#" class="btn btn-info btn-xs herra"><i class="fa fa-pencil"></i> Editar </a>
                    <a href="#" class="btn btn-danger btn-xs herra" @click="eliminar(list.nombre,index)"><i class="fa fa-trash-o"></i> Eliminar </a>
				 </td>
				</tr>
            </tbody>
		</table>
	</div>
	`,
	data(){
		return{
			codigo:"",
			nombre:"",
			apellido:"",
			dni:"",
			edad:"",
			correo:"",
			direccion:"",
			ocupacion:""
		}
	},
	methods:{
		eliminar(tarea,index){
				if (confirm('Seguro de eliminar '+index+" "+tarea)) {
					console.log(index);
					this.lista.splice(index,1)
				}
				
			}
	},
	created(){
		eventBus.$on('agregar',(datos)=>{
			this.codigo=datos[0],
			this.nombre=datos[1],
			this.apellido=datos[2],
			this.dni=datos[3],
			this.edad=datos[4],
			this.correo=datos[5],
			this.direccion=datos[6],
			this.ocupacion=datos[7]
			this.lista.unshift({
				codigo:datos[0],
				nombre:datos[1],
				apellido:datos[2],
				dni:datos[3],
				edad:datos[4],
				correo:datos[5],
				direccion:datos[6],
				ocupacion:datos[7]
			})
		})
	}
})

new Vue({
	el:'#listPersonal',
	
	data:{
		personal:[
			{
				codigo:'1',nombre:'Junior',apellido:'Cañari',dni:'54875695',edad:'21',correo:'junior@gmail.com',direccion:'AV Villasol',ocupacion:'Gerente de proyectos'
			},
			{
				codigo:'2',nombre:'Kevin',apellido:'Cañari',dni:'54875695',edad:'21',correo:'junior@gmail.com',direccion:'AV Villasol',ocupacion:'Gerente de proyectos'
			},{
				codigo:'3',nombre:'Jair',apellido:'Cañari',dni:'54875695',edad:'21',correo:'junior@gmail.com',direccion:'AV Villasol',ocupacion:'Gerente de proyectos'
			},{
				codigo:'4',nombre:'Jans',apellido:'Cañari',dni:'54875695',edad:'21',correo:'junior@gmail.com',direccion:'AV Villasol',ocupacion:'Gerente de proyectos'
			},{
				codigo:'5',nombre:'Jairo',apellido:'Cañari',dni:'54875695',edad:'21',correo:'junior@gmail.com',direccion:'AV Villasol',ocupacion:'Gerente de proyectos'
			},{
				codigo:'6',nombre:'Edinson',apellido:'Cañari',dni:'54875695',edad:'21',correo:'junior@gmail.com',direccion:'AV Villasol',ocupacion:'Gerente de proyectos'
			},
			{
				codigo:'7',nombre:'Kimberly',apellido:'Cañari',dni:'54875695',edad:'21',correo:'junior@gmail.com',direccion:'AV Villasol',ocupacion:'Gerente de proyectos'
			},{
				codigo:'15',nombre:'Panzita',apellido:'Cañari',dni:'54875695',edad:'21',correo:'junior@gmail.com',direccion:'AV Villasol',ocupacion:'Gerente de proyectos'
			},{
				codigo:'8',nombre:'Pipo',apellido:'Cañari',dni:'54875695',edad:'21',correo:'junior@gmail.com',direccion:'AV Villasol',ocupacion:'Gerente de proyectos'
			},
			{
				codigo:'9',nombre:'Robert',apellido:'Cañari',dni:'54875695',edad:'21',correo:'junior@gmail.com',direccion:'AV Villasol',ocupacion:'Gerente de proyectos'
			},
			{
				codigo:'10',nombre:'Junior',apellido:'Cañari',dni:'54875695',edad:'21',correo:'junior@gmail.com',direccion:'AV Villasol',ocupacion:'Gerente de proyectos'
			},
			{
				codigo:'11',nombre:'Junior',apellido:'Cañari',dni:'54875695',edad:'21',correo:'junior@gmail.com',direccion:'AV Villasol',ocupacion:'Gerente de proyectos'
			},
		]
	},
	methods:{
		
	/*	cargarPersonal(){
			axios.get('https://randomuser.me/api/?results=100')
			.then(respuesta=>{
				const listado=respuesta.data.results.map(user=>{
					return {
						codigo:Math.floor(Math.random()*100),
						nombre:user.name.first,
						apellido:user.name.last,
						dni:user.id.value,

					}	
				})
				this.personal=listado;
				console.log(listado);
			})
		}*/
	}
})