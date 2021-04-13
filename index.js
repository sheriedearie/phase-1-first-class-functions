function receivesAFunction(callback){
    console.log(callback());
}

function returnsANamedFunction(){
    return function someThing(){

    }
}

function returnsAnAnonymousFunction(){
    return function(){
        
    }
}