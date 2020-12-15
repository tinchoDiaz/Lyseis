<?php
        $aErrores = array();
        $aMensajes = array();

        // Comprobar si llegaron los campos requeridos:
        if( isset($_POST['name']) &&  isset($_POST["email"]) &&  isset($_POST["message"]))
        {

            // apellido
            if( empty($_POST['name']))
            {
                $aErrores[] = "El name debe ser ingresado";
            }

            if( empty($_POST['email']))
            {
                $aErrores[] = "El email debe ser ingresado";
            }

            if( empty($_POST['message']))
            {
                $aErrores[] = "El message debe ser ingresado";
            }

            // Si han habido errores se muestran, sino se mostrán los mensajes
            if( count($aErrores) > 0 )
            {
                echo "<p>ERRORES ENCONTRADOS:</p>";
                // Mostrar los errores:
                for( $contador=0; $contador < count($aErrores); $contador++ )
                {
                                echo $aErrores[$contador]."<br/>";
                }
                echo "<p><a href='wwww.lyseis.com.ar'> Volver al formulario</a></p>";
            }
            else
            {
                $asunto= "Consulta en Lyseis";
                $header= $_POST["email"] . "\r\n";

                /*
                $email="info@lyseis.com.ar";
                */

                $email="mfdiaz76@gmail.com";

                $v_mensaje = "Nombre=" . $_POST["name"] ."\n". "Email=" . $_POST["email"] ."\n". "Mensaje="  . $_POST["message"];

                $mail= @mail($email,$asunto,$v_mensaje,$header);

                if ($mail){
                    /*echo "<h4>El mail se envio Correctamente!</h4>";*/
                    echo '
                        <script type="text/javascript">
                            alert("El mail se envio correctamente!");
                            window.location.href="www.lyseis.com.ar";
                        </script>';
                }
                else
                {
                    /*echo "<h4>Error al enviar el mail!</h4>";*/
                    echo '
                        <script type="text/javascript">
                            alert("Error al enviar el mail!");
                            window.location.href="www.lyseis.com.ar";
                        </script>';
                }
            }
        }
        else {
            //echo "No llegaron todos los parametros";
            echo '
                <script type="text/javascript">
                    alert("No llegaron todos los parametros!");
                    window.location.href="www.lyseis.com.ar";
                </script>';
        }
?>
