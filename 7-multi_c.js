const arg = process.argv[2];
const num = parseInt(arg);

if (isNaN(num)) {
  console.log("Missing number of occurrences");
} else {
  let i = 0;
  while (i < num && num > 0) {
    console.log("C is fun");
    i++;
  }
}
