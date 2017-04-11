var regularPrice = 50;
var bought = 353;
var discountedPrice = regularPrice;

if (bought >=5 && bought <= 20) {
discountedPrice = regularPrice - 0.05 * regularPrice;
} else if (bought >= 21 && bought <= 50) {
discountedPrice = regularPrice - 0.10 * regularPrice;
} else if (bought >= 51 && bought <= 100) {
discountedPrice = regularPrice - 0.15 * regularPrice;
} else if (bought > 100) {
discountedPrice = regularPrice - 0.20 * regularPrice;
}

console.log("Podstawowa cena produktu to " + regularPrice + "zł, po obniżce to " + discountedPrice + "zł");
