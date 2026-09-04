const momentos = [
    {
        icone: "💤​",
        titulo: "Dia inesquecivel KKKKKKK",
        mensagem: "nunca vou esquecer de quando voce estava dormindo e falando",
        foto: "fotos/dormir.JPEG"

    },

    {
        icone: "​✨​",
        titulo: "quando iamos no nosso lugarzinho de sempre ",
        mensagem: "aquele banco tem um lugar especial nas minhas memórias",
         foto:"fotos/lugar.JPEG"
    },

    {
        icone: "🤭​",
        titulo: "Nós na casa da lauana KKKKK",
        mensagem: "até em um momento caótico o lugar fica bom quando tem você",
         foto:"fotos/casa-lauana.JPEG"
    },

    {
        icone: "🎵",
        titulo: "Uma música que sempre me lembra você",
        mensagem: "essa música resume TANTO nós",
         foto:"fotos/HARIEL.jpg"
    },

    {
        icone: "💍​",
        titulo: "o dia do pedido que saiu perfeito!",
        mensagem: "Esse dias eu recebi a melhor surpresa que poderia receber, foi tão especial.",
         foto:"fotos/pedido.JPEG"
    }
];


function sortearMomento() {

    const numero = Math.floor(Math.random() * momentos.length);

    const momentoEscolhido = momentos[numero];

    document.getElementById("icone").textContent = momentoEscolhido.icone;

    document.getElementById("titulo").textContent = momentoEscolhido.titulo;

    document.getElementById("mensagem").textContent = momentoEscolhido.mensagem;
    const tela = document.querySelector(".tela");
    const foto = document.getElementById("foto");

foto.src = momentoEscolhido.foto;

foto.style.display = "block";

tela.classList.remove("animacao");

void tela.offsetWidth;

tela.classList.add("animacao");
}