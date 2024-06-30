let btn = document.querySelectorAll('button')

let input = document.getElementById('input')
let str = "";

let arr = Array.from(btn);

let bracbtn = document.getElementById('bracket');
bracbtn = false;


// let bracket = Array.from(str)
// let count = 0;
// for (let i = 0; i <= bracket.length; i++) {
//     if(bracket[i] != '('){
//         count++;
//     }
// }


arr.forEach(button => {
    button.addEventListener('click', (e) => {
        if(e.target.innerHTML == "="){
            str = eval(str);
            input.value = str;
        }else if(e.target.innerHTML == "AC"){
            str = "";
            input.value = str;
        }else if(e.target.innerHTML == 'DEL'){
            str = str.substring(0, str.length-1);
            input.value = str;
        }else if(e.target.innerHTML == '()'){
            if(!bracbtn){
                str += '(';
                input.value = str;
                bracbtn = true
            }else if(bracbtn){
                str += ')';
                input.value = str;
                bracbtn = false;
            }
            // if(str == ''){
            //     str = '(';
            //     input.value = str;
            // }else if(str != ''){
            //     str += ')';
            //     input.value = str;
            // }else if(str!=''){
            //     str = '(';
            //     input.value = str;
            // }
        }else{
            str += e.target.innerHTML;
            input.value = str;
        }


    })
})

