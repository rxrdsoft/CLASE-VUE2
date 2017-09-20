Vue.component('ver-proyecto',{
	props:['lista'],
	template:`
	<table class="table table-striped">
        <thead>
            <tr>
                <th>Categoria</th>
                <th>Nombre</th>
                <th>Version</th>
                <th>Fecha</th>
                <th>Comentarios</th>
                <th>Responsable</th>
                <th>Descargar</th>
            </tr>
        </thead>
        <tbody>
			<tr v-for="doc in lista">
				<td v-text="doc.cate"></td>
				<td v-text="doc.nombre"></td>
				<td v-text="doc.version"></td>
				<td v-text="doc.fecha"></td>
				<td v-text="doc.come"></td>
				<td v-text="doc.res"></td>
				<td>
					<button class="editarDoc"><i class="fa fa-pencil ediDoc" aria-hidden="true"></i></button>
					<button class="eliminarDoc"><i class="fa fa-trash eliDoc" aria-hidden="true"></i></button>
					<button class="bajarDoc">
						<i class="fa fa-download bajarDoc" aria-hidden="true"></i>
					</button>
				</td>
            </tr>
        </tbody>
    </table>
	`
})


new Vue({
	el:'#listDoc',
	data:{
		documentos:[
		  {cate:'Planos',nombre:'Planos de construccion',version:'1.0',fecha:'10/05/2017',come:'Graficas',res:'Toshiba Acer'},
		  {cate:'Presentacion',nombre:'Presentacion del proyecto',version:'2.0',fecha:'25/07/2017',come:'Cambio de cierra',res:'Junio Cañari'},
		  {cate:'Certificados',nombre:'Certificados PMP',version:'1.0',fecha:'28/07/2017',come:'Ninguno',res:'Kevin Chagua'},
		  {cate:'Presentacion',nombre:'Presentacion del proyecto',version:'2.0',fecha:'25/07/2017',come:'Cambio de cierra',res:'Junio Cañari'},
		  {cate:'Certificados',nombre:'Certificados PMP',version:'1.0',fecha:'28/07/2017',come:'Ninguno',res:'Kevin Chagua'},
		  {cate:'Presentacion',nombre:'Presentacion del proyecto',version:'2.0',fecha:'25/07/2017',come:'Cambio de cierra',res:'Junio Cañari'},
		  {cate:'Certificados',nombre:'Certificados PMP',version:'1.0',fecha:'28/07/2017',come:'Ninguno',res:'Kevin Chagua'},
		  {cate:'Presentacion',nombre:'Presentacion del proyecto',version:'2.0',fecha:'25/07/2017',come:'Cambio de cierra',res:'Junio Cañari'},
		  {cate:'Certificados',nombre:'Certificados PMP',version:'1.0',fecha:'28/07/2017',come:'Ninguno',res:'Kevin Chagua'},
		  {cate:'Planos',nombre:'Planos de construccion',version:'1.0',fecha:'10/05/2017',come:'Graficas',res:'Toshiba Acer'},
		  {cate:'Presentacion',nombre:'Presentacion del proyecto',version:'2.0',fecha:'25/07/2017',come:'Cambio de cierra',res:'Junio Cañari'},
		  {cate:'Planos',nombre:'Planos de construccion',version:'1.0',fecha:'10/05/2017',come:'Graficas',res:'Toshiba Acer'},
		  {cate:'Presentacion',nombre:'Presentacion del proyecto',version:'2.0',fecha:'25/07/2017',come:'Cambio de cierra',res:'Junio Cañari'},
		  {cate:'Planos',nombre:'Planos de construccion',version:'1.0',fecha:'10/05/2017',come:'Graficas',res:'Toshiba Acer'},
		  {cate:'Presentacion',nombre:'Presentacion del proyecto',version:'2.0',fecha:'25/07/2017',come:'Cambio de cierra',res:'Junio Cañari'},
		  

		]
	}
})