
let draw = document.querySelector(".draw");
let btn_Start = document.querySelector(".action");
let diem = document.querySelector(".point");
let timerDisplay = document.querySelector('.timer');
let listnum = document.querySelectorAll(".number");
let diemDisplay = document.querySelector(".diem");
let contentDisplay = document.querySelector(".content");
let point;
let soCanTim;
let timer;

btn_Start.addEventListener("click", batdau);

function batdau() {
    listnum = document.querySelectorAll(".number");
    draw = document.querySelector(".draw");
    diemDisplay = document.querySelector(".diem");
    contentDisplay = document.querySelector(".content");

    // Reset
    timer = 60;
    soCanTim = 1;
    point = 0;
    diem.textContent = point;

    
    draw.innerHTML = "";

    
    for (let i = 100; i > 0 ; i--) {
        draw.innerHTML += '<div class="number">'+ i +'</div>';
    }
  
    
    listnum = document.querySelectorAll(".number");

  
    for (let i = 0; i < listnum.length; i++) {
        const element = listnum[i];
        element.style.top = randomSo(0, 740) + "px";
        element.style.left = randomSo(0, 1140) + "px";
    }
   
    for (let i = 0; i < listnum.length; i++) {
        const element = listnum[i];
        element.addEventListener("click", () => {
            if(element.innerHTML == soCanTim){
                point += 1;
                soCanTim++;
                diem.innerHTML = point;
                element.style.borderColor = "red";
                element.classList.add("clicked");
                element.style.zIndex = 1;
            }
        })
    }
    //hàm tính thời gian đếm ngược
    var countdown = setInterval(function () {
        timer--;
        timerDisplay.innerText = timer + "s";

        if (timer === 0) {
            clearInterval(countdown);
            draw.innerHTML = "";
            alert("Hết Giờ !!!");
            timerDisplay.innerText = 60 + "s";
            diemDisplay.style.display = "none";
            draw.innerHTML += '<div class="content"></div>';
            contentDisplay = document.querySelector(".content");
            contentDisplay.innerHTML += '<div class="score">Điểm của bạn: ' + point + '</div>';
            contentDisplay.innerHTML += '<div class="name">TRÒ CHƠI TÌM SỐ</div>';
            contentDisplay.innerHTML += '<button class="action">Start</button>';
            btn_Start = document.querySelector(".action");
            btn_Start.addEventListener("click", batdau);
        }
    }, 1000);
}

//hàm random 
function randomSo(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}