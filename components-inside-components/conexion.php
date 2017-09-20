<?php 

define("HOSTNAME", "mysql.hostinger.es");// Nombre del host
define("DATABASE", "u451824197_sse"); // Nombre de la base de datos
define("USERNAME", "u451824197_admin"); // Nombre del usuario
define("PASSWORD", "123456"); // Nombre de la constrase�a

	
		$conexion=mysqli_connect("HOSTNAME","USERNAME","PASSWORD") or die('Error conectando a la BBDD');

		echo "Conactado correctamente </br>";
		mysqli_select_db($conexion,"DATABASE") or die('Base de datos no encontrada');

		mysqli_close($conexion);

		/*$consulta='SELECT * FROM actividad_economica';
		$sql=mysqli_query($conexion,$consulta);
		if($sql){
			echo "La conexion fue satisfactoria";
		}
		else{
			echo "La conexion no tuvo exito";
		}*/

 ?>