<?php

// Incluye el archivo de conexión a la base de datos
include("connection.php");

// Ejecuta la función connection() para conectarse a la base de datos
$con = connection();

// Recupera el ID del usuario que se va a eliminar desde la URL
$id = $_GET["id"];

// Crea la consulta SQL para eliminar al usuario con ese ID
$sql = "DELETE FROM users WHERE id='$id'";

// Ejecuta la consulta con MySQL
$query = mysqli_query($con, $sql);

// Si la consulta fue exitosa, redirige al usuario a la página principal (index.php)
if($query){
    Header("Location: index.php");
}else{
    // Si hay error, no hace nada (se recomienda agregar manejo de errores aquí)
}

?>
