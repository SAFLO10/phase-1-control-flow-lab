function scuberGreetingForFeet(someValue) {
  if (someValue <= 400) {
    return "This one is on me!";
  } else if (someValue > 2500) {
    return "No can do.";
  } else if (someValue > 2000) {
    return "I will gladly take your thirty bucks.";
  } else if (someValue > 400) {
    return "That will be twenty bucks.";
  }
}

function ternaryCheckCity(someValue) {
  if (someValue === "NYC") {
    return "Ok, sounds good.";
  } else {
    return "No go.";
  }
}

function switchOnCharmFromTip(tip) {
  switch (tip) {
    case "generous":
      return "Thank you so much.";
    case "not as generous":
      return "Thank you.";
    default:
      return "Bye.";
  }
}