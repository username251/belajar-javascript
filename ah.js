console.log("This is ah.js");
alert("Hello from ah.js!");

a = 10
b = "lol"
c = true

console.log(a, b, c);

const test = {
    name: "test object",
    value: 42,
    address: {
        street: "123 Main St",
        city: "Anytown"
    }
}

console.log(test.address.city);

const data =
[
    {id: 1, info: "first", value: 10},
    {id: 2, info: "second", value: 20},
    {id: 3, info: "third", value: 30}
]

function volume(r, h)
{
    return (r ** 2) * h;
}

console.log("Volume of cylinder:", volume(3, 5));

arrayMap = data.map(item => item.value * 2);
console.log("Mapped array:", arrayMap);

arrayMap2 = data.map(function(dataItem) {
    return dataItem.value / 2;
});

console.log("Mapped array 2:", arrayMap2);

number = [30, 10, 20, 50, 40];

// number.map(function(n) {
//     results = n + 5;
//     return results
// });

// console.log("Original number array:", number);

newNumber = number.map(n => n + 5);
console.log("New number array:", newNumber);

filteredNumbers = number.filter(n => n >= 25);
console.log("Filtered numbers (>=25):", filteredNumbers);

newData = data.filter(item => item.value);
newDataResult = newData.map(item => ({ ...item, value: item.value + 5 }));
console.log("New data with incremented values:", newDataResult);