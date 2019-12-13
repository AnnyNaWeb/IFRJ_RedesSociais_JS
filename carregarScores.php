<?php
	$host="localhost";
	$user="id9847027_root";
	$pass="paradaroot";
	$db="id9847027_bdranking";
	
	$con= new mysqli($host,$user,$pass,$db);
	
	$where="";
	if(isset($_REQUEST['usuarios'])){
		// 231,456,671
		$ids=$_REQUEST['usuarios'];
		$where=" WHERE idUsuario in ($ids)";
	}
	$sql="SELECT MAX(score) AS score,idUsuario 
	FROM scores $where group by idUsuario 
	order by MAX(score) desc";
	
	$resultado=$con->query($sql);
	
	$resp=array();
	$i=0;
	while($score=$resultado->fetch_assoc()){
		
		/*
		$resp[$i]=$score;
		$i++;
		*/
		$resp[]=$score;
	}
	
	echo json_encode($resp);

?>