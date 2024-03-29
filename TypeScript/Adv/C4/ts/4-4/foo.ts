//デフォルトエクスポート
/*モジュールが公開したい機能を1つしか含まない場合、defaultというキーワードを指定してエクスポートすると、
　外部プログラムは任意の名前で機能を利用できるようになる。*/
/*書式
　export default 機能*/

//クラスやインターフェースごとにモジュールを分けた場合、次のようにデフォルトエクスポートする。
export default class Doubutsu{
    /*...*/
}

//実はデフォルトエクスポートは、defaultという別名の名前付きエクスポートと同じである。
class Doubutsu2{
    /*...*/
}
export {Doubutsu2};