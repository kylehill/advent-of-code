// const translateButton = (button, direction) => {
//   switch (button) {
//     case "1":
//       switch (direction) {
//         case "U": return "1"
//         case "L": return "1"
//         case "D": return "4"
//         case "R": return "2"
//       }
//     case "2":
//       switch (direction) {
//         case "U": return "2"
//         case "L": return "1"
//         case "D": return "5"
//         case "R": return "3"
//       }
//     case "3":
//       switch (direction) {
//         case "U": return "3"
//         case "L": return "2"
//         case "D": return "6"
//         case "R": return "3"
//       }

//     case "4":
//       switch (direction) {
//         case "U": return "1"
//         case "L": return "4"
//         case "D": return "7"
//         case "R": return "5"
//       }

//     case "5":
//       switch (direction) {
//         case "U": return "2"
//         case "L": return "4"
//         case "D": return "8"
//         case "R": return "6"
//       }

//     case "6":
//       switch (direction) {
//         case "U": return "3"
//         case "L": return "5"
//         case "D": return "9"
//         case "R": return "6"
//       }

//     case "7":
//       switch (direction) {
//         case "U": return "4"
//         case "L": return "7"
//         case "D": return "7"
//         case "R": return "8"
//       }

//     case "8":
//       switch (direction) {
//         case "U": return "5"
//         case "L": return "7"
//         case "D": return "8"
//         case "R": return "9"
//       }

//     case "9":
//       switch (direction) {
//         case "U": return "6"
//         case "L": return "8"
//         case "D": return "9"
//         case "R": return "9"
//       }

//   }
// }

const translateButton = (button, direction) => {
  switch (button) {
    case "1":
      switch (direction) {
        case "U": return "1"
        case "L": return "1"
        case "D": return "3"
        case "R": return "1"
      }
    case "2":
      switch (direction) {
        case "U": return "2"
        case "L": return "2"
        case "D": return "6"
        case "R": return "3"
      }
    case "3":
      switch (direction) {
        case "U": return "1"
        case "L": return "2"
        case "D": return "7"
        case "R": return "4"
      }

    case "4":
      switch (direction) {
        case "U": return "4"
        case "L": return "3"
        case "D": return "8"
        case "R": return "4"
      }

    case "5":
      switch (direction) {
        case "U": return "5"
        case "L": return "5"
        case "D": return "5"
        case "R": return "6"
      }

    case "6":
      switch (direction) {
        case "U": return "2"
        case "L": return "5"
        case "D": return "A"
        case "R": return "7"
      }

    case "7":
      switch (direction) {
        case "U": return "3"
        case "L": return "6"
        case "D": return "B"
        case "R": return "8"
      }

    case "8":
      switch (direction) {
        case "U": return "4"
        case "L": return "7"
        case "D": return "C"
        case "R": return "9"
      }

    case "9":
      switch (direction) {
        case "U": return "9"
        case "L": return "8"
        case "D": return "9"
        case "R": return "9"
      }

    case "A":
      switch (direction) {
        case "U": return "6"
        case "L": return "A"
        case "D": return "A"
        case "R": return "B"
      }

    case "B":
      switch (direction) {
        case "U": return "7"
        case "L": return "A"
        case "D": return "D"
        case "R": return "C"
      }

    case "C":
      switch (direction) {
        case "U": return "8"
        case "L": return "B"
        case "D": return "C"
        case "R": return "C"
      }

    case "D":
      switch (direction) {
        case "U": return "B"
        case "L": return "D"
        case "D": return "D"
        case "R": return "D"
      }

  }
}

const fs = require("fs")
fs.readFile("./input_02", "utf8", (err, data) => {
  let button = "5"
  const lines = data.split("\n")
  const code = lines.map((line) => {
    line.split('').forEach((step) => {
      button = translateButton(button, step)
    })
    return button
  })

  console.log(code)
})