define(['routers', 'bootstrap'], function(routers, bootstrap){
  //Defaults to home.js
    if(!location.hash){
      location.hash = "#home";
    }

    navigate();

    function navigate(){
      console.log("--------Start---------");
      console.log(`mainPage calling routers passing ${location.hash}`);
      routers(location.hash);
      console.log('--------End---------');
    }

    //add eventListener to the window to listen for hash changes, once hash has changed call navigate()
    window.addEventListener('hashchange', navigate);

});
