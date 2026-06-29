const welcome = document.getElementById("welcome");
const giftPage = document.getElementById("giftPage");
const cakePage = document.getElementById("cakePage");
const wishPage = document.getElementById("wishPage");
const letterPage = document.getElementById("letterPage");

const giftBtn = document.getElementById("giftBtn");
const blowBtn = document.getElementById("blowBtn");
const typing = document.getElementById("typing");

const musicBtn = document.getElementById("musicBtn");
const bgMusic = document.getElementById("bgMusic");
musicBtn.onclick = () => {
    bgMusic.play();
};

giftBtn.onclick = () => {
    welcome.classList.add("hidden");
    giftPage.classList.remove("hidden");

    setTimeout(() => {
        giftPage.classList.add("hidden");
        cakePage.classList.remove("hidden");
    }, 2500);
};

const wishBtn = document.getElementById("wishBtn");

blowBtn.onclick = () => {

    flame.style.opacity = "0";

    setTimeout(() => {

        cakePage.classList.add("hidden");
        wishPage.classList.remove("hidden");

    },1500);

}

wishBtn.onclick = () => {

    wishPage.classList.add("hidden");
    letterPage.classList.remove("hidden");

    typeMessage();

}

const message =
`Haiii, Happy Birthday yaa! 🥳🎂💛

Semoga di umur yang baru ini kamu selalu sehat, bahagia, dan semua impianmu tercapai.

Terima kasih sudah menjadi orang yang baik. Jangan lupa selalu jaga kesehatan, jangan telat makan, dan tetap semangat menjalani hari-harimu.

Semoga tahun ini penuh dengan kebahagiaan, rezeki yang lancar, dan banyak momen indah.

Selamat ulang tahun! 🎉🤍`;

let i = 0;

function typeMessage() {
    typing.innerHTML = "";

    const interval = setInterval(() => {
        typing.innerHTML += message.charAt(i);
        i++;

        if (i >= message.length) {
            clearInterval(interval);
        }
    }, 40);
}
const musicBtn = document.getElementById("musicBtn");
const bgMusic = document.getElementById("bgMusic");
