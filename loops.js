let brands = ["Hermes", "Dior", "Gucci", "Van Cleef", "Rolex"];

let x = brands.length;
while (x > 0) {
  if (brands[x - 1] == "Hermes") {
    console.log("Can't buy this brand");
  }
  x--;
}
