// Dados cadastrais mockados dos alunos e métodos de edição
angular.module('ucsalApp')
  .factory('AlunoService', function () {

    var CHAVE_ALUNOS = 'ucsal_alunos';

    // Dados mockados iniciais
    var alunosPadrao = [
      {
        matricula: '20261001',
        nome: 'Maria Souza Santos',
        curso: 'Engenharia de Software',
        email: 'maria.souza@email.com',
        telefone: '(71) 99999-1001',
        endereco: { cep: '41740-090', rua: 'Av. Prof. Pinto de Aguiar, 2589', bairro: 'Pituaçu', cidade: 'Salvador' }
      },
      {
        matricula: '20261002',
        nome: 'João Pereira Lima',
        curso: 'Engenharia de Software',
        email: 'joao.lima@email.com',
        telefone: '(71) 98888-1002',
        endereco: { cep: '40210-630', rua: 'Rua Dr. José Peroba, 100', bairro: 'Federação', cidade: 'Salvador' }
      }
    ];

    // Usa o que estiver no localStorage, senão os dados padrão
    var salvos = localStorage.getItem(CHAVE_ALUNOS);
    var alunos = salvos ? JSON.parse(salvos) : alunosPadrao;

    function persistir() {
      localStorage.setItem(CHAVE_ALUNOS, JSON.stringify(alunos));
    }

    return {
      buscarPorMatricula: function (matricula) {
        return alunos.filter(function (a) {
          return a.matricula === matricula;
        })[0] || null;
      },

      // Atualiza apenas os campos editáveis (contato e endereço)
      atualizar: function (matricula, dados) {
        var aluno = this.buscarPorMatricula(matricula);
        if (!aluno) {
          return false;
        }
        aluno.email = dados.email;
        aluno.telefone = dados.telefone;
        aluno.endereco = angular.copy(dados.endereco);
        persistir();
        return true;
      }
    };
  });
