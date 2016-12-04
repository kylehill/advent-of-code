const shiftCypher = (string, count) => {
  count = (count % 26)
  return string.split("").map((letter) => {
    if (letter === "-") {
      return " "
    }

    let charCode = letter.charCodeAt(0) + count
    if (charCode > 122) {
      charCode -= 26
    }

    return String.fromCharCode(charCode)
  }).join("")
}

const fs = require("fs")
fs.readFile("./input_04", "utf8", (err, data) => {
  const lines = data.split("\n")
  const rooms = lines.map((line) => {
    const sections = line.split("-")
    const letters = sections.splice(0, sections.length - 1).join("-")
    const sector = Number(sections[0].split("[")[0])
    const checksum = sections[0].split("[")[1].split("]")[0]

    return { letters, sector, checksum }
  })

  const validRooms = rooms.filter((room) => {
    const letterCount = room.letters.split("").reduce((mem, letter) => {
      if (letter === "-") {
        return mem
      }

      mem[letter] = mem[letter] || 0
      mem[letter]++
      return mem
    }, {})

    const letterArray = Object.keys(letterCount).map((letter) => {
      return { letter, count: letterCount[letter] }
    })

    const lettersInOrder = letterArray.sort((a, b) => {
      if (a.count !== b.count) {
        return b.count - a.count
      }

      if (a.letter > b.letter) { 
        return 1 
      }
      return -1
    })

    const checksum = lettersInOrder.slice(0,5).map((a) => a.letter).join("")
    return checksum === room.checksum
  })

  // const sectors = validRooms.reduce((mem, room) => {
  //   return mem + room.sector
  // }, 0)

  // console.log(sectors)

  const sectorNames = validRooms.map((room) => {
    return {
      name: shiftCypher(room.letters, room.sector),
      sector: room.sector
    }
  })


  process.stdout.write(JSON.stringify(sectorNames))
  
})