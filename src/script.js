// form
document.getElementById("formContato").addEventListener("submit", function(e) {
    e.preventDefault();

    let nome = document.getElementById("nome").value;
    let email = document.getElementById("email").value;
    let mensagem = document.getElementById("mensagem").value;

    if(nome === "" || email === "" || mensagem === "") {
        alert("Preencha todos os campos.");
        return;
    }

    if(!email.includes("@") || !email.includes(".")) {
        alert("Email inválido.");
        return;
    }

    emailjs.send("service_sasa","template_2rfrgfg", {
        nome: nome,
        email: email,
        mensagem: mensagem
    })
    .then(function() {
        alert("Mensagem enviada com sucesso!");
        document.getElementById("formContato").reset();
    }, function(error) {
        alert("Erro ao enviar: " + JSON.stringify(error));
    });
});


// botao de mudar de tema
const temaBtn = document.getElementById("temaBtn");


if (document.body.classList.contains("dark")) {
    temaBtn.textContent = "🌙";
} else {
    temaBtn.textContent = "☀️";
}

temaBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark");

    if (document.body.classList.contains("dark")) {
        temaBtn.textContent = "🌙";
    } else {
        temaBtn.textContent = "☀️";
    }
});


// anims
const sections = document.querySelectorAll("section");

function mostrarSecoes() {
    sections.forEach(sec => {
        const top = sec.getBoundingClientRect().top;

        if (top < window.innerHeight - 100) {
            sec.classList.add("show");
        }
    });
}

window.addEventListener("scroll", mostrarSecoes);
mostrarSecoes();


// anim barras
const bars = document.querySelectorAll(".progress");

function animarBarras() {
    bars.forEach(bar => {
        const top = bar.getBoundingClientRect().top;

        if (top < window.innerHeight - 50) {
            bar.style.width = bar.getAttribute("data-width");
        }
    });
}

window.addEventListener("scroll", animarBarras);
animarBarras();


// modais
function openModal(id) {
    document.getElementById(id).style.display = "flex";
    document.body.style.overflow = "hidden"; // trava fundo
}

function closeModal(id) {
    document.getElementById(id).style.display = "none";
    document.body.style.overflow = "auto"; // libera fundo
}

// menu retratil

const menu = document.getElementById("menuRetratil");
const toggle = document.getElementById("toggleMenu");

toggle.addEventListener("click", () => {
    menu.classList.toggle("open");

    const aberto = menu.classList.contains("open");

    toggle.textContent = aberto ? "▼ Fechar" : "▲ Abrir";

    document.body.classList.toggle("menu-aberto", aberto);


    if (aberto) {
        const altura = menu.offsetHeight;
        document.getElementById("temaBtn").style.bottom = (altura + 20) + "px";
    } else {
        document.getElementById("temaBtn").style.bottom = "20px";
    }
});

