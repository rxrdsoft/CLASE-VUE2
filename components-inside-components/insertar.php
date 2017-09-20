<?php 

	$nombre=$_POST['nombre'];
	$apellido=$_POST['apellido'];
	$telefono=$_POST['telefono'];
	$direccion=$_POST['direccion'];

	$host="mysql.hostinger.es";
	$usuario="u926885552_root";
	$pass="73365976TEST";
	$bd="u926885552_test";

	$servidor=mysqli_connect($host,$usuario,$pass);

	mysqli_select_db($servidor,$bd);

	if (isset($_POST['enviar'])) {
		$insertar="INSERT INTO personas(nombre,apellido,telefono,direccion) VALUES('$nombre','$apellido','$telefono','$direccion')";
		$sql=mysqli_query($servidor,$insertar);
		echo "Envio de datos correctamente";

	}
	header("location:indice.html");
	mysqli_close($servidor);

 ?>