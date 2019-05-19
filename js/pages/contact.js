define(['setPageElement', 'addInactiveClass'], function(setPageElement, addInactiveClass){

  function contact(route){
    $('#jtron').fadeOut();
    addInactiveClass('contact');
    //Second parameter must be the name of id of script in the HTML file
    const contactPageOpen = setPageElement('contact', 'contactPage');
  }

  return contact;
});
