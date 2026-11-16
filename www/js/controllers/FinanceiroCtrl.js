angular.module('ucsalApp')

  // Consulta financeira por semestre (RF04)
  .controller('FinanceiroCtrl', function ($scope, $ionicLoading, FinanceiroService) {
    $scope.semestres = FinanceiroService.getSemestres();

    // Começa pelo semestre mais recente
    $scope.filtro = { semestre: $scope.semestres[$scope.semestres.length - 1] };

    $scope.getMensalidades = function () {
      return FinanceiroService.getMensalidades($scope.filtro.semestre);
    };

    // Copia a linha digitável e mostra confirmação
    $scope.copiarCodigo = function (mensalidade) {
      if (navigator.clipboard) {
        navigator.clipboard.writeText(mensalidade.codigoBarras);
      }
      mensalidade.copiado = true;

      $ionicLoading.show({
        template: 'Código de barras copiado!',
        duration: 1500,
        noBackdrop: true
      });
    };
  });
