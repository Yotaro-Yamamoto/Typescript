//オブジェクトの分割代入
//変数への分割代入
/*オブジェクトのプロパティを取り出したいとき、取り出したいプロパティ名を
　{}に列挙すると、同じ名前の変数に取り出すことができる*/
/*書式
　{プロパティ名,プロパティ名...}=オブジェクト;*/
/*次のコードは、階層化されたオブジェクトobj.priceの中にある2つのプロパティを
　取り出して、分割代入を利用してbaseとtaxに代入する例である。*/
const obj = {
    name:"高級肉",
    price:{
      base:1280,
      tax:128,
      discount:1000,  
    },
};
//本体価格と税額を取り出す
const{base,tax} = obj.price;
console.log("本体価格："+base+"円 税額："+tax+"円");
/*このとき、price.discountプロパティは、受け取れる変数名が左辺の{}の中に
　記述されていないため、どこにも代入されない。
　同じことを分割代入を使わずに記述すると、プロパティごとに代入文を記述しなくてはならない。*/
//const base = obj.price.base;//本体価格
//const tax = obj.price.tax;//税額