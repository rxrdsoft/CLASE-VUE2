const eventBus=new Vue();
Vue.component('registrar',{
	template:`
		<div class="col-xs-12 col-sm-12 col-md-12">
      <div class="page-title">
        <div class="title_left">
          <h3>Proyectos</h3>
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
                <button class="btn btn-primary" data-target="#registraProyecto" data-toggle="modal">
                  <i class="fa fa-plus" aria-hidden="true"></i>
                  Añadir proyecto
                </button>
                <div class="modal fade" id="registraProyecto">
                  <div class="modal-dialog">
                    <div class="modal-content">
                      <div class="modal-header">
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                          <h4 class="modal-title">Nuevo Proyecto</h4>
                      </div>
                      <div class="modal-body">
                        <form action="" class="form-horizontal" @submit.prevent="anadir(codigo,name)">
                          <div class="form-group">
                            <label for="codigo" class="col-sm-2 col-xs-2 control-label">Codigo:</label>
                            <div class="col-sm-10 col-xs-12">
                              <input type="text" class="form-control" placeholder="Codigo" v-model="codigo">
                            </div>
                          </div>

                          <div class="form-group">
                            <label for="nombre" class="col-sm-2 col-xs-2 control-label">Nombre:</label>
                            <div class="col-sm-10 col-xs-12">
                              <input type="text" class="form-control" placeholder="Nombre Proyecto" v-model="name">
                            </div>
                          </div>

                          <div class="form-group">
                            <label for="responsable" class="col-sm-2 col-xs-2 control-label">Responsable:</label>
                            <div class="col-sm-10 col-xs-12">
                              <input type="search" class="form-control" placeholder="Buscar responsable">
                            </div>
                          </div>

                          <div class="form-group">
                            <label for="fechaIni" class="col-sm-2 col-xs-2 control-label">Fecha Inicio:</label>
                            <div class="col-sm-10 col-xs-12">
                              <input type="date" class="form-control" data-toggle="datepicker">
                            </div>
                          </div>

                          <div class="form-group">
                            <label for="fechaFin" class="col-sm-2 col-xs-2 control-label">Fecha Fin:</label>
                            <div class="col-sm-10 col-xs-12">
                              <input type="date" class="form-control">
                            </div>
                          </div>

                          <div class="form-group">
                            <label for="descrip" class="col-sm-2 col-xs-2 control-label">Descripcion:</label>
                            <div class="col-sm-10 col-xs-12">
                              <textarea name="" id="" cols="20" rows="6" class="form-control"></textarea>
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
			name:''
		}
	},
	methods:{
		anadir(codigo,name){
			eventBus.$emit('agregar',[codigo,name]);
			this.codigo="",
			this.name=""
		}
	}
});


Vue.component('proyecto',{
	props:['proyectos'],
	template:`
		<div class="table-responsive">
			<table class="table table-striped projects">
			<thead>
        <tr>
          <th style="width: 5%">Codigo</th>
          <th style="width: 30%">Nombre del Proyecto</th>
          <th style="width: 30%" class="hidden-xs">Pregreso</th>
          <th style="width: 10%">Status</th>
          <th style="width: 25%">Herramientas</th>
        </tr>
      </thead>
      <tbody>
				<tr v-for="(list,index) in proyectos">
					<td v-text="list.codigo"></td>
					<td>
						<a v-text="list.name.name1"></a><br />
						<small v-text="list.name.date"></small>
					</td>
					<td class="project_progress hidden-xs">
						<div class="progress progress_sm">
	            <div class="progress-bar bg-green" role="progressbar" data-transitiongoal="57">
	            </div>
	          </div>
	          <small>57% Complete</small>
					</td>
					<td>
						<button class="btn btn-success">
							Success
						</button>
					</td>
					<td>
						<a href="verproyecto.html" class="btn btn-primary btn-xs"><i class="fa fa-folder"></i> Ver </a>
	          <a href="#" class="btn btn-info btn-xs"><i class="fa fa-pencil"></i> Editar </a>
	          <a href="#" class="btn btn-danger btn-xs" @click="eliminar(list.name.name1,index)"><i class="fa fa-trash-o"></i> Eliminar </a>
					</td>
				</tr>
			</tbody>
		</table>
		</div>
		`,

		data(){
			return {
				codigo1:'',
				name1:'',
				
			}
		},
		methods:{
/*			anadir(){
				this.proyectos.unshift({
					codigo:this.codigo1,
					name:{
						name1:this.name1,
						date:'Created 01.01.2015'
					}
				})
			},*/
			eliminar(tarea,index){
				if (confirm('Seguro de eliminar '+index+" "+tarea)) {
					console.log(index);
					this.proyectos.splice(index,1)
				}
				
			}
		},
		created(){
			eventBus.$on('agregar',(datos)=>{
				this.codigo1=datos[0],
				this.name1=datos[1],
				this.proyectos.unshift({
					codigo:datos[0],
					name:{
						name1:datos[1],
						date:'Created 01.01.2015'
					}
				})
			})
		}
		
})


new Vue({
	el:'#lislist',
	data:{
		proyectos:[
			{codigo:'P001',name:{name1:'Pesamakini Backend UI',date:'Created 01.01.2015'}},
			{codigo:'P002',name:{name1:'Pemani end UI',date:'Created 01.01.2015'}},
			{codigo:'P003',name:{name1:'Pesamakini Backend UI',date:'Created 01.01.2015'}},
			{codigo:'P004',name:{name1:'makini Backend UI',date:'Created 01.01.2015'}},
			{codigo:'P005',name:{name1:'Pesam Backend',date:'Created 01.01.2015'}},
			{codigo:'P006',name:{name1:'Pesamakini Backend UI',date:'Created 01.01.2015'}},
			{codigo:'P007',name:{name1:'Pni Back UI',date:'Created 01.01.2015'}},
			{codigo:'P008',name:{name1:'Pesam ackend',date:'Created 01.01.2015'}},
			{codigo:'P009',name:{name1:'Peskend UI',date:'Created 01.01.2015'}},
			{codigo:'P0010',name:{name1:'esamakini Backend UI',date:'Created 01.01.2015'}},
			{codigo:'P0011',name:{name1:'Pesaend UI',date:'Created 01.01.2015'}},
			{codigo:'P0012',name:{name1:'kini Backend UI',date:'Created 01.01.2015'}},
			{codigo:'P0013',name:{name1:'Pkini end UI',date:'Created 01.01.2015'}},
		]
	}
	
});