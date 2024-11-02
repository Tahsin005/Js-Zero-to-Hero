const months = ['January', 'February', 'March', 'April', 'May', 'December']

const monthForEach = months.forEach((month, index, array) => {
    console.log(month, index + 1, array);
    return month;
})
console.log(monthForEach);

console.log('----------Map------------');

const monthToUpperCase = months.map((month, index, array) => {
    // console.log(month, index + 1);
    console.log(month, index + 1, array);
    // return index + 1;
    return month.toUpperCase();
}) // Non destructive method (keeps the original iterable unchanged)
console.log(months);
console.log(monthToUpperCase);

console.log('-----------Filter-----------');



const FiltermonthToUpperCase = months.filter((month, index, array) => {
    console.log(month, index + 1);
    // console.log(month, index + 1, array);
    // return index + 1;
    return !month.toLowerCase().includes("m");
}) // if true, than addes to the output array
console.log(months);
console.log(FiltermonthToUpperCase);

const students = [
    {
        name: 'Tahsin',
        age: 22,
    },
    {
        name: 'Aziz',
        age: 24,
    },
    {
        name: 'Abrar',
        age: 17,
    },
    {
        name: 'Tawsif',
        age: 18,
    },
    {
        name: 'Ferdous',
        age: 22,
    },
    {
        name: 'Rean',
        age: 12,
    },
    {
        name: 'Mahin',
        age: 25,
    },
]

const adultStudents = students.filter((student) => {
    return student.age >= 18;
});

console.log(adultStudents);

const adultStudentsName = students.filter((student) => {
    return student.age >= 18;
}).map((student) => {
    return student.name;
});

console.log(adultStudentsName);