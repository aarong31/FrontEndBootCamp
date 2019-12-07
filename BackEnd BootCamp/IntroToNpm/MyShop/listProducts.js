var fake= require("faker");
console.log("$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$");
console.log("Welcome To My Shop");
console.log("$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$");

for(var i=0;i<10;i++){
	var randProducts = fake.commerce.productName() +": " + fake.commerce.price();;
	console.log(randProducts);
}