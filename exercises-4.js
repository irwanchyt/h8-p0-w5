function graduates (students) {
  var result = {}
  if (students.length !== 0){
    for (var i = 0; i < students.length; i++){
      if (students[i].score > 75){
        var b = students[i].class
        var temp = {}
        if (result[b] === undefined){
          result[b] = []
          temp.name = students[i].name
          temp.score = students[i].score
        } else {
          temp.name = students[i].name
          temp.score = students[i].score
        }
        result[b].push(temp)
      }
    }
  }
  return result
}
console.log(graduates([
  {
    name: 'Dimitri',
    score: 90,
    class: 'foxes'
  },
  {
    name: 'Alexei',
    score: 85,
    class: 'wolves'
  },
  {
    name: 'Sergei',
    score: 74,
    class: 'foxes'
  },
  {
    name: 'Anastasia',
    score: 78,
    class: 'wolves'
  }
]));
