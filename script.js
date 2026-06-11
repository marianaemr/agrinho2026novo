function mostrarMensagem(){
    alert(
        "🌱 O futuro depende do equilíbrio entre produção e meio ambiente!"
    );
}

function respostaCerta(){
    document.getElementById("resultado")
    .innerHTML =
    "✅ Correto! O agro sustentável protege a natureza.";
}

function respostaErrada(){
    document.getElementById("resultado")
    .innerHTML =
    "❌ Errado! Sustentabilidade ajuda o planeta.";
}