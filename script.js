const welcome = document.getElementById("welcome");
const giftPage = document.getElementById("giftPage");
const cakePage = document.getElementById("cakePage");
const wishPage = document.getElementById("wishPage");
const letterPage = document.getElementById("letterPage");

const giftBtn = document.getElementById("giftBtn");
const blowBtn = document.getElementById("blowBtn");
const wishBtn = document.getElementById("wishBtn");

const typing = document.getElementById("typing");
const flame = document.getElementById("flame");

const musicBtn = document.getElementById("musicBtn");
const bgMusic = document.getElementById("bgMusic");

// Tombol buka hadiah
giftBtn.onclick = () => {

    welcome.classList.add("hidden");
    giftPage.classList.remove("hidden");

    if (bgMusic) {
        bgMusic.play().catch(() => {});
    }

    setTimeout(() => {
        giftPage.classList.add("hidden");
        cakePage.classList.remove("hidden");
    }, 2500);
};

// Tiup lilin
blowBtn.onclick = () => {

    flame.style.opacity = "0";

    setTimeout(() => {
        cakePage.classList.add("hidden");
        wishPage.classList.remove("hidden");
    }, 1500);

};

// Wish Done
wishBtn.onclick = () => {

    wishPage.classList.add("hidden");
    letterPage.classList.remove("hidden");

    i = 0;
    typeMessage();

};

// Tombol musik
musicBtn.onclick = () => {

    if (bgMusic.paused) {
        bgMusic.play();
        musicBtn.innerHTML = "🎵 Putar Musik";
    } else {
        bgMusic.pause();
        musicBtn.innerHTML = "⏸️ Pause Musik";
    }

};

const message = `Hallooo sayangkuuu, Happy Birthday yaa! 🥳🎂💛

Semoga di umur yang baru ini kamu selalu sehattt, bahagiaaa, dan semua impianmu tercapai.
Teruslah jdi orang baikkk dan jadii diri sendiriii. Semoga makin ganteng (walaupun udah gantengnya kebangetan 🤭), makin sukses, dan makin sayang sama aku yaa. 
Jangan nakal, jangan sering begadang, pokoknya jaga kesehatan, jangan telat makan, dan tetap semangat menjalani hari-harimu.
dannn yg terakhir smoga tahun ini penuh dengan kebahagiaan, rezeki yang lancar, dan banyak momen indah. Aamiin.

Peluk, cium, dan sayang yang banyak buat kamu! love u Muahhh! 😚💗`;

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
