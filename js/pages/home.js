define(['setPageElement', 'addInactiveClass'], function(setPageElement, addInactiveClass){

    function home(route){
      $('#jtron').fadeIn();
      //Second parameter must be the name of id of script in the HTML file
      addInactiveClass('home');
      const homePageOpen = setPageElement('home', 'homePage');
      //const homePageTest = document.getElementById('home').innerHTML;
    }

  return home;
});
