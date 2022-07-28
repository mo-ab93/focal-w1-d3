const raisinAlarm = function(cookie) {
  // Put your solution here
  let alert = "All good!";
  for (let i = 0; i < cookie.length; i++) {
    if (cookie[i] === "🍇") {
      alert = "Raisin alert!";
    }
  }
  return alert;
};
console.log(raisinAlarm(["🍫", "🍫", "🍇", "🍫"]));
console.log(raisinAlarm(["🍫", "🍇", "🍫", "🍫", "🍇"]));
console.log(raisinAlarm(["🍫", "🍫", "🍫"]));


const raisinAlarmArray = function(cookies) {
  // Put your solution here
  let alert = [];
  for (let i = 0; i < cookies.length; i++) {
    if (cookies[i].includes("🍇")) {
      alert.push("Raisin alert!");
    } else {
      alert.push("All good!");
    }
  }
  return alert;
};

console.log(
  raisinAlarmArray([
    ["🍫", "🍫", "🍇", "🍫"],
    ["🍫", "🍇", "🍫", "🍫", "🍇"],
    ["🍫", "🍫", "🍫"],
  ])
);
