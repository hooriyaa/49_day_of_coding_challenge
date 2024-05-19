//QUESTION 145:
function executeCallback(
  callback: (arg1: number, arg2: number) => void,
  arg1: number,
  arg2: number
): void {
  callback(arg1, arg2);
}

const add = (a: number, b: number) => {
  console.log(a + b);
};
executeCallback(add, 6, 9);

//QUESTION 146:
const numbers: number[] = [2, 4, 1, 8, 9, 4, 8, 10];
const filterNumbers = numbers.filter((values) => {
  return values >= 7;
});
console.log(filterNumbers);

//QUESTION 148:

function fetchData(
  callback: (error: Error | null, data?: string) => void
): void {
  const error = new Error("Failed to fetch data");
  const data = "Some data";

  if (Math.random() > 0.5) {
    callback(null, data);
  } else {
    callback(error);
  }
}

fetchData((error, data) => {
  if (error) {
    console.error(error.message);
  } else {
    console.log(data);
  }
});
