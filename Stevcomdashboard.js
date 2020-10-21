let network=document.querySelector('.userwu');
let y=[network.innerText];
for (var option in y) {
var pair=y[option].split("\n");
pair[0]="Balance:N3000";
pair[3]="Referral Bonus:₦30.0"
console.log(pair[0]);
console.log(pair[3]);
};
