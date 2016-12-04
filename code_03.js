const fs = require("fs")
fs.readFile("./input_03", "utf8", (err, data) => {
  const lines = data.split("\n")
  
  /*
  const triangles = lines.map((line) => {
    return line.split(" ")
            .filter((place) => place !== "")
            .map((a) => Number(a))
            .sort((a,b) => b - a)
  })
  */

  const triangles = lines.reduce((mem, line, i) => {
    const numbers = line.split(" ")
            .filter((place) => place !== "")
            .map((a) => Number(a))

    if (i % 3 === 0) {
      mem.push([])
      mem.push([])
      mem.push([])
    }

    mem[(mem.length - 3)].push(numbers[0])
    mem[(mem.length - 2)].push(numbers[1])
    mem[(mem.length - 1)].push(numbers[2])

    return mem
  }, [])
    .map((triangle) => {
      return triangle.sort((a,b) => b - a)
    })


  const valid = triangles.reduce((mem, triangle) => {
    if (triangle[0] < (triangle[1] + triangle[2])) {
      return mem + 1
    }

    return mem
  }, 0)

  console.log(valid)
})