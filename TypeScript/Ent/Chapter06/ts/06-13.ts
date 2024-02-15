//引数の省略
//デフォルト引数の設定
//デフォルト引数は、省略できない引数よりも右側に置かなければならない
function mixer(a:string="りんご",b:string){
    return a+"と"+b+"のジュース";
}
console.log(mixer(undefined,"バナナ"));
                //↑どうしても1個目をデフォルト引数にしたいのなら
                //デフォルト引数にundefinedをつける。
                //undefinedが渡された仮引数はデフォルト値が使われる。
/*
undefinedは「何もしない」ことを意味するので、上記の場合は、aには何もせず、
bに"バナナ"を代入するという意味になる。
*/