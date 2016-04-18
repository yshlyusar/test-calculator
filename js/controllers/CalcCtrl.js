app.controller('CalcCtrl', ['$scope', '$location', 'CalcService',
  function($scope, $location, CalcService) {
      $scope.conOut = '0'; //result variable
      $scope.conIn = ''; // input variable
      $scope.infoBlock = {
          result: 'Result: ',
          input: 'Input: ',
          operation: 'Current operation: '
      }
      $scope.opOut = ''; //current operation variable
      $scope.digits ={'0':'', '1':'', '2':'', '3':'', '4':'', '5':'', '6':'', '7':'', '8':'', '9':''
      };
      $scope.firstOp = '';
      $scope.first = null;
      $scope.second = null;
      $scope.temp = null;
      $scope.secondOp = '';
      $scope.tempOp = '';

    $scope.numbClick = function(numb){
       if($scope.conIn.lastIndexOf('.') ===-1 || numb in $scope.digits){
            $scope.conIn += numb;
            }
    }
//math operation function
      $scope.operation = function(symbol){
          if($scope.conIn === '.'){
              $scope.conIn = '0';
          }
          if(symbol === '/' || symbol === '*' || symbol === '+' || symbol === '-' || symbol === '='){
              if($scope.first && $scope.firstOp){
                  if((symbol === '*' || symbol === '/') && ($scope.firstOp === '+' || $scope.firstOp === '-') && !$scope.secondOp){
                      $scope.secondOp = symbol;
                      $scope.second = $scope.conIn;
                      $scope.conIn = '';
                      $scope.opOut = Number($scope.first) + $scope.firstOp + Number($scope.second) + $scope.secondOp;
                  }
                  else if($scope.firstOp && $scope.secondOp){
                      $scope.tempOp = symbol;
                      $scope.temp = $scope.conIn;
                      $scope.conOut = CalcService.calc($scope.secondOp, $scope.second, $scope.temp);
                      $scope.second = $scope.conOut;
                      $scope.temp = null;
                      $scope.secondOp = $scope.tempOp;
                      $scope.tempOp = '';
                      $scope.opOut = Number($scope.first) + $scope.firstOp + Number($scope.second) + $scope.secondOp;
                      if($scope.secondOp === '+' || $scope.secondOp === '-'){
                          $scope.conOut = CalcService.calc($scope.firstOp, $scope.first, $scope.second);
                          $scope.first = $scope.conOut;
                          $scope.firstOp = $scope.secondOp;
                          $scope.second = null;
                          $scope.secondOp = '';
                          $scope.opOut = Number($scope.first) + $scope.firstOp;
                          $scope.conIn = '';
                          
                      }
                      else if($scope.secondOp === '*' || $scope.secondOp === '/'){
                          $scope.conIn = '';
                      }
                  }
                  else if(symbol !== '='){
                      $scope.second = $scope.conIn;
                      $scope.conOut = CalcService.calc($scope.firstOp, $scope.first, $scope.second);
                      $scope.firstOp = symbol;
                      $scope.first = $scope.conOut;
                      $scope.opOut = Number($scope.first) + $scope.firstOp;
                      $scope.second = null;
                      $scope.conIn = '';
                  }
              }
              else if(symbol !== '='){
                  $scope.first = $scope.conIn;
                  $scope.conOut = $scope.first;
                  $scope.firstOp = symbol;
                  $scope.opOut = Number($scope.first) + $scope.firstOp;
                  $scope.conIn='';
                  
              }
              if(symbol === '='){
                  if($scope.first){
                      if(!$scope.second){
                          $scope.second = $scope.conIn;
                      }
                      if($scope.firstOp && $scope.second){
                          $scope.conOut=CalcService.calc($scope.firstOp, $scope.first, $scope.second);
                          $scope.conIn = $scope.conOut;
                          $scope.first = null;
                          $scope.second = null;
                          $scope.firstOp = null;
                          $scope.secondOp = null;
                          $scope.temp = null;
                          $scope.tempOp = '';
                          $scope.opOut = '';
                      }
                      else{
                          $scope.conOut = $scope.first || '0';
                          $scope.conIn = $scope.conOut;
                          $scope.first = null;
                          $scope.second = null;
                          $scope.firstOp = null;
                          $scope.secondOp = null;
                          $scope.temp = null;
                          $scope.tempOp = '';
                          $scope.opOut = '';
                      }

                  }
              }
          }
          if(symbol === 'sqrt'){
              if($scope.first && $scope.conIn >= 0){
                  $scope.conIn = CalcService.sqrtFunc($scope.conIn);
              }
              else if(!$scope.first && $scope.conIn >=0){
                  $scope.first = CalcService.sqrtFunc($scope.conIn);
                  $scope.conOut = $scope.first;
                  $scope.conIn = $scope.first;
              }
              else{
                  $scope.conOut = 'Wrong input'
              }
          }
      }
      $scope.clear = function(){
          $scope.conOut = '0';
          $scope.conIn = '';
          $scope.firstOp = '';
          $scope.first = null;
          $scope.second = null;
          $scope.secondOp = null;
          $scope.temp = null;
          $scope.tempOp = '';
          $scope.opOut = '';
          localStorage.removeItem('result');
      }
    $scope.backspace = function(){
        $scope.conIn = $scope.conIn.slice(0,-1);
    }
    $scope.goToCalc = function(){
        $location.path('/advanced');
    }
    $scope.saveFunc = function(){
      if(localStorage.getItem('result')){
        $scope.conIn = localStorage.getItem('result'); 
      }
      else{localStorage.setItem('result', $scope.conOut);
      }
    }

    $scope.ceFunc = function(){
        $scope.conIn = '';
    }
  }
]);