//アロー関数の型注釈
//普通の関数定義
function mixer(fruits) {
    return fruits + "ジュース";
}
console.log(mixer("りんご"));
//関数式
var Mixer = function (fruits) {
    return fruits + "ジュース";
};
console.log(Mixer("メロン"));
//アロー関数
Mixer = function (fruits) {
    return fruits + "ジュース";
};
console.log(Mixer("バナナ"));
/*
引数の()を省略した場合、引数も戻り値も型注釈が使えなく
なってしまい、コンパイルエラーとなる。
*/ 
