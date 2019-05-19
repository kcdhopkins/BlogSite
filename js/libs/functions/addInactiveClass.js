define(function(){
  function addInactiveClass(pageName){
      console.log("addInactiveClass function active");
      console.log(pageName);
      const hidePageElements = document.getElementById('pagesToShow').children;
      for(let i =0; i < hidePageElements.length; i++){
        if(pageName !== hidePageElements[i].id){
          console.log(`${pageName} is not supposed to be equal to ${hidePageElements[i].id}`);
          $(hidePageElements[i]).fadeOut();
        }
        else {
          console.log(`${pageName} is supposed to be equal to ${hidePageElements[i].id}`);
            $(hidePageElements[i]).fadeIn(1000);
          //hidePageElements[i].classList.remove('d-none');
        }
      }
    }
  return addInactiveClass;
});
