angular.module('ucsalApp')

  // Atualização cadastral (RF03)
  .controller('PerfilCtrl', function ($scope, $ionicPopup, AuthService, AlunoService) {
    var aluno = AuthService.getAlunoLogado();

    // Cópia para edição: só altera o Service ao clicar em Salvar
    $scope.form = angular.copy(aluno);
    $scope.salvo = false;

    $scope.salvar = function () {
      if (!$scope.form.email || !$scope.form.telefone) {
        $ionicPopup.alert({ title: 'Atenção', template: 'Informe e-mail e telefone.' });
        return;
      }

      AlunoService.atualizar(aluno.matricula, $scope.form);
      $scope.salvo = true;

      $ionicPopup.alert({
        title: 'Sucesso',
        template: 'Dados cadastrais atualizados!',
        okType: 'button-positive'
      });
    };
  });
