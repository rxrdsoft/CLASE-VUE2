<?php
	$host="localhost";
	$usuario="root";
	$pass="";
	$bd="prueba";

	$conexion=mysqli_connect($host,$usuario,$pass);
	mysqli_select_db($conexion,$bd);

	$json=file_get_contents('php://input');
	if($json){
		//echo "soy verdadero";
		
	}
	else{
		echo "soy false";
	}
	
	$obj=json_decode($json);

	echo $obj->persona->nombre."</br>";
	echo $obj->persona->apellido."</br>";
	echo $obj->persona->telefono."</br>";
	echo $obj->persona->direccion."</br>";

	
	$nombre=$obj->persona->nombre;
	$apellido=$obj->persona->apellido;
	$telefono=$obj->persona->telefono;
	$direccion=$obj->persona->direccion;

	
	$insertar="INSERT INTO personal(nombre,apellido,telefono,direccion) VALUES('$nombre','$apellido','$telefono','$direccion')";
	
	$sql=mysqli_query($conexion,$insertar);


	var_dump(json_encode($obj->persona));
	
	mysqli_close($conexion);

?>