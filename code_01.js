const rotate = (direction, turn) => {
  switch (direction) {
    case "N":
      if (turn === "R") { 
        return "E" 
      }
      return "W"
    case "S":
      if (turn === "R") { 
        return "W" 
      }
      return "E"
    case "E":
      if (turn === "R") { 
        return "S" 
      }
      return "N"
    case "W":
      if (turn === "R") { 
        return "N" 
      }
      return "S"
  }
}

const checkStep = (x, y, set) => {
  const coords = x + "," + y

  if (set.has(coords)) {
    console.log({x,y})
  }
  set.add(coords)
  return set
}

const fs = require("fs")
fs.readFile("./input_01", "utf8", (err, data) => {
  const moves = data.split(", ")

  const state = moves.reduce((mem, move) => {
    const turn = move[0]
    const steps = Number(move.substr(1))

    mem.direction = rotate(mem.direction, turn)

    switch(mem.direction) {
      case "N":
        for (let i = 1; i <= steps; i++) {
          mem.set = checkStep(mem.x, mem.y + i, mem.set)
        }
        mem.y += steps
        break
      case "S":
        for (let i = 1; i <= steps; i++) {
          mem.set = checkStep(mem.x, mem.y - i, mem.set)
        }
        mem.y -= steps
        break
      case "E":
        for (let i = 1; i <= steps; i++) {
          mem.set = checkStep(mem.x + i, mem.y, mem.set)
        }
        mem.x += steps
        break
      case "W":
        for (let i = 1; i <= steps; i++) {
          mem.set = checkStep(mem.x - i, mem.y, mem.set)
        }
        mem.x -= steps
        break
    }

    return mem
  }, { x: 0, y: 0, direction: "N", set: new Set() })

  console.log(Math.abs(state.x) + Math.abs(state.y))
})
