const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    let obj = {};
    let temp = '';
    let arr =[];
    let counter = 0;
    let rez = '';
    for (var key in MORSE_TABLE){
        for(var i = 0; i < key.length; i++){
            if (key[i] === '.'){
                temp = temp +'10';
            }
            else {
                temp = temp + '11'
            }
        }
        
        obj[temp] = MORSE_TABLE[key];
       
            temp = '';
    }
   
    for (var key in obj){
        arr = key.split('');
        if (arr.length < 10){
            counter = 10 - arr.length;
        }
        else {
            continue
        }
       
        for (var i = 0; i < counter; i++) {
            arr.unshift('0');
        }
        obj[arr.join('')] = obj[key] ;
        delete obj[key];
    
    }
    console.log(obj);
    for (var i = 0; i < expr.length; i++){
        if (expr[i] == '*'){
            rez = rez + ' ';
            i = i + 9;
        }
        else{
            for (var key in obj){ 
                if (key == expr.substring(i, i+10)){
                    rez = rez + obj[key];   
                }
            }
            i = i + 9;
        }
    }
   return(rez);  
}

module.exports = {
    decode
}