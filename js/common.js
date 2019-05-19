requirejs.config({
  baseUrl:"js",
  paths: {
    jquery: 'libs/jquery',
    bootstrap: 'libs/bootstrap.bundle',
    mdb : 'libs/mdb',
    compileHandleBars: 'libs/functions/compileHandleBars',
    addInactiveClass: 'libs/functions/addInactiveClass',
    setPageElement:'libs/functions/setPageElement',
    blogPost: 'pages/blogPost',
    blogInfo: 'blogContent/blogInfo',
    mainPage: 'pages/mainPage',
    blog: 'pages/blog',
    contact: 'pages/contact',
    home: 'pages/home',
    aboutMe: 'pages/aboutMe',
    routers: 'routes/routers',
    handlebars: 'libs/handlebars'
  },
  shim:{
    jquery:{
      exports: '$'
    },
    handlebars:{
      exports: 'Handlebars'
    },
    bootstrap: 'jquery'
  }
});
