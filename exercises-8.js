function cariPelaku(str) {

  var regex = str.match(/abc/g)
  var jumlah = regex.length

  return jumlah
}
// TEST CASES
 console.log(cariPelaku('mabcvabc')); // 2
 console.log(cariPelaku('abcdabdc')); // 1
 console.log(cariPelaku('bcabcac')); // 1
 console.log(cariPelaku('abcabcabc')); // 3
 console.log(cariPelaku('babcbacabc')); // 2
