const getMonth = require("./index");
describe("ввод номера месяца", () => {
  //первый тест
  it("вести 1 - январь", () => {
    const testing = getMonth(1);
    expect(testing).toEqual("январь");
  });
  //второй тест
  it("вести 12 - декабрь", () => {
    const testing = getMonth(12);
    expect(testing).toEqual("декабрь");
  });
  //третий тест
  it("0 - неверно", () => {
    const testing = getMonth(0);
    expect(testing).toEqual("Что-то не так");
  });
  //четвертый тест
  it("числа больше 12 - неверно", () => {
    const testing = getMonth(13);
    expect(testing).toEqual("Что-то не так");
  });
});
