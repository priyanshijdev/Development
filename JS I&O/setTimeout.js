const user = {
    name:"Priyanshi ",
    greet : function () {
        setTimeout(function() {
            console.log(`Hi from, ${this.name}` );
        }, 1000)
    }
}
user.greet();

Output:
Hi from undefined 

as this in normal function / pure fn this is refering to global obbject Also , seTimeout is browser function. 
if we use arrow function 
-------------------------------------------------------------------------------------------------------------------------

const user = {
    name:"Priyanshi ",
    greet : function () {
        setTimeout(()=> {
            console.log(`Hi from, ${this.name}` );
        }, 1000)
    }
}
user.greet();


Hi from, Priyanshi 
