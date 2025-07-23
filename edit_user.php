<?php

// Incluye el archivo que contiene la función para conectarse a la base de datos
include("connection.php");
// Llama a la función 'connection' para obtener la conexión a la base de datos y la guarda en la variable $con
$con = connection();

// Obtiene los datos enviados por el formulario mediante el método POST
$id = $_POST["id"];              // ID del usuario que se va a actualizar
$name = $_POST['name'];         // Nuevo nombre del usuario
$lastname = $_POST['lastname']; // Nuevo apellido del usuario
$username = $_POST['username']; // Nuevo nombre de usuario
$password = $_POST['password']; // Nueva contraseña
$email = $_POST['email'];       // Nuevo correo electrónico

// Crea la consulta SQL para actualizar los datos del usuario con el ID correspondiente
$sql = "UPDATE users 
        SET name='$name', lastname='$lastname', username='$username', password='$password', email='$email' 
        WHERE id='$id'";

// Ejecuta la consulta en la base de datos
$query = mysqli_query($con, $sql);

// Verifica si la consulta se ejecutó correctamente
if ($query) {
    // Si fue exitosa, redirige al archivo 'crud.php'
    Header("Location: crud.php");
} else {
    // Si hubo un error, aquí podrías mostrar un mensaje de error o hacer alguna otra acción
}

?>
