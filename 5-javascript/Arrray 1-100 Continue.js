function range(start, end) {
  return Array(end - start + 1).fill().map((_, idx) => start + idx)
}
//Array with range of 1 - 100
var numbers = range(1, 100);
