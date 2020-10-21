$(".signin2").hide();
$('#Register').click(function () {
  $('.signin').fadeOut(900,function () {
    $('.signin2').fadeIn(900);
  });
});
$('.logout_btn').click(function () {
  $('.signin2').fadeOut(900,function () {
    $('.signin').fadeIn(900);
  });
});
//---------------------Fading Effect------------------------------------
$('#create span').click(function () {
  $('.signin').fadeOut(900,function () {
    $('.signin2').fadeIn(900);
  });

  //----------------------------Sign Up details------------------------------

  //--------------------------------------------
  $('.logout_btn').click(function () {
    $('.signin2').fadeOut(900,function () {
      $('.signin').fadeIn(900);
    });
  });
  //--------------------------------------------------
  function onSubmit() {

  if (nameinput2.value===''||passwordinput2.value===''
  ||emalinput.value==='') {
      alert('Please enter all fields');
    }
  else{
  const li2=
    {
      username:`${nameinput2.value}`,
      password:`${passwordinput2.value}`,
      emailadress:`${emalinput.value}`
    };
  const todojson2=JSON.stringify(li2);
  console.log(todojson2);
  nameinput.value='';
  passwordinput.value='';

  }};

});
//-------------------------Sign In details----------------------------
$("#sidehr span").after("<hr>");
$("#sidehry span").after("<hr>");
$("#sidehrz span").after("<hr>");
//------------------------------------------------------------------


//-----------------------Smooth Scroll--------------------------
$('header a').on('click',function (e) {
  if (this.hash !=='') {
    e.preventDefault();
    const hash=this.hash;
    $('html,body').animate({
      scrollTop:$(hash).offset().top
    },900);
  }
});
//---------------------------$.ajax API---------------------------







































/*li.appendChild(document.createTextNode
  (`${nameinput.value}: ${emailinput.value}`));
userlist.appendChild(li);
nameinput.value='';
emailinput.value='';*/

/*$('.contact').click(function (e) {
  var linkhref=$(this).attr('href');
  $('html,body').animate({
    scrollTop:$('linkhref').offset().top
  },1000);
  e.preventDefault();
});*/
