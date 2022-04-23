function tempUnitConverter([num, unit]) {
  if (unit === "C") {
    return (num * 9) / 5 + 32;
  } else if (unit === "F") {
    return ((num - 32) * 5) / 9;
  } else {
    console.log("Check the unit. It can only be 'C' or 'F");
  }
}
