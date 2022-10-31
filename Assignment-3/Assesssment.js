//Create a function that will return true if the following is palindrome.other wise return false:
//eye
//palindrome
//baba
//racar
//race car
function palindromeCheck(str){
    let len = str.length;
    for(let i = 0 ; i < len/2; i++) {
        if (str[i] !== str[len-1 - i]){
            return false;
        }
    }
    return true;
}

 console.log(palindromeCheck("eye"));