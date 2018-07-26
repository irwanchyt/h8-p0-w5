function deepSum (arr) {
  // Code disini

  var hasil = []
  for ( var i = 0 ; i < arr.length; i++){

    for(var j = 0 ; j < arr[i].length; j++ ){

          var tamp = 0
      for(var k = 0 ; k < arr[i][j].length; k++){
          //console.log(arr[i][j][k])

          tamp += arr[i][j][k]
        //hasil.push(tamp)
      }

      hasil.push(tamp)
    }

  }

      var akhir = 0
      for(var x = 0 ; x < hasil.length ; x++ ){
        //console.log(hasil[x])
        akhir += hasil[x]
      }
        if (akhir === 0){
          return'No number'
        }else{
          return akhir
        }

}
console.log(deepSum([
  [
    [4, 5, 6],
    [9, 1, 2, 10],
    [9, 4, 3]
  ],
  [
    [4, 14, 31],
    [9, 10, 18, 12, 20],
    [1, 4, 90]
  ],
  [
    [2, 5, 10],
    [3, 4, 5],
    [2, 4, 5, 10]
  ]
])); // 316

console.log(deepSum([
  [
    [20, 10],
    [15],
    [1, 1]
  ],
  [
    [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
    [2],
    [9, 11]
  ],
  [
    [3, 5, 1],
    [1, 5, 3],
    [1]
  ],
  [
    [2]
  ]
])); // 156

console.log(deepSum([])); // No number
