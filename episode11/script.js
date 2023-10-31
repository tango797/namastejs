console.log("hhehehe")
//let is blocke scoped and var is global scope
//in each loop new copy of i goes in the loop
//these copies of i forms closure in all settime out 
function x(){
    for (var i = 0; i <=5; i++) {
        function close(x){
            setTimeout(function(){
                console.log(x)
                },x*1000)
        }
    close(i);
        
    }
    
}

x();
