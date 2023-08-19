const firstName = prompt("لطفا نام خود را وارد کنید:");
const lastName = prompt("لطفا نام خانوادگی خود را وارد کنید:");

const fullName = firstName + lastName;
const fullNameLength = fullName.length;

console.log(`نام کامل شما: ${fullName}`);
console.log(`طول مجموع نام و نام خانوادگی: ${fullNameLength}`);
