const myform2=document.querySelector('#ty');
let tvplatform=document.querySelector('#form-control');
let subscriptionpackage=document.querySelector('#form-control2');
let iucnumber=document.querySelector('#form-control3');

//--------------------------------------------------------------------
var e=document.querySelector('.Sidebar h4 span');
console.log(e.innerText);
//---------------------------------------------------------------------
function populate(s1,s2) {
  var s1=document.getElementById(s1);
  var s2=document.getElementById(s2);
s2.innerHTML="";
if (s1.value=='DSTV') {
  var optionArray=["CompactN6975|Dstv Compact-N6,975",
  "Compact_PlusN10925|Dstv Compact Plus-N10,925","PremiumN16200|Dstv Premium-N16,200",
"Premium_AsiaN18150|Dstv Premium Asia-N18,150","Asia_BouquetN5540|Asia Bouquet-N5,540",
"Yanga_Bouquet_E36N2565|Dstv Yanga Bouquet E36-N2,565","Confam_BouquetN4615|Dstv Confam Bouquet-N4,615",
  "PadiN1850|Padi-N1,850","Great_Wall_Standalone_BouquetN1285|DStv Great Wall Standalone Bouquet-N1,285",];}
  for (var option in optionArray) {
    var pair=optionArray[option].split("|");
    var newOption=document.createElement("option");
    newOption.value=pair[0];
    newOption.innerHTML=pair[1];
    s2.options.add(newOption);

  }

  };
  //--------------------------------------------------------------------
  function populate1(s1,s2) {
    var s1=document.getElementById(s1);
    var s2=document.getElementById(s2);
  s2.innerHTML="";
  if (s1.value=='GOTV') {
   var optionArray=["MaxN3280|GOtv Max-N3,280",
   "Jinja_BouquetN1640|GOtv Jinja Bouquet-N1,640","Jolli_BouquetN2460|GOtv Jolli Bouquet-N2,460",
   "LiteN410|GOtv Lite-N410"];
 }
    for (var option in optionArray) {
      var pair=optionArray[option].split("|");
      var newOption=document.createElement("option");
      newOption.value=pair[0];
      newOption.innerHTML=pair[1];
      s2.options.add(newOption);

    }

    };
    //--------------------------------------------------------------------
    function populate2(s1,s2) {
      var s1=document.getElementById(s1);
      var s2=document.getElementById(s2);
    s2.innerHTML="";
    if (s1.value=='STARTIMES') {
      var optionArray=["NovaN900|Nova-N900",
      "BasicN1300|Basic-N1300","SmartN1900|Smart-N1,900"
      ,"ClassicN1900|Classic-N1,900","SuperN3800|Super-N3,800","Nova_WeeklyN300|Nova-Weekly-N300"
    ,"Basic-WeeklyN450|Basic-Weekly-N450","smart_WeeklyN600|smart-Weekly-N600",
    "Classic_WeeklyN900|Classic-Weekly-N900","Super-WeeklyN1300|Super-Weekly-N1,300",
    "Nova_DailyN90|Nova-Daily-N90"];
    }
      for (var option in optionArray) {
        var pair=optionArray[option].split("|");
        var newOption=document.createElement("option");
        newOption.value=pair[0];
        newOption.innerHTML=pair[1];
        s2.options.add(newOption);

      }

      };
      //--------------------------------------------------------------------
      myform2.addEventListener('submit',onSubmit);
      function onSubmit(e) {
        e.preventDefault();
        var aarray=[tvplatform.value,subscriptionpackage.value,iucnumber.value]

      const li2=
        {
          Tvplatform:aarray[0],
          SubscriptionPackage:aarray[1],
          IUCNumber:aarray[2]

        };
      const todojson2=JSON.stringify(li2);
      console.log(todojson2);
      tvplatform.value='';
      subscriptionpackage.value='';
      iucnumber.value='';
      };
