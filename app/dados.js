
   var index = angular.module("index",[]);
   
  index.controller("indexController", function($scope, $http){
    $http.get('http://dados.recife.pe.gov.br/api/action/datastore_search?resource_id=18e58d3b-8096-4bac-bc18-273bacd7d01c&limit=1').success(function(data, status, headers, config) {
      $scope.quantPraca = data.result.total;
  }).
  error(function(data, status, headers, config) {});
    
    $http.get('http://dados.recife.pe.gov.br/api/action/datastore_search?resource_id=1654a1ca-e74c-430e-9726-15b5498aed47&limit=1').success(function(data, status, headers, config) {
       $scope.quantUniF = data.result.total;
  }).
  error(function(data, status, headers, config) {});
      
    $http.get('http://dados.recife.pe.gov.br/api/action/datastore_search?resource_id=d85bf4e3-637e-4e1b-9b03-970dca4403c7&limit=1').success(function(data, status, headers, config) {
       $scope.quantBar = data.result.total;
  }).
  error(function(data, status, headers, config) {});
      
      
      
      google.setOnLoadCallback(drawChart);

      function drawChart() {
        var data = google.visualization.arrayToDataTable([
          ['Year', 'Sales', 'Expenses'],
          ['2004',  1000,      400],
          ['2005',  1170,      460],
          ['2006',  660,       1120],
          ['2007',  1030,      540]
        ]);

        var options = {
          title: 'Company Performance',
          curveType: 'function',
          legend: { position: 'bottom' }
        };

        var chart = new google.visualization.LineChart(document.getElementById('graficoReceita'));

        chart.draw(data, options);
      }
      
      
      
  
  });


