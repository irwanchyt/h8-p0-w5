function naikAngkot(arrPenumpang) {
  rute = ['A', 'B', 'C', 'D', 'E', 'F']

  var tampung = []
  var tarif   = 2000

  for(var i = 0 ; i < arrPenumpang.length ; i++){
  var hasil   = {}
  //  hasil.penumpang = arr[i][0]
  //  hasil.naikDari  = arr[i][1]
  //  hasil.tujuan    = arr[i][2]


        for(var j = 0 ; j < rute.length ; j++){
              //console.log(rute[j] +' = '+ j)
            if(arrPenumpang[i][1] === rute[j] ){

              var x = j

            }else if(arrPenumpang[i][2] === rute[j]) {

              var y = j
              //console.log(j)

            }


        }
          hasil.penumpang = arrPenumpang[i][0]
          hasil.naikDari  = arrPenumpang[i][1]
          hasil.tujuan    = arrPenumpang[i][2]
          var jumlah = y - x
          jumlah = Math.abs(jumlah)

          hasil.bayar     = tarif * jumlah


          tampung.push(hasil)


  }

  return tampung
}


console.log(naikAngkot([['Dimitri', 'B', 'F'], ['Icha', 'A', 'B']]));
// [ { penumpang: 'Dimitri', naikDari: 'B', tujuan: 'F', bayar: 8000 },
//   { penumpang: 'Icha', naikDari: 'A', tujuan: 'B', bayar: 2000 } ]

console.log(naikAngkot([])); //[]
