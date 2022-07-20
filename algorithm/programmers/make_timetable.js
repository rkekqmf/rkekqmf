const a_time = [
  "10:00~14:00",
  "15:00~18:00",
  "11:00~13:00;14:00~16:00",
  "10:00~11:00",
  "15:00~18:00",
];
const b_time = [
  "11:00~14:00",
  "14:00~16:00",
  "16:00~18:00",
  "10:00~11:00;12:00~13:00",
  "14:00~16:00",
];
const c_time = ["14:00~16:00", "16:00~18:00", "10:00~12:00", "12:00~14:00", "14:00~16:00"];
const d_time = [
  "14:00~18:00",
  "10:00~18:00",
  "12:00~14:00",
  "14:00~15:00;16:00~17:00",
  "10:00~12:00",
];

function make_timetable(a, b, c, d) {
  let result = [];
  for (let i = 0; i < 5; i++) {
    result.push({ a: "", b: "", c: "", d: "" });
  }
  console.log(result);
  a = a.map((v) => v.replaceAll(":00", ""));
  b = b.map((v) => v.replaceAll(":00", ""));
  c = c.map((v) => v.replaceAll(":00", ""));
  d = d.map((v) => v.replaceAll(":00", ""));

  return result;
}

make_timetable(a_time, b_time, c_time, d_time);
