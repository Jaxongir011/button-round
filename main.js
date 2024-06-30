let round = document.querySelector(".round");

// Saqlangan qiymatni localStorage'dan oling
let hisoblash = localStorage.getItem("hisoblash") ? parseInt(localStorage.getItem("hisoblash")) : 0;

// Elementning dastlabki qiymatini o'rnating
round.innerHTML = hisoblash;

round.addEventListener("click", (e) => {
    if (e.detail === 1) {
        hisoblash++;
        if (hisoblash > 0 && hisoblash < 1000000000) {
            round.innerHTML = hisoblash;
        } else {
            hisoblash = 0; // hisoblash to'g'irlandi
            round.innerHTML = hisoblash;
        }

        // Qiymatni localStorage'ga saqlang
        localStorage.setItem("hisoblash", hisoblash);
    }
});
