window.fbAsyncInit = function() {
    FB.init({
      appId      : '1600988920034353',
      cookie     : true,
      xfbml      : true,
      version    : 'v3.2'
    });
      
    FB.AppEvents.logPageView();   
      
  };
  

  (function(d, s, id){
     var js, fjs = d.getElementsByTagName(s)[0];
     if (d.getElementById(id)) {
        
         return;
         }
     js = d.createElement(s); js.id = id;
     js.src = "https://connect.facebook.net/en_US/sdk.js";
     fjs.parentNode.insertBefore(js, fjs);
   }(document, 'script', 'facebook-jssdk'));
   
   
function checkLoginState() {
  FB.getLoginStatus(function(response) {
    statusChangeCallback(response);
  });
}

function entrar(){
FB.login(
    function(response) {
    
    var msg = document.getElementById("msglogin");
  if (response.status === 'connected') {
    // Logged into your app and Facebook.
    msg.innerHTML="BEM VINDE A APLICACAO!";;
    document.getElementById('btentrar').style.display = 'none';
    document.getElementById('btsair').style.display = 'inline';
    document.getElementById('btmigs').style.display = 'inline';
  
    if (response.authResponse) {
      console.log(response);
}
  } else {
      msg.innerHTML="QUE TAL SE CONECTAR?"
    // The person is not logged into this app or we are unable to tell. 
    document.getElementById('btentrar').style.display = 'inline';
    document.getElementById('btsair').style.display = 'none';
    document.getElementById('btmigs').style.display = 'none';

  }

}, {scope:'email, user_friends, user_photos', return_scopes:true});

}


function mostrarFoto(){
    FB.api("/me","get",{fields:"picture.height(50)"},function (response){
        console.log(response);
        
        var div=document.getElementById("msgs");
        var ima=new Image();
        ima.src=response.picture.data.url;
        div.append(ima);
        
            // div.querySelector.append(ima);   
    });
}
function mostrarAmigos(){
		
   FB.api("/{user-id}/friends","get",{fields:"picture.height(50)"},function (response){
       console.log(response);
       var migos = [];
     //  var migosImg = new Image();
       var divFriends = document.getElementById("friends");
        for(var i=0;i<response.data.length;i++){
          migos[i] = response.data[i].id;
        
          console.log(migos.length);
         
          

        }
       
    });
  
 
 

} 



function compartilhar(){
  // var meta = document.getElementById("mudaDesafio") ;
  // meta.content.append(pontos+" CLICA AI E ME SUPERE, AMORE");

  var userid;
  if( sessionStorage.getItem( "userid" ) ) {
    userId = sessionStorage.getItem( "userid" );
  }
   console.log(pontos);

   if(userid != "") {
    FB.ui({method:"feed",
    link:"https://paradaturtle.000webhostapp.com/?userid=" + userid},function (response){
        console.log(response);
        sessionStorage.removeItem('userid');

        if(response.error_message){
            alert("Erro");
        }else{
            
            alert("postou");
        }
    });
  }
  else {
    
    FB.ui({method:"feed",
    link:"https://paradaturtle.000webhostapp.com/?"},function (response){
        console.log(response);

        if(response.error_message){
            alert("Erro");
        }else{
            
            alert("postou");
        }
    });
  }
}

function sair(){
FB.logout(function(response) {
   var msg = document.getElementById("msglogin");
   msg.innerHTML = "QUE TAL SE CONECTAR?";
   document.getElementById('btentrar').style.display = 'inline';
   document.getElementById('btsair').style.display = 'none';
   document.getElementById('btmigs').style.display = 'none';
});
}
function quadroScore(){
  FB.api(
    "/{app-id}/scores",
    function (response) {
      if (response && !response.error) {
        /* handle the result */
        console.log(response);
      }
    }
);
}

function mostraPlacar(){
  FB.api("/me","get",{fields:"id,name"},function (response){
    console.log(response);
    var div=document.getElementById("placar");
    div.innerHTML="PLACAR DE "+ response.name+ " FOI DE " +pontos;

    sessionStorage.setItem("userid", response.id);
  
  });
}