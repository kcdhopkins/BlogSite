require(['common'], function(common){
  require(['mainPage'], function(main){
    //Load navBar for mainPage
    //$('#nav').load('includes/components/navBar.html');
    //Changed to use es6 fetch api
    fetch('includes/components/navBar.html')
        .then(html => html.text())
        .then(function(response){
          document.getElementById('nav').innerHTML = response;
        });
    //Load jumbotron for mainPage
    //$('#jtron').load('includes/components/jumbotron.html');
    fetch('includes/components/jumbotron.html')
        .then(html => html.text())
        .then(response =>{
          document.getElementById('jtron').innerHTML = response;
        });
    //load footer
    //$('#foot').load('includes/components/footer.html');
    fetch('includes/components/footer.html')
      .then(html => html.text())
      .then(response =>{
        document.getElementById('foot').innerHTML = response;
      });
  });
});
