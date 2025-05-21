
function moveCommand(direction) {
    var scenario;
  
    switch (direction) {
      case "forward":
        scenario = "You encountered a Dragon";
        break;
  
      case "back":
        scenario = "You went back";
        break;
  
      case "left":
        scenario = "you found a submarine to escape";
        break;
  
      case "right":
        scenario = "enter portal";
        break;
      default:
        scenario = "invalid direction. choose forward, back, left or right";
    }
    return scenario;
  }