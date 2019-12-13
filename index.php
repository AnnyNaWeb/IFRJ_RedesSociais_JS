<!DOCTYPE html>
<html lang="pt_BR">

    <head>

    <script> var pontos = 100; </script>

        <?php

            $__meta = "<meta property=\"og:title\" content=\"DESAFIO VOCE A BATER O MEU PLACAR\">";

            if( isset( $_GET[ "idusuario" ] ) && ! empty( $_GET[ "idusuario" ] ) ) {

                include ("salvarScore.php ");

                $userId = $_GET[ "idusuario" ];

                $data = capturaScore( $userId, $conn );

                $score = $data[ "score" ];

                $__meta = "<meta property=\"og:title\" content=\"DESAFIO VOCE A BATER O MEU PLACAR DE {$score}\">";

            }

        ?>

        <meta charset="utf-8">

        <meta property="og:description" content="Voce tem o que é necessário para ultrapassar minha pontuacao?" />
        <meta property="og:url" content="https://paradaturtle.000webhostapp.com/">
        <!-- <meta property="og:title" content="DESAFIO VOCE A BATER O MEU PLACAR"> -->
        <?php echo $__meta; ?>
        <meta property="og:image" content="https://paradaturtle.000webhostapp.com/img/fundo.jpg" />

        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.0/jquery.min.js"></script>

        <script src="facebook.js"></script>
        <script src="mouse.js"></script>
        <script src="pontos.js"></script>

        <title>TURTLE GAME OCEAN</title>

    </head>

    <body>
        <h2 id="msglogin">Ola</h2>

        <div id="msgs"></div>

        <div id="placar"></div>

        <button onclick="mostrarFoto();">Foto</button>
        <button onclick="entrar();" scope="public_profile" id="btentrar">ENTRAR NO FACEBOOK</button>

        <br>

        <button onclick="mostrarAmigos();" id="btmigs">MOSTRAR AMIGOS</button>
        <button onclick="sair();" id="btsair">SAIR DO FACEBOOK</button>
        <button onclick="compartilhar();" id="compartilha">Compartilhar</button>
        <button onclick="carregaScore();" id="btScoreQ">Quadro Ranking</button>

        <br><br>

        <button onclick="mostraPlacar();">Carregar</button>

        <canvas id="minhaTela" style="border: 1px solid #000;"></canvas>

        <script src="move.js" ></script>
        <script src="game.js"></script>

        <script>

            function loop() {

                //audio.play();
                desenha();
                update(); 

                setTimeout(loop, 30);
            }
            loop();
        </script>

    </body>

</html>