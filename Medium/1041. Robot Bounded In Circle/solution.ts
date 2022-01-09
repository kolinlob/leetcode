function isRobotBounded(instructions: string): boolean {
  let map = instructions.split("").reduce((m, c) => {
    m[c] = 1 + (m[c] || 0);
    return m;
  }, {});

  if (map["G"] == undefined) return true;
  if (map["G"] == instructions.length) return false;

  let position = instructions
    .split("")
    .reduce((p: Position, i: string) => move(p, i), { x: 0, y: 0, d: "N" });

  if (position.d == "N") return position.x == 0 && position.y == 0;

  return true;
}

function move(pos: Position, inst: string): Position {
  const dir = pos.d;
  if (inst == "G") {
    let [moveX, moveY] = directions[dir];
    return { ...pos, x: pos.x + moveX, y: pos.y + moveY };
  }

  return { ...pos, d: turn(dir, inst) };

  function turn(direction: Direction, turn: string): Direction {
    switch (direction) {
      case "N":
        return turn == "L" ? "W" : "E";
      case "W":
        return turn == "L" ? "S" : "N";
      case "S":
        return turn == "L" ? "E" : "W";
      case "E":
        return turn == "L" ? "N" : "S";
      default:
        direction;
    }
  }
}

const directions = {
  N: [0, 1],
  W: [-1, 0],
  S: [0, -1],
  E: [1, 0],
};

type Direction = "N" | "W" | "S" | "E";
type Position = { x: number; y: number; d: Direction };
