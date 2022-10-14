
function resultadoResposta (){
    var contador = 3;
      while( contador > 0 ){
        var pergunta = prompt('Qual é a sua resposta?');
          if(pergunta != null){
            if(pergunta == 'A' || pergunta =='a'){
                window.location.assign("/nikolas/fase2/fase2.html");
                break; 
              }else if( pergunta =='b' || pergunta =='B'){
                contador--;
                alert(`Você tem ${contador} tentativas restantes`);
              }else{
               alert ('tente de novo');
               
            }
          }
          
      }
      if( contador == 0){
        alert ('vc perdeu')
        window.location.assign("/nikolas/fase1/perdeu.html")
      }     
  }
  