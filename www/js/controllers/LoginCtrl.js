angular.module('ucsalApp')

  // Tela de login (RF01)
  .controller('LoginCtrl', function ($scope, $state, AuthService) {
    $scope.dados = { matricula: '', senha: '' };
    $scope.erro = '';

    // Se já estiver logado, vai direto para o mural
    if (AuthService.estaLogado()) {
      $state.go('app.noticias');
    }

    $scope.entrar = function () {
      $scope.erro = '';

      // Impede envio de campos vazios
      if (!$scope.dados.matricula || !$scope.dados.senha) {
        $scope.erro = 'Preencha a matrícula e a senha.';
        return;
      }

      if (AuthService.login($scope.dados.matricula, $scope.dados.senha)) {
        $scope.dados = { matricula: '', senha: '' };
        $state.go('app.noticias');
      } else {
        $scope.erro = 'Matrícula ou senha inválida.';
      }
    };
  })

  // Menu lateral: mostra o aluno logado e faz logout
  .controller('MenuCtrl', function ($scope, $state, AuthService) {
    $scope.aluno = AuthService.getAlunoLogado();

    $scope.sair = function () {
      AuthService.logout();
      $state.go('login');
    };
  });
