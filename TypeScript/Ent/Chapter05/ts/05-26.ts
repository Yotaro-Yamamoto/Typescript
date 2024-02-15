//配列操作メソッド
//sort(Array.sort(比較対象 a,比較対象 b))
//比較関数には比較対象の要素が2つ渡される(aとb)。
/*比較関数にはaとbの大小を比較する処理を記述し、負の数を
　返すとaはbよりも前に並ぶ(大きい順(降順)になる)。
　正の値を返すとaはbよりも後列に並ぶ(小さい順(昇順)になる)。
*/
const score: number[] = [65,70,90,85];
score.sort(function(a,b) {
    return b-a;
});
console.log(score);

//降順はb-a、昇順はa-b。