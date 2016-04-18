app.factory('CalcService', function() {
    var factory = {};
    factory.calc = function(operator, numbA, numbB){
        if(operator === '+'){
            return String(Number(numbA)+Number(numbB));
        }
        if(operator === '-'){
            return String(Number(numbA)-Number(numbB));
        }
        if(operator === '*'){
            return String(Number(numbA)*Number(numbB));
        }
        if(operator === '/'){
            return String(Number(numbA)/Number(numbB));
        }
    }
        factory.tanFunc = function (numb) {
            return String(Math.tan(Number(numb)));
        }
        factory.cosFunc = function (numb) {
            return String(Math.cos(Number(numb)));
        }
        factory.sinFunc = function (numb) {
            return String(Math.sin(Number(numb)));
        }
        factory.powFunc = function (numb) {
            var square = 2;
            return String(Math.pow(Number(numb), square));
        }
        factory.sqrtFunc = function (numb) {
            return String(Math.sqrt(Number(numb)));
        }
        factory.factoriaFunc = function(n){
            if (n <= 1) return 1;
            return String(n*factory.factoriaFunc(n-1));
        }
    return factory;
});