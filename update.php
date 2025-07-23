<?php 
    // Incluye el archivo que contiene la conexión a la base de datos
    include("connection.php");
    // Llama a la función para conectarse a la base de datos y guarda la conexión en $con
    $con = connection();

    // Obtiene el ID del usuario desde la URL (método GET)
    $id = $_GET['id'];

    // Consulta SQL para seleccionar todos los datos del usuario con el ID recibido
    $sql = "SELECT * FROM users WHERE id='$id'";
    $query = mysqli_query($con, $sql);

    // Guarda el resultado de la consulta en un array asociativo
    $row = mysqli_fetch_array($query);
?>
<!DOCTYPE html>
<html lang="en">
    <head>
        <!-- Configuraciones básicas del documento HTML -->
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        
        <!-- Enlace a una hoja de estilos externa -->
        <link href="css/style.css" rel="stylesheet">
        
        <!-- Título de la pestaña del navegador -->
        <title>Editar usuarios</title>
    </head>
    <body>
        <!-- Contenedor del formulario -->
        <div class="users-form">

            <!-- Formulario que envía datos por método POST a 'edit_user.php' -->
            <form action="edit_user.php" method="POST">

                <!-- Campo oculto con el ID del usuario (necesario para actualizar) -->
                <input type="hidden" name="id" value="<?= $row['id']?>">

                <!-- Campos precargados con los datos actuales del usuario -->
                <input type="text" name="name" placeholder="Nombre" value="<?= $row['name']?>">
                <input type="text" name="lastname" placeholder="Apellidos" value="<?= $row['lastname']?>">
                <input type="text" name="username" placeholder="Username" value="<?= $row['username']?>">
                <input type="text" name="password" placeholder="Password" value="<?= $row['password']?>">
                <input type="text" name="email" placeholder="Email" value="<?= $row['email']?>">

                <!-- Botón para enviar el formulario -->
                <input type="submit" value="Actualizar">
            </form>
        </div>
    </body>
</html>
