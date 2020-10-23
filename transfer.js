$('#amount').hover(function () {

//alert('What?')
})
let network=document.querySelector('#nm');
$('#nm').click(function () {
$.ajax({
  type:'Post',
  url:'/transfer',
  data:{q:"rat"},
  dataType:"json",
  success:function (data) {
      alert(data.q);
  },
  error:function () {
    window.location.pathname='/login/:transfer'
    alert('Error loading')
  }
});
})
var bt=req.query.c;
alert(bt)
