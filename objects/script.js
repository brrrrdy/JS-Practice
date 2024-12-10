let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130
};

function sumSalaries(salaries) {
    let sum = 0;
    for (let salary in salaries) {
        sum += salaries[salary];
    }
    return sum;
}

console.log(sumSalaries(salaries)); // 390