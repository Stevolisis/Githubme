const todos=[
  {
  id:1,
  text:'Take out trash',
  isCompleted:true
},
{
  id:2,
  text:'Meeting with boss',
  isCompleted:true
},
{
  id:3,
  text:'Dentist appt',
  isCompleted:false
}
];
for (var i = 0; i < todos.length; i++) {
  console.log(todos[i].text);
  if (todos[i].text=='Take out trash') {
    console.log("ok");
  }else{
    console.log("not Ok");
  }
}
const ty=Date('2017-06-23');
const tyu=ty.split(' ')[2]
const tye=ty.split(' ')[1]
const tyw=ty.split(' ')[3]
const tywp=ty.split(' ')[4]
 tre=tyu+tye+tyw+'|'+tywp
console.log(tre);
/*const todoText=todos.map(function (todo) {
  return todo.text;
})
console.log(todoText);*/
/*const todocomplt=todos.filter(function (todo) {
  return todo.isCompleted===false;
}).map(function (todo) {
  return todo;
})
console.log(todocomplt);*/
/*
const todocomplt=todos.filter(function (todo) {
  return todo.isCompleted===false;
}).map(function (todo) {
  console.log(todo.id);
  console.log(todo.text);

})*/












/*const myform2=document.querySelector('#ty');
let amount=document.querySelector('#amount');
const myform3=document.querySelector('#tz');
let amount2=document.querySelector('#amount2');
myform2.addEventListener('submit',onSubmit);
function onSubmit(e) {
  e.preventDefault();
  let aarray=amount.value;

const li2=
  {
    public_key: "FLWPUBK_TEST-31d61a13026483fc38f15f0e90232374-X",
   tx_ref: "hooli-tx-1920bbtyt",
   amount:`${amount.value}`*1,
   currency: "NGN",
   payment_options: "card,mobilemoney,ussd",
   customer: {
     email: "user@gmail.com",
     phonenumber: "08102909304",
     name: "yemi desola",
   },
  };
console.log(li2);
console.log(amount.value);
amount.value='';
};
myform3.addEventListener('submit',onSsubmit);
function onSsubmit(e) {
  e.preventDefault();
  let aarray=amount.value;

const li=
  {
    public_key: "FLWPUBK_TEST-31d61a13026483fc38f15f0e90232374-X",
   tx_ref: "hooli-tx-1920bbtyt",
   amount:`${amount2.value}`*1,
   currency: "NGN",
   payment_options: "card,mobilemoney,ussd",
   customer: {
     email: "user@gmail.com",
     phonenumber: "08102909304",
     name: "yemi desola",
   },
  };
console.log(li);
console.log(amount2.value);
amount2.value='';
};
*/
