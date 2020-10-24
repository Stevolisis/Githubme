var dataRates = {"DSTV":[
{"id":"0.179.0.200/500MB-N200","network":"DSTV","amount":"6975.00","data_size":"Dstv Compact","duration":"1month"},
{"id":"0.166.0.340/1GB-N340","network":"DSTV","amount":"10925.00","data_size":"Dstv Compact Plus","duration":"1month"},
{"id":"0.167.0.650/2GB-N650","network":"DSTV","amount":"16200.00","data_size":"Dstv Premium","duration":"1month"},
{"id":"0.168.0.950/3GB-N950","network":"DSTV","amount":"18150.00","data_size":"Dstv Premium Asia","duration":"1month"},
{"id":"0.168.0.950/3GB-N950","network":"DSTV","amount":"5540.00","data_size":"Asia Bouquet","duration":"1month"},
{"id":"0.168.0.950/3GB-N950","network":"DSTV","amount":"2565.00","data_size":"Dstv Yanga Bouquet E36","duration":"1month"},
{"id":"0.168.0.950/3GB-N950","network":"DSTV","amount":"4615.00","data_size":"Dstv Confam Bouquet","duration":"1month"},
{"id":"0.168.0.950/3GB-N950","network":"DSTV","amount":"1850.00","data_size":"Padi","duration":"1month"},
{"id":"0.168.0.950/3GB-N950","network":"DSTV","amount":"1285.00","data_size":"DStv Great Wall Standalone Bouquet","duration":"1month"}],

"GOTV":[
  {"id":"0.146.0.1300/2GB-N1,300","network":"GOTV","amount":"3280.00","data_size":"GOtv Max","duration":"1month"},
{"id":"0.144.0.470/750MB-N470","network":"GOTV","amount":"1640.00","data_size":"GOtv Jinja Bouquet","duration":"1month"},
{"id":"0.145.0.980/1.5GB-N980","network":"GOTV","amount":"2460.00","data_size":"GOtv Jolli Bouquet","duration":"1month"},
{"id":"0.146.0.1300/2GB-N1,300","network":"GOTV","amount":"410.00","data_size":"GOtv Lite","duration":"1month"}],

"STARTIMES":[
{"id":"0.154.0.380/500MB-N380","network":"STARTIMES","amount":"900.00","data_size":"Nova","duration":"1month"},
{"id":"0.154.0.380/500MB-N380","network":"STARTIMES","amount":"1700.00","data_size":"Basic","duration":"1month"},
{"id":"0.154.0.380/500MB-N380","network":"STARTIMES","amount":"2200.00","data_size":"Smart","duration":"1month"},
{"id":"0.154.0.380/500MB-N380","network":"STARTIMES","amount":"2500.00","data_size":"Classic","duration":"1month"},
{"id":"0.154.0.380/500MB-N380","network":"STARTIMES","amount":"4200.00","data_size":"Super","duration":"1month"},
{"id":"0.154.0.380/500MB-N380","network":"STARTIMES","amount":"300.00","data_size":"Nova-Weekly","duration":"1month"},
{"id":"0.170.0.1500/1GB-N500","network":"STARTIMES","amount":"600.00","data_size":"Basic-Weekly","duration":"1month"},
{"id":"0.155.0.760/1.5GB-N760","network":"STARTIMES","amount":"800.00","data_size":"Smart-Weekly","duration":"1month"},
{"id":"0.156.0.900/2GB-N900","network":"STARTIMES","amount":"1200.00","data_size":"Classic-Weekly","duration":"1month"},
{"id":"0.157.0.1100/3GB-N1,100","network":"STARTIMES","amount":"1500.00","data_size":"Super-Weekly","duration":"1month"},
{"id":"0.158.0.1500/4.5GB-N1,500","network":"STARTIMES","amount":"90.00","data_size":"Nova-Daily","duration":"1month"}
]};

$('#form-control').change(function () {
  var network = $(this).val();
var rateArr = dataRates[network];
var options='';
for (var i = 0; i < rateArr.length; i++){
var rate = rateArr[i];

options += '<option value="'+rate['id']+'">'
  + rate['data_size']
  + ' - ' + '₦' + rate['amount'];
// 			+ ' - ' + rate['duration'] + '</option>';

}

$('#form-control2').html(options);

});
