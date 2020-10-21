$(".signin2").hide();
$('#Register').click(function () {
  $('.signin').fadeOut(900,function () {
    $('.signin2').fadeIn(900);
  });
});
//---------------------Fading Effect------------------------------------
$('#create span').click(function () {
  $('.signin').fadeOut(900,function () {
    $('.signin2').fadeIn(900);
  });
  //----------------------------Sign Up details------------------------------
  const myform2=document.querySelector('#signnin2');
  let nameinput2=document.querySelector('.form-controll');
  let passwordinput2=document.querySelector('.form-controll2');
  let emalinput=document.querySelector('.form-controll3');

  myform2.addEventListener('submit',onSubmit);
  function onSubmit(e) {
    e.preventDefault();

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
const myform=document.querySelector('#signnin');
let nameinput=document.querySelector('.form-control');
let passwordinput=document.querySelector('.form-control2');

myform.addEventListener('submit',onSubmit);
function onSubmit(e) {
  e.preventDefault();

  if (nameinput.value===''||passwordinput.value==='') {
    alert('Please enter all fields');
  }
else{
const li=
  {
    username:`${nameinput.value}`,
    password:`${passwordinput.value}`
  };
const todojson=JSON.stringify(li);
console.log(todojson);
nameinput.value='';
passwordinput.value='';
}};
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
