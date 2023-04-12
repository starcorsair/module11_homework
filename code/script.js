//Напишите функцию getMonth(n), которая принимает номер месяца и возвращает его название.
// Например, getMonth(12) ⇒ 'декабрь'. Используйте if/else.
//let months = [
// "Январь",
// "Февраль",
//  "Март",
//"Апрель",
// "Май",
// "Июнь",
//"Июль",
// "Август",
// "Сентябрь",
// "октябрь",
// "Ноябрь",
//"Декабрь",
//];
//let monthNumber = new Date();
//monthNumber.getMonth();
//document.write(months[monthNumber.getMonth()]);
///function getMonth() {
///return;
//}
//getMonth();
function getMonth() {
  let monthStr = prompt("Введите число от 1 до 12");
  let month = parseInt(monthStr, 15);
  if (month) {
    if (month == 1) {
      alert("Январь");
    } else if (month == 2) {
      alert("Февраль");
    } else if (month == 3) {
      alert("Март");
    } else if (month == 4) {
      alert("Апрель");
    } else if (month == 5) {
      alert("Май");
    } else if (month == 6) {
      alert("Июнь");
    } else if (month == 7) {
      alert("Июль");
    } else if (month == 8) {
      alert("Август");
    } else if (month == 9) {
      alert("Сентябрь");
    } else if (month == 10) {
      alert("Октябрь");
    } else if (month == 11) {
      alert("Ноябрь");
    } else if (month == 12) {
      alert("Декабрь");
    } else {
      alert("Декабрь");
    }
  } else {
    alert("Введите число от 0 до 12");
  }
}
getMonth();
