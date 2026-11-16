angular.module('ucsalApp')

  // Mural de notícias e eventos (RF02)
  .controller('NoticiasCtrl', function ($scope, $state, NoticiasService) {
    $scope.noticias = NoticiasService.listar();
    $scope.categorias = NoticiasService.getCategorias();

    // Categoria selecionada para o filtro ('' = todas)
    $scope.filtro = { categoria: '' };

    $scope.selecionarCategoria = function (categoria) {
      $scope.filtro.categoria = categoria;
    };

    $scope.lerMais = function (noticia) {
      $state.go('app.noticiaDetalhe', { id: noticia.id });
    };
  })

  // Visualização completa de uma notícia
  .controller('NoticiaDetalheCtrl', function ($scope, $stateParams, NoticiasService) {
    $scope.noticia = NoticiasService.buscarPorId($stateParams.id);
  });
