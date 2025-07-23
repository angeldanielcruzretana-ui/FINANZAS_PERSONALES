<?php

// Incluye el archivo que contiene la función para conectarse a la base de datos
include("connection.php");
// Establece la conexión a la base de datos
$con = connection();

// Asigna valores a las variables desde los datos enviados por el formulario
$id = null;                     // ID nulo, se asume que la base de datos lo genera automáticamente (autoincremental)
$name = $_POST['name'];         // Nombre del usuario
$lastname = $_POST['lastname']; // Apellido del usuario
$username = $_POST['username']; // Nombre de usuario
$password = $_POST['password']; // Contraseña
$email = $_POST['email'];       // Correo electrónico

// Crea la consulta SQL para insertar un nuevo registro en la tabla 'users'
$sql = "INSERT INTO users VALUES('$id','$name','$lastname','$username','$password','$email')";

// Ejecuta la consulta en la base de datos
$query = mysqli_query($con, $sql);

// Verifica si la consulta fue exitosa
if($query){
    // Si se insertó correctamente, redirige al archivo 'crud.php'
    Header("Location: crud.php");
} else {
    // Si hay un error, aquí podrías mostrar un mensaje o registrar el error
}

?>
