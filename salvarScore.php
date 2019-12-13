<?php

$servername = "localhost";
$database   = "DBRanking";
$username   = "roid9847027_root";
$password   = "paradaroot";

$conn = mysqli_connect( $servername, $username, $password, $database );

//checando conexao
if( ! $conn ) die( "Connection failed: " . mysqli_connect_error() );

function salvarScore( $id_usuario, $score, $conn ) {

    $sql = "INSERT INTO ranking (idUsuario, ranking) VALUES ('$id_usuario', '$score')";

    if( mysqli_query( $conn, $sql ) ) {

        echo "NEW RECORD CRIADO COM SUCESSO";

    }
    else {
        echo "ERROR: " . $sql . "<br>" . mysqli_error( $conn );
    }

}

function capturaScore( $id_usuario, $conn ) {

    $sql = "SELECT * FROM ranking WHERE idUsuario = " . $id_usuario;

    $result = mysqli_query( $conn, $sql );

    if( $result->num_rows == 1 ) {

        return mysqli_fetch_assoc($result);

    }
    else {
        echo "ERROR: " . $sql . "<br>" . mysqli_error( $conn );
    }

}