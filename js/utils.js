
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
}

function randomGuid(){
    var str='';
    for(var i=0;i<8;i++){
        str+=getRandomInt(0,9);
    }
    return str;
    
}
