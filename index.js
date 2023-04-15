//export
function getMonth(x) {
  if (x === 1) console.log("январь");
  if (x === 2) console.log("февраль");
  if (x === 3) console.log("март");
  if (x === 4) console.log("апрель");
  if (x === 5) console.log("май");
  if (x === 6) console.log("июнь");
  if (x === 7) console.log("июль");
  if (x === 8) console.log("август");
  if (x === 9) console.log("сентябрь");
  if (x === 10) console.log("октябрь");
  if (x === 11) console.log("ноябрь");
  if (x === 12) console.log("декабрь");
  else {
    console.log("Что-то не так");
  }
}
module.exports = getMonth;
