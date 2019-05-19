define(['setPageElement', 'addInactiveClass'], function(setPageElement, addInactiveClass){

  function blog(route){
      $('#jtron').fadeOut();
      //This file hides all pages execpt for the page being navigated too
      addInactiveClass('blog');
      //Second parameter must be the name of id of script in the HTML file
      const blogPageOpen = setPageElement('blog', 'blogList');
    }
  return blog;
});
