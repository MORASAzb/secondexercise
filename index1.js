const firstName = prompt("لطفا نام خود را وارد کنید:");
const lastName = prompt("لطفا نام خانوادگی خود را وارد کنید:");
const removeSpaces = firstName => firstName.replace(/\s/g, '');
const removeSpaces1 = lastName => lastName.replace(/\s/g, '');

const fullName = removeSpaces(firstName).length + removeSpaces1(lastName).length;
/*const fullNameLength = fullName.length;
console.log(`نام کامل شما: ${fullName}`);*/
console.log(`طول مجموع نام و نام خانوادگی: ${fullName }`);
