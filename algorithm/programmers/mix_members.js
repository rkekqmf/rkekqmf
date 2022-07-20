const members = [
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "10",
  "11",
  "12",
  "13",
  "14",
  "15",
  "16",
  "17",
  "18",
  "19",
  "20",
  "21",
];

function mix_members(members) {
  const result = {};
  let a = members.length;
  let team = { "7명": 0, "6명": 0, "5명": 0 };

  if (a % 7 === 0) team["7명"] = a / 7;
  else if (a % 6 === 0) team["6명"] = a / 6;
  else if (a % 5 === 0) team["5명"] = a / 5;
  else if (a % 7 === 5 || a % 7 === 6) team["7명"] = Math.ceil(a / 7);
  else if (a % 6 === 1 || a % 6 === 5) team["6명"] = Math.ceil(a / 6);
  else if (a % 5 === 1 || a % 5 === 2) team["5명"] = Math.ceil(a / 5);

  for (let i = 1; i <= team["7명"] + team["6명"] + team["5명"]; i++) {
    result[i + "조"] = [];

    for (let j = 0; j < members.length; j++) {
      const member = members[Math.floor(Math.random() * members.length)];
      members = members.filter((el) => el !== member);
      j--;
      result[i + "조"].push(member);

      if (team["7명"] > 0 && result[i + "조"].length === 7) break;
      else if (team["6명"] > 0 && result[i + "조"].length === 6) break;
      else if (team["5명"] > 0 && result[i + "조"].length === 5) break;
    }
  }
  return result;
}

mix_members(members);
