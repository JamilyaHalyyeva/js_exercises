isBalanced =s=>{
    let str =[];
    for (let i = 0; i<s.length; i++) {
        let char=str[str.length-1];
        if (s[i]== "(" || s[i]=='{' || s[i]=="[") {
            str.push(s[i]);
            
        }
        else if ((char == "(" && s[i]==")") ||
        (char=="{" && s[i]=="}")||
        (char == "[" && s[i]== "]")) {
            str.pop();
        } else return false
    }
    return str.length? false:true;
}

 console.log(isBalanced('((()))'));