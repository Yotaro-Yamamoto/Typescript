//配列操作メソッド
//map(Array.map(関数(要素,要素番号,元の配列)))
//比較関数には比較対象の要素が2つ渡される(aとb)。
/*配列の各要素に対して1回ずつ加工用の関数を呼び出し、
 関数が返す値を要素とする新しい配列を生成して返す。
 関数に渡される要素番号と元の配列は省略可。*/
var score = [65, 70, 90, 85];
//acore配列の中で1つでも80以上の値が出たら、Trueを返す
var x = score.map(function (e) {
    return e - 77.5;
});
console.log(x);
