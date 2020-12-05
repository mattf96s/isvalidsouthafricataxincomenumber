const LuhnAlgorithm = (inputNumber: string) => {
  inputNumber = inputNumber.trim();
  const arr = [0, 2, 4, 6, 8, 1, 3, 5, 7, 9];
  let len = inputNumber.length;
  let bit = 1;
  let sum = 0;
  let val;
  while (len) {
    val = parseInt(inputNumber.charAt(--len), 10);
    bit = bit ^ 1;
    sum += bit === 1 ? arr[val] : val;
  }
  return sum && sum % 10 === 0;
};
export default LuhnAlgorithm;
