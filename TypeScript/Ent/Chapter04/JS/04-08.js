//応用問題⓶
//仕様：九九表を出力する
var line = "";
for (var i = 1; i <= 9; i++) {
    for (var j = 1; j <= 9; j++) {
        line += (i * j).toString().padStart(3);
    }
    console.log(line);
    line = "";
}
