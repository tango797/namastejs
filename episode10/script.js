
function x(){
    var a = 7;
    function y(){
        console.log(a)
    }
    var a=100;
   return y;
}

const z =x()//it will be gone once invoked 

z();