let adiciona1 = document.getElementById("icon-adiciona1");
let adiciona2 = document.getElementById("icon-adiciona2");
let adiciona3 = document.getElementById("icon-adiciona3");
let adiciona4 = document.getElementById("icon-adiciona4");

let textP1 = document.getElementById("P1");
let textP2 = document.getElementById("P2");
let textP3 = document.getElementById("P3");
let textP4 = document.getElementById("P4");


function mostra1() {

    console.log(adiciona1.src)

    if(adiciona1.src != ('http://127.0.0.1:5500/assets/images/icon-minus.svg')){

        adiciona1.src = 'assets/images/icon-minus.svg';
        textP1.textContent = "Frontend Mentor offers realistic coding challenges to help developers improve their frontend coding skills with projects in HTML, CSS, and JavaScript. It's suitable for all levels and ideal for portfolio building.";
    }else{

        adiciona1.src = 'assets/images/icon-plus.svg';
        textP1.textContent = "";

    }
}

function mostra2() {

   

    if(adiciona2.src != ('http://127.0.0.1:5500/assets/images/icon-minus.svg')){

        adiciona2.src = 'assets/images/icon-minus.svg';
        textP2.textContent = " Yes, Frontend Mentor offers both free and premium coding challenges, with the free option providing access to a range of projects suitable for all skill levels.";
    }else{

        adiciona2.src = 'assets/images/icon-plus.svg';
        textP2.textContent = "";

    }
}

function mostra3() {

   

    if(adiciona3.src != ('http://127.0.0.1:5500/assets/images/icon-minus.svg')){

        adiciona3.src = 'assets/images/icon-minus.svg';
        textP3.textContent = "  Yes, you can use projects completed on Frontend Mentor in your portfolio. It's an excellent way to showcase your skills to potential employers!";
    }else{

        adiciona3.src = 'assets/images/icon-plus.svg';
        textP3.textContent = "";

    }
}

function mostra4() {

   

    if(adiciona4.src != ('http://127.0.0.1:5500/assets/images/icon-minus.svg')){

        adiciona4.src = 'assets/images/icon-minus.svg';
        textP4.textContent = " The best place to get help is inside Frontend Mentor's Discord community. There's a help channel where you can ask questions and seek support from other community members.";
    }else{

        adiciona4.src = 'assets/images/icon-plus.svg';
        textP4.textContent = "";

    }
}
