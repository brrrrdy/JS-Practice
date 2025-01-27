function camelize (str) {
    /* const str = "list-style-image"; */
    return str.split('-').map((word, index) => index === 0 ? word : word.charAt(0).toUpperCase() + word.slice(1)).join('');
}

const str = "list-style-image";
console.log(camelize(str));

/* 

1. split string into an array
2. transform the array
3. join the array back

*/