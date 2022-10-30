function warnTheSheep(queue) {
    let wolfLocation = (x) => x == "wolf"
    let wolfIndex = queue.findIndex(wolfLocation)
    let numberOfSheep = queue.length-1 - wolfIndex
    
    if (queue[queue.length-1] == "sheep"){
      return `Oi! Sheep number ${numberOfSheep}! You are about to be eaten by a wolf!`
    } else {
      return "Pls go away and stop eating my sheep"
    }
  }