// Find Pricing for Cookies
function pricing(quantity) {
  if (quantity >= 100) {
    return 0.25 * quantity;
  } else {
    return 0.45 * quantity;
  }
}

function bmi(weight, height) {
  return weight / (height * height);
}

function bodyStatus(weight, height) {
  let x = bmi(weight, height);
  if (x <= 20) {
    console.log("EAT KHALED COOKIES! PLEASE");
  } else if (x >= 20 && x <= 25) {
    console.log("YOUR GOOD");
  } else {
    console.log("Follow a diet");
  }
}

bodyStatus(70, 1.7);
