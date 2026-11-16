// Objeto mockado de mensalidades agrupadas por semestre
angular.module('ucsalApp')
  .factory('FinanceiroService', function () {

    var mensalidadesPorSemestre = {
      '2025.2': [
        { mes: 'Agosto/2025', vencimento: '2025-08-10', valor: 1250.00, status: 'Paga', codigoBarras: '' },
        { mes: 'Setembro/2025', vencimento: '2025-09-10', valor: 1250.00, status: 'Paga', codigoBarras: '' },
        { mes: 'Outubro/2025', vencimento: '2025-10-10', valor: 1250.00, status: 'Paga', codigoBarras: '' },
        { mes: 'Novembro/2025', vencimento: '2025-11-10', valor: 1250.00, status: 'Paga', codigoBarras: '' },
        { mes: 'Dezembro/2025', vencimento: '2025-12-10', valor: 1250.00, status: 'Paga', codigoBarras: '' }
      ],
      '2026.1': [
        { mes: 'Fevereiro/2026', vencimento: '2026-02-10', valor: 1320.00, status: 'Paga', codigoBarras: '' },
        { mes: 'Março/2026', vencimento: '2026-03-10', valor: 1320.00, status: 'Paga', codigoBarras: '' },
        { mes: 'Abril/2026', vencimento: '2026-04-10', valor: 1320.00, status: 'Paga', codigoBarras: '' },
        { mes: 'Maio/2026', vencimento: '2026-05-10', valor: 1320.00, status: 'Paga', codigoBarras: '' },
        { mes: 'Junho/2026', vencimento: '2026-06-10', valor: 1320.00, status: 'Paga', codigoBarras: '' }
      ],
      '2026.2': [
        { mes: 'Agosto/2026', vencimento: '2026-08-10', valor: 1320.00, status: 'Paga', codigoBarras: '' },
        { mes: 'Setembro/2026', vencimento: '2026-09-10', valor: 1320.00, status: 'Paga', codigoBarras: '' },
        { mes: 'Outubro/2026', vencimento: '2026-10-10', valor: 1320.00, status: 'Paga', codigoBarras: '' },
        { mes: 'Novembro/2026', vencimento: '2026-11-10', valor: 1320.00, status: 'A Pagar', codigoBarras: '23793.38128 60082.677130 52000.063305 1 98760000132000' },
        { mes: 'Dezembro/2026', vencimento: '2026-12-10', valor: 1320.00, status: 'A Pagar', codigoBarras: '23793.38128 60082.677130 52000.063306 8 99070000132000' }
      ]
    };

    return {
      getSemestres: function () {
        return Object.keys(mensalidadesPorSemestre);
      },

      getMensalidades: function (semestre) {
        return mensalidadesPorSemestre[semestre] || [];
      }
    };
  });
