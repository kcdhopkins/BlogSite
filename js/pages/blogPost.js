define(['addInactiveClass', 'setPageElement'], function(addInactiveClass, setPageElement){
  function blogPost(route){
    $('#jtron').fadeOut();
    //Get blog key from array [key=001] example
    //This file hides all pages execpt for the page being navigated to
    addInactiveClass('blogPost');
    //pass in name of div, name of script id in html file and key
    const blogPostOpen = setPageElement('blogPost', 'blogPage', route[1]);
  }

  return blogPost;
});
