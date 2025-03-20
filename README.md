# Gerenciador de Projetos - Google Sheets

## Este script do Google Apps Script automatiza o gerenciamento de projetos em uma planilha do Google Sheets. Ele realiza as seguintes funções:

- Registra automaticamente o responsável pela edição do status de um projeto.

- Registra a data da última alteração quando o status é modificado.

- Envia e-mails automáticos para responsáveis quando um comentário é adicionado a um projeto.

## Funcionalidades

- 1. Registro de Responsável e Data de Alteração

Quando a coluna de status (coluna 3) é alterada, o script:

Preenche automaticamente o e-mail do usuário que fez a alteração na coluna de responsável (coluna 4), caso esteja vazia.

Registra a data da alteração na coluna de data de alteração (coluna 5).

- 2. Envio de E-mails Automáticos

Quando um comentário é inserido na coluna de comentários (coluna 6), o script:

Obtém o nome do projeto (coluna 1) e o comentário inserido.

Envia um e-mail automático para os responsáveis (lista predefinida no código).

O e-mail contém o nome do projeto e o comentário inserido.

## Configuração e Uso

- Abra o Google Sheets e vá para Extensões > Apps Script.

- Cole o script no editor de código do Apps Script.

- Salve e autorize as permissões necessárias.

- O script será executado automaticamente sempre que as colunas relevantes forem editadas.

## Dependências

Google Apps Script

Google Sheets (Planilha contendo as colunas mencionadas)

Google Workspace (Gmail API habilitado) para envio de e-mails.

