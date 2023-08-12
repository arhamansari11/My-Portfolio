// console.log("This js is working");

const text = document.querySelector(".sec-text");
const textload = () => {
    setTimeout(() => {
        text.textContent = "Full-Stack-Engineer";
    }, 0);
    setTimeout(() => {
        text.textContent = "Web Designer";
    }, 4000);
    setTimeout(() => {
        text.textContent = "Programmer";
    }, 8000);
    setTimeout(() => {
        text.textContent = "Freelancer";
    }, 12000);

}
textload();
setInterval(textload,16000);


