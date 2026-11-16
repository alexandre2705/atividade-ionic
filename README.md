# Portal do Aluno UCSal

Protótipo (MVP front-end) feito com **Ionic Framework 1** + **AngularJS**. Todos os dados são mockados nos Services (sem banco de dados).

## Como rodar

```bash
npm start
```

Abra http://localhost:8100

> Também funciona no GitHub Codespaces (mesmo comando).

## Login de teste

| Matrícula | Senha  |
|-----------|--------|
| 20261001  | 123456 |
| 20261002  | 654321 |

## Estrutura

```
www/
├── css/style.css            # Cores UCSal (variáveis CSS)
├── img/                     # Imagens das notícias
├── js/
│   ├── app.js               # Módulo ucsalApp + rotas ($stateProvider)
│   ├── controllers/         # LoginCtrl, NoticiasCtrl, PerfilCtrl, FinanceiroCtrl
│   └── services/            # AuthService, NoticiasService, AlunoService, FinanceiroService
├── templates/               # login, menu, noticias, noticia-detalhe, perfil, financeiro
└── index.html
```

## Módulos

- **RF01 Login** – valida matrícula/senha contra o mock do `AuthService`, bloqueia campos vazios.
- **RF02 Mural** – cards de notícias e eventos com filtro por categoria e "Ler mais".
- **RF03 Cadastro** – nome, matrícula e curso somente leitura; e-mail, telefone e endereço editáveis (salvos no `AlunoService` + localStorage).
- **RF04 Financeiro** – seletor de semestre, mensalidades com badge Paga/A Pagar e botão "Copiar Código de Barras".
