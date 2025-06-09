let canvas = document.getElementById('planner-canvas');
let ctx = canvas.getContext('2d');

// Exemplo de página (será substituído por lógica de múltiplas páginas depois)
ctx.fillStyle = "#eee";
ctx.fillRect(0, 0, canvas.width, canvas.height);

// Botões - apenas mensagens por enquanto
function addText() {
  alert("Função de adicionar texto ainda será implementada!");
}

function addChecklist() {
  alert("Função de checklist ainda será implementada!");
}

function addNote() {
  alert("Função de anotação ainda será implementada!");
}

function addLine() {
  alert("Função de linha ainda será implementada!");
}

function clearCanvas() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
}

function deleteSelected() {
  alert("Função de deletar ainda será implementada!");
}

function exportPDF() {
  alert("Exportar PDF será implementado com jsPDF!");
}

function addNewPage() {
  alert("Sistema de múltiplas páginas será implementado!");
}

function prevPage() {
  alert("Página anterior ainda será implementada!");
}

function nextPage() {
  alert("Próxima página ainda será implementada!");
}
