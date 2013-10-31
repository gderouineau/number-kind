/**
 * Created by GD on 31/10/2013.
 */


exports.even = function(number){

    if(typeof number == "number"){
        if(number % 2 == 0){
            return(true);
        }
    }
    return(false);
};

exports.odd = function(number){

    if(typeof number == "number"){
        if(number % 2 == 1 || number % 2 == -1){
            return(true);
        }
    }
    return(false);

};