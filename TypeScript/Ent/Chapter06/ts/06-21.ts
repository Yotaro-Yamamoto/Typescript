//アロー関数 returnの省略
//従来の関数
let message = function(){
    return "Hello";
}
console.log(message);

//アロー関数
message = () => "Hello";    //暗黙のreturn
console.log(message);

/*
ただし、関数の処理が1行であっても、{}を記述した
場合はreturnを省略できない。
*/