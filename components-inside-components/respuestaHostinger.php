<?php 

// GENERAR RESPUESTA JSON PHP Y MySQL
	
//GENERAR CONEXION A LAS BD MYSQL
	$host="mysql.hostinger.es";
	$usuario="u926885552_root";
	$pass="73365976TEST";
	$bd="u926885552_test";



	$servidor=mysqli_connect($host,$usuario,$pass);
// ELIJE EL FORMATO DE DATOS PARA LLA CONEXION UTF8
	//mysql_set_charset('utf8',$servidor);

	mysqli_select_db($servidor,$bd);
	
	//se prepara la peticion
	//ESTABLECER LA CONSULTA A LA BD

	$consulta="SELECT * FROM personas";
	$sql=mysqli_query($servidor,$consulta);

	if (!$sql) {
		echo "La conexion no se logro".mysql_error();
		die;
	}

	$datos=array();

	while ($obj=mysqli_fetch_object($sql)) {
		$datos[]=array(
						'id'=>$obj->id,
						'nombre'=>$obj->nombre,
						'apellido'=>$obj->apellido,
						'telefono'=>$obj->telefono,
						'direccion'=>$obj->direccion,


			);
	}
	echo " ".json_encode($datos) ." ";
	mysqli_close($servidor);

// SE DECLARA QUE ESTA ES UN APLICACION QUE GENERA UN JSON
	header('Content-type:application/json');
//SE ABRE EL ACCESO A LAS CONEXIONES QUE REQUIERAN DE ESTA APLICACION
	header('Access-Control-Allow-Origin:*');
 ?>