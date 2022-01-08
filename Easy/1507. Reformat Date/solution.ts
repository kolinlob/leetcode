function reformatDate(date: string): string {
  let [d, m, y] = date.split(" ");

  return [
    y,
    month[m].padStart(2, "0"),
    d.replace(/\D/g, "").padStart(2, "0"),
  ].join("-");
}

const month = {
  Jan: "1",
  Feb: "2",
  Mar: "3",
  Apr: "4",
  May: "5",
  Jun: "6",
  Jul: "7",
  Aug: "8",
  Sep: "9",
  Oct: "10",
  Nov: "11",
  Dec: "12",
};
