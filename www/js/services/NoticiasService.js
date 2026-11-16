// Array mockado de notícias e atividades/eventos da UCSal
angular.module('ucsalApp')
  .factory('NoticiasService', function () {

    var noticias = [
      {
        id: 1,
        titulo: 'Prazo de rematrícula 2027.1',
        data: '2026-11-10',
        categoria: 'Notícia',
        imagem: 'img/noticia.svg',
        resumo: 'A rematrícula para o semestre 2027.1 vai até 15/12.',
        conteudo: 'A rematrícula para o semestre 2027.1 está aberta de 17/11 a 15/12 pelo Portal do Aluno. Alunos com pendências financeiras devem regularizar a situação antes de realizar a rematrícula.'
      },
      {
        id: 2,
        titulo: 'Edital de Iniciação Científica',
        data: '2026-11-05',
        categoria: 'Notícia',
        imagem: 'img/noticia.svg',
        resumo: 'Inscrições abertas para bolsas de iniciação científica.',
        conteudo: 'Está publicado o edital do Programa de Iniciação Científica. Estudantes de todos os cursos podem se inscrever junto a um professor orientador até o dia 30/11.'
      },
      {
        id: 3,
        titulo: 'SEMOC 2026',
        data: '2026-10-20',
        categoria: 'Evento',
        imagem: 'img/evento.svg',
        resumo: 'Semana de Mobilização Científica no campus Pituaçu.',
        conteudo: 'A Semana de Mobilização Científica (SEMOC) reúne palestras, minicursos e apresentações de trabalhos. O evento acontece no campus Pituaçu e conta horas complementares.'
      },
      {
        id: 4,
        titulo: 'Maratona de Programação',
        data: '2026-11-22',
        categoria: 'Evento',
        imagem: 'img/evento.svg',
        resumo: 'Equipes da UCSal participam da maratona regional.',
        conteudo: 'Os estudantes da Escola de Tecnologias representam a UCSal na Maratona de Programação. Treinos acontecem às quartas-feiras no laboratório do campus Federação.'
      },
      {
        id: 5,
        titulo: 'Projeto de Extensão: Inclusão Digital',
        data: '2026-11-01',
        categoria: 'Evento',
        imagem: 'img/evento.svg',
        resumo: 'Alunos ensinam informática básica para a comunidade.',
        conteudo: 'O projeto de extensão Inclusão Digital oferece aulas gratuitas de informática para a comunidade do entorno do campus. Alunos voluntários podem se inscrever na coordenação.'
      }
    ];

    return {
      listar: function () {
        return noticias;
      },

      buscarPorId: function (id) {
        return noticias.filter(function (n) {
          return n.id === parseInt(id, 10);
        })[0] || null;
      },

      getCategorias: function () {
        return ['Notícia', 'Evento'];
      }
    };
  });
