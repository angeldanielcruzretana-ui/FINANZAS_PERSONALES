<?php

// Función que establece una conexión con la base de datos
function connection(){
    // Parámetros de conexión
    $host = "localhost";  // Servidor (localhost cuando estás en tu PC)
    $user = "root";       // Usuario de la base de datos (por defecto es 'root' en XAMPP)
    $pass = "";           // Contraseña (vacía por defecto en XAMPP)

    $bd = "users_crud_php"; // Nombre de la base de datos que se va a usar

    // Establece la conexión al servidor MySQL
    $connect = mysqli_connect($host, $user, $pass);

    // Selecciona la base de datos específica para usar
    mysqli_select_db($connect, $bd);

    // Retorna el objeto de conexión para ser usado en otros archivos
    return $connect;
}

?>
