function canIterate(obj) {
  if (obj !== null && obj[Symbol.iterator]) {
      console.log('true')
      return true
  }
  console.log('false')
  return false
}

canIterate(new Map()); // true
canIterate(new Set()); // true
canIterate(null); // false
canIterate(10); // false
canIterate("Netology"); // true