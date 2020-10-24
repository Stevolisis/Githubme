var dataRates = {"MTN|1":[
{"id":"0.179.0.200/500MB-N200","network":"MTN","amount":"200.00","data_size":"500MB","duration":"1month"},
{"id":"0.166.0.340/1GB-N340","network":"MTN","amount":"340.00","data_size":"1GB","duration":"1month"},
{"id":"0.167.0.650/2GB-N650","network":"MTN","amount":"650.00","data_size":"2GB","duration":"1month"},
{"id":"0.168.0.950/3GB-N950","network":"MTN","amount":"950.00","data_size":"3GB","duration":"1month"},
{"id":"0.169.0.1600/5GB-N1,600","network":"MTN","amount":"1600.00","data_size":"5GB","duration":"1month"}],
"AIRTEL|3":[
{"id":"0.144.0.470/750MB-N470","network":"AIRTEL","amount":"975.00","data_size":"750MB","duration":"1Week"},
{"id":"0.145.0.980/1.5GB-N980","network":"AIRTEL","amount":"980.00","data_size":"1.5GB","duration":"1month"},
{"id":"0.146.0.1300/2GB-N1,300","network":"AIRTEL","amount":"1300.00","data_size":"2GB","duration":"1month"},
{"id":"0.147.0.1440/3GB-N1,440","network":"AIRTEL","amount":"1440.00","data_size":"3GB","duration":"1month"},
{"id":"0.148.0.1890/4.5GB-N1,890","network":"AIRTEL","amount":"1890.00","data_size":"4.5GB","duration":"1month"}],
"GLO|2":[
{"id":"17","network":"GLO","amount":"455.00","data_size":"1GB","duration":"14days"},
{"id":"17","network":"GLO","amount":"880.00","data_size":"2.3GB","duration":"1month"},
{"id":"17","network":"GLO","amount":"1295.00","data_size":"3.7GB","duration":"1month"}],

"9MOBILE|7":[
{"id":"0.154.0.380/500MB-N380","network":"9MOBILE","amount":"380.00","data_size":"500MB","duration":"1month"},
{"id":"0.170.0.1500/1GB-N500","network":"9MOBILE","amount":"500.00","data_size":"1GB","duration":"10days"},
{"id":"0.155.0.760/1.5GB-N760","network":"9MOBILE","amount":"760.00","data_size":"1.5GB","duration":"1month"},
{"id":"0.156.0.900/2GB-N900","network":"9MOBILE","amount":"900.00","data_size":"2GB","duration":"1month"},
{"id":"0.157.0.1100/3GB-N1,100","network":"9MOBILE","amount":"1100.00","data_size":"3GB","duration":"1month"},
{"id":"0.158.0.1500/4.5GB-N1,500","network":"9MOBILE","amount":"1500.00","data_size":"4.5GB","duration":"1month"}
]};
$('#slct1').change(function () {
  var network = $(this).val();
var rateArr = dataRates[network];
var options='';
for (var i = 0; i < rateArr.length; i++){
var rate = rateArr[i];

options += '<option value="'+rate['id']+'">'
  + rate['data_size']
  + ' - ' + '₦' + rate['amount']+'--'+rate['duration'];
// 			+ ' - ' + rate['duration'] + '</option>';

}

$('#slct2').html(options);

});
