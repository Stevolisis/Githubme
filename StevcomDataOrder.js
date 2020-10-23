const myform2=document.querySelector('#ty');
let phonenumber=document.querySelector('.form-control');
let network=document.querySelector('#slct1');
let databundle=document.querySelector('#slct2');

//--------------------------------------------------------------

function populate(s1,s2) {
  var s1=document.getElementById(s1);
  var s2=document.getElementById(s2);
s2.innerHTML="";
if (s1.value=='MTN|1') {
  var optionArray=["0.179.0.200/500MB-N200|500MB-N200---1month",
  "0.166.0.340/1GB-N340|1GB-N340---1month",
  "0.167.0.650/2GB-N650|2GB-N650-1month","0.168.0.950/3GB-N950|3GB-N950---1month",
  "0.169.0.1600/5GB-N1,600|5GB-N1,600---1month"]
}
  for (var option in optionArray) {
    var pair=optionArray[option].split("|");
    var newOption=document.createElement("option");
    newOption.value=pair[0];
    newOption.innerHTML=pair[1];
    s2.options.add(newOption);

  }
  };
  function populate1(s1,s2) {
    var s1=document.getElementById(s1);
    var s2=document.getElementById(s2);
  s2.innerHTML="";
  if (s1.value=='AIRTEL|3') {
  var optionArray=["0.144.0.470/750MB-N470|750MB-N470---1week",
  "0.145.0.980/1.5GB-N980|1.5GB-N980---1month","0.146.0.1300/2GB-N1,300|2GB-N1,300---1month",
  "0.147.0.1440/3GB-N1,440|3GB-N1,440---1month"
,"0.148.0.1890/4.5GB-N1,890|4.5GB-N1,890---1month"];
  }
    for (var option in optionArray) {
      var pair=optionArray[option].split("|");
      var newOption=document.createElement("option");
      newOption.value=pair[0];
      newOption.innerHTML=pair[1];
      s2.options.add(newOption);
    }

    };
    function populate2(s1,s2) {
      var s1=document.getElementById(s1);
      var s2=document.getElementById(s2);
    s2.innerHTML="";
    if (s1.value=='GLO|2') {
      var optionArray=["82.0.0.455/1GB-N455|1GB-N455---1 week",
      "13.0.0.880/2.3GB-N880|2.3GB-N880---1month",
      "84.0.0.1295/3.7GB-N1,295|3.7GB-N1,295---1month"];
    }
      for (var option in optionArray) {
        var pair=optionArray[option].split("|");
        var newOption=document.createElement("option");
        newOption.value=pair[0];
        newOption.innerHTML=pair[1];
        s2.options.add(newOption);

      }

      };
      function populate3(s1,s2) {
        var s1=document.getElementById(s1);
        var s2=document.getElementById(s2);
      s2.innerHTML="";
      if (s1.value=='9MOBILE|7') {
        var optionArray=[
        "0.154.0.380/500MB-N380|500MB-N380---1month","0.170.0.1500/1GB-N500|1GB-N500---10 days",
        "0.155.0.760/1.5GB-N760|1.5GB-N760---1month","0.156.0.900/2GB-N900|2GB-N900---1month",
        "0.157.0.1100/3GB-N1,100|3GB-N1,100---1month",
        "0.158.0.1500/4.5GB-N1,500|4.5GB-N1,500---1month"];
      }
        for (var option in optionArray) {
          var pair=optionArray[option].split("|");
          var newOption=document.createElement("option");
          newOption.value=pair[0];
          newOption.innerHTML=pair[1];
          s2.options.add(newOption);

        }

        };
      /*else if (s1.value=='AIRTEL') {
  var optionArray=["|","Airtel1|750MB-N480",
  "Airtel2|1GB-N950","Airtel3|2GB-N1150","Airtel4|3GB-N1450"];
}

else if (s1.value=='GLO') {
  var optionArray=["|","Glo1|1GB-N450",
  "Glo2|2.5GB-N900","Glo3|4.1GB-N1350","Glo4|5.8GB-N1800"
,"Glo5|7.7GB-N2250","Glo6|12.5GB-N3600","Glo7|15.6GB-N4500"];
}

else if (s1.value=='9MOBILE') {
  var optionArray=["|","9Mobile1|1.5GB-N800",
  "9Mobile2|4.5GB-N1800","9Mobile3|11GB-N3200","9Mobile4|15GB-N4000"];
}*/
//--------------------------------------------------------------
//-----------------------------------------------------------------




/*
function() {

  var network = $(this).val();

  var rateArr = dataRates[network];

  var options = '';

  for (var i = 0; i < rateArr.length; i++) {

    var rate = rateArr[i];

    options += '<option value="' + rate['id'] + '">'
    + rate['data_size'] + 'gb - ' + '₦' + rate['amount'];
    // 			+ ' - ' + rate['duration'] + '</option>';

  }

  $('#_inc-place-order select[name="data_rate_id"]').html(options);

}*/
