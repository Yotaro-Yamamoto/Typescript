//メソッドのオプショナルチェーン
/*メソッドのオプショナルチェーンは、メソッド名の後ろに「?.」を記述する。
　次のコードは、鳴き声を文字列として返すオプショナルなrepeatメソッドを
　使って3回繰り返し出力する例である。*/
type Cat = {
    meows?():string;//任意
};
const obj: Cat = {
    meows:() => {
        return "にゃー";
    },
};
console.log(obj.meows?.().repeat(3));

//「?.」を付けづにオプショナルメソッドを実行しようとするとコンパイルエラーが発生する。
//'undefined'の可能性があるオブジェクトを呼び出すことはできない
//console.log(obj,meows().repeat(3));