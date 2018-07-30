function hapusSimbol(str) {
  // you can only write your code here!
  var regex = str.match(/[/\d[a-z]+/g)
      regex = regex.join('')


  return regex
}

console.log(hapusSimbol('devel0p3r s3j@@ati')); // devel0p3rs3jati
console.log(hapusSimbol('ma@#k!an~')); // makan
console.log(hapusSimbol('coding')); // coding
console.log(hapusSimbol('1+3-5*2=100')); // 1352100
