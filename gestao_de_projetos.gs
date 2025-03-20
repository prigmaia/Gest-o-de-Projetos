function onEditProjeto(e) {
  if (!e) return;

  const sheet = e.source.getActiveSheet();
  const range = e.range;
  const editedColumn = range.getColumn();
  const editedRow = range.getRow();

  // Definição das colunas
  const colStatus = 3;
  const colResponsavel = 4;
  const colDataAlteracao = 5;
  const colComentario = 6;

  Logger.log(`Coluna editada: ${editedColumn}, Linha editada: ${editedRow}`);

  // Atualiza responsável e data ao modificar o status
  if (editedColumn === colStatus) {
    Logger.log("Editando coluna de Status...");
    const responsavelAtual = sheet.getRange(editedRow, colResponsavel).getValue();
    if (!responsavelAtual) {
      const userEmail = Session.getActiveUser().getEmail();
      sheet.getRange(editedRow, colResponsavel).setValue(userEmail);
    }
    sheet.getRange(editedRow, colDataAlteracao).setValue(new Date());
  }

  // Enviar e-mail ao preencher comentário
  if (editedColumn === colComentario) {
    Logger.log("Editando coluna de Comentário...");
    const comentario = sheet.getRange(editedRow, colComentario).getValue();
    if (comentario) {
      Logger.log("Comentário preenchido. Enviando e-mail...");
      enviarEmailComentario(editedRow, sheet);
    }
  }
}

// Função para enviar e-mail quando um comentário for preenchido
function enviarEmailComentario(linha, sheet) {
  const colProjeto = 1;
  const colComentario = 6;

  const projeto = sheet.getRange(linha, colProjeto).getValue();
  const comentario = sheet.getRange(linha, colComentario).getValue();

  const emails = ["gestao@exemplo.com", "coordenacao@exemplo.com"];
  const assunto = `Novo Comentário - Projeto: ${projeto}`;
  const mensagem = `O projeto "${projeto}" recebeu um novo comentário:\n\n${comentario}`;

  try {
    emails.forEach(email => {
      MailApp.sendEmail(email, assunto, mensagem);
      Logger.log("E-mail de Comentário enviado para: " + email);
    });
  } catch (error) {
    Logger.log("Erro ao enviar e-mail: " + error.toString());
  }
}
