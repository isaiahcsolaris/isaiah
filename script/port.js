let closeBtn = document.querySelectorAll('.work-close-btn');

$(document).ready( () => {
  //FOR CRYPTO PAGE DETAIL

  $('.crypto-link').click(() =>{
    $('.crypto-page').fadeIn(1000);
  });

  $(closeBtn).click(() => {
    $('.crypto-page').fadeOut(1000);
  });

  //FOR E-COMERCE PAGE DETAIL

  $('.ecom-link').click(() =>{
    $('.ecom-page').fadeIn(1000);
  });

  $(closeBtn).click(() => {
    $('.ecom-page').fadeOut(1000);
  });


  //FOR INVESTMENT PAGE DETAIL

  $('.inv-link').click(() =>{
    $('.inv-page').fadeIn(1000);
  });

  $(closeBtn).click(() => {
    $('.inv-page').fadeOut(1000);
  });

  //FOR YOUTUBE CLONE PAGE DETAIL

  $('.yt-link').click(() =>{
    $('.yt-page').fadeIn(1000);
  });

  $(closeBtn).click(() => {
    $('.yt-page').fadeOut(1000);
  });

  //FOR LINK TREE PAGE DETAIL

  $('.linkt-link').click(() =>{
    $('.linkt-page').fadeIn(1000);
  });

  $(closeBtn).click(() => {
    $('.linkt-page').fadeOut(1000);
  });

  //FOR AUTHENTICATION PAGE DETAIL

  $('.auth-link').click(() =>{
    $('.auth-page').fadeIn(1000);
  });

  $(closeBtn).click(() => {
    $('.auth-page').fadeOut(1000);
  });

  //FOR MUSIC PLAYER PAGE DETAIL

  $('.music-link').click(() =>{
    $('.music-page').fadeIn(1000);
  });

  $(closeBtn).click(() => {
    $('.music-page').fadeOut(1000);
  });



  //FOR CLIENTS MANUAL SLIDES

  $('.rad1').click(() => {
    $('.box1').fadeIn(500);
    $('.rad1').addClass('active');
    //box/container action
    $('.box2').hide();
    $('.box3').hide();
    //button actions
    $('.rad2').removeClass('active');
    $('.rad3').removeClass('active');
  })

  $('.rad2').click(() => {
    $('.box2').fadeIn(500);
    $('.rad2').addClass('active');
    //box/container action
    $('.box1').hide();
    $('.box3').hide();
    //button actions
    $('.rad1').removeClass('active');
    $('.rad3').removeClass('active');
  })

  $('.rad3').click(() => {
    $('.box3').fadeIn(500);
    $('.rad3').addClass('active');
    //box/container action
    $('.box1').hide();
    $('.box2').hide();
    //button actions
    $('.rad1').removeClass('active');
    $('.rad2').removeClass('active');
  })

  //RESUME PAGE LOCATION
 let resumePage = document.querySelectorAll('#js-location');

  $(resumePage).click(()=>{
    window.open('resume/resume.html');
  });
});

/*
// TO LOCATE THE RESUME PAGE

let resumePage = document.querySelectorAll('#js-location');

resumePage.addEventListener('click', () => {
  window.open('resume/resume.html');
});*/

//FOR MOBILE NAVBAR CLASS TOGGLE

let navBtn = document.querySelector('.nav-btn');
let nav = document.querySelector('.mobile-menu-box');
navBtn.addEventListener('click', ()=> {
  navBtn.classList.toggle('nav-option');
  nav.classList.toggle('nav-option');
});

