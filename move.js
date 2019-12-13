var moveDown, moveLeft, moveRight, moveUp, space, mudaCena, mudou;



var _keyDown = function(e)
	{
		key = e.keyCode;
		
		switch (e.keyCode)
		{
			case 37: // seta esquerda
                moveLeft = true;

				break;
			case 13:
				mudaCena = true;
			break;
			case 32: // seta esquerda
	
			    space = true;
			break;
				
				case 37: // seta esquerda
				q = true;
				break;

			case 39: // seta direita
				moveRight = true;
				break;
				
					case 39: // seta direita
				r = true;
				break;

			case 38:   //seta para cima
		         moveUp = true;
		        break;
		
		    case 40: // seta para baixo
		         moveDown = true;
		         break;
						

				
			default:
				console.log("keyDown: " + e.keyCode);
				break;
		}
	}

	var _keyUp = function(e)
	{
		key = "";
		
		switch (e.keyCode)
		{
			case 37:
				moveLeft = false;
				break;
			case 13:
			console.log("mudou");
			mudaCena = false;
			
			break;
				case 37:
				q = false;
				break;
				case 32: // seta esquerda
				space = false;
				
				console.log("soltou");
			    
			break;
			case 39:
				moveRight = false;
				break;
				
				case 39:
				r = false;
				break;

			case 38:
		         moveUp = false;
		         break;
		
		    case 40:
		         moveDown = false;
		         break;	

			
				
			default:
				console.log("keyUp: " + e.keyCode);
				break;	
		}				
	}

	// registrando as fun��es
	document.addEventListener("keydown", _keyDown, true);
	document.addEventListener("keyup",   _keyUp,   true);
	