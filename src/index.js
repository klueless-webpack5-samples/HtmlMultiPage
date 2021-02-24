// test nullish coalescing - return right side when left side null or undefined
const x = null ?? "default string";
console.assert(x === "default string");

const y = 0 ?? 42;
console.assert(y === 0);

// test optional chaining - return undefined on non existent property or method
const adventurer = {
  name: "Alice",
  cat: {
    name: "Dinah",
  },
};

const dogName = adventurer.dog?.name;
console.assert(dogName === undefined);

console.assert(adventurer.someNonExistentMethod?.() === undefined);

if (false)
{
  // use browser API fetch, to check linting
  fetch("https://jsonplaceholder.typicode.com/todos/1")
    .then((response) => response.json())
    .then((json) => console.log(json));
}
else
{
  console.log('do not run fetch API as it is not available from node')
}