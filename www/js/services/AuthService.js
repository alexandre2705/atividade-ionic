// Mock de credenciais e sessão do aluno logado
angular.module('ucsalApp')
  .factory('AuthService', function ($rootScope, AlunoService) {

    // Credenciais mockadas
    var credenciais = [
      { matricula: '20261001', senha: '123456' },
      { matricula: '20261002', senha: '654321' }
    ];

    var CHAVE_SESSAO = 'ucsal_sessao';
    var alunoLogado = null;

    // Recupera sessão salva (para não deslogar ao atualizar a página)
    var matriculaSalva = localStorage.getItem(CHAVE_SESSAO);
    if (matriculaSalva) {
      alunoLogado = AlunoService.buscarPorMatricula(matriculaSalva);
      $rootScope.alunoLogado = alunoLogado;
    }

    return {
      // Retorna true se matrícula e senha conferem com o mock
      login: function (matricula, senha) {
        var encontrado = credenciais.filter(function (c) {
          return c.matricula === matricula && c.senha === senha;
        })[0];

        if (!encontrado) {
          return false;
        }

        alunoLogado = AlunoService.buscarPorMatricula(matricula);
        $rootScope.alunoLogado = alunoLogado;
        localStorage.setItem(CHAVE_SESSAO, matricula);
        return true;
      },

      logout: function () {
        alunoLogado = null;
        $rootScope.alunoLogado = null;
        localStorage.removeItem(CHAVE_SESSAO);
      },

      getAlunoLogado: function () {
        return alunoLogado;
      },

      estaLogado: function () {
        return alunoLogado !== null;
      }
    };
  });
