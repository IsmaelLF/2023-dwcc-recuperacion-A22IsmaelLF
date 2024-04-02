// Crea unha función denominad reverseString que reciba unha cadea como parámetro e devolva a cadea cos caracteres invertidos.
// Así, se recibe "hello", debe devolver "olleh".
// A funcionalidade debe estar implementada manualmente.

function reverseString(str) {
  let arr = Array.from(str);
  let reversed = arr.reverse();
  let reversedStr = reversed.join("");
  console.log(reversedStr);
}

reverseString("hello");
