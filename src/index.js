/**
 * const let等の変数宣言
 **/
// var val1 = "var変数";
// console.log(val1);
// 変数の上書き、再宣言ができてしまう

// let val2 = "let変数";
// console.log(val2);
//letは上書きが可能
// val2 = "let変数を上書き"
// console.log(val2);
//再宣言は不可能
// let val2 ="変数を再宣言"
//設定した時点でエラーが出る。

//上書きも再宣言も不可能
// const val3 = "const変数を上書き"
// console.log(val3);

// val3 = "上書き"
//constはread-onlyが表示されている。
//constに設定したオブジェクトや配列は値を変えることが可能
//新しいプロパティの追加も可能。
// const  val4 = {
//   name: "tanaka",
//   age: 23
// }
// console.log(val4);
// val4.address = "Hiroshima";
// val4.name = "kinoshita"
// console.log(val4);
//プロパティの追加、変更可能。
//基本的にはconstしか使用しない。

// const val5 = ['dog', 'cat'];
// console.log(val5);
// val5[0] = 'zoo';
// val5.push("monkey")
// console.log(val5);

// template文字列 文字列の中に変数を組み込みめるようになったES2015
// const name = "じゃけぇ";
// const age = 28;
//「私の名前はじゃけぇです。年齢は28歳です。」
//従来の方法
// const message1 = "私の名前は" + name + "です。年齢は" + age + "です。";
// console.log(message1 + "2");
// console.log(`私の名前は${name}です。年齢は${age}です。`);

//アロー関数
//従来の関数
// function func1(str){
//   return str;
// };
// const func1 = function(str){
//   return str
// }
// console.log(func1("func1です"));

//アロー関数
// const func2 = (str) => {
//     return str;
// }
// const func2 = (str) => str;
// console.log(func2("func2です"));

// const func3 = (num1, num2) => {
//   return num1 + num2;
// }

// console.log(func3(20,30));

//分割代入
// const myProfile = {
//   name: "じゃけぇ",
//   age: 28
// }

// const message1 = `名前は${myProfile.name}です。年齢は、${myProfile.age}です。`;
// console.log(message1);
//長くなると大変なのでそれを分割して代入することができる。

//分割代入方法 下記のようにして分割することができる。
// const { name, age} = myProfile;
// const message2 = `名前は${name}です。年齢は、${age}です。`;
// console.log(message2);
//分割代入で入力するようにできる。
//指定のプロパティを抜き出して使うことができてコード自体が簡潔になって使用できる。
//分割代入は配列にも使用することができる。
// const myProfile1 = ["じゃけぇ", 28];
// const message3 = `名前は、${myProfile1[0]}です。年齢は、${myProfile1[1]}です。`;
// console.log(message3);
//配列の場合は名前が決まっていないので順番で受け取っていく。
// const [name, age] = myProfile1;
// const message4 = `名前は、たぶん${name}です。年齢は、${age}です。`;
// console.log(message4);
//配列の場合は順番に気をつけないといけない。

//デフォルト値,引数など
// const sayHello = (name = "ゲスト") => console.log(`こんにちは、${name}さん！`);
// sayHello("じゃけぇ");
//この関数を引数を消すと引数部分がundefinedとなってしまうのでよくわからないようになってしまう。
//いけていないのでbugになってしまうかもしれないので、関数が呼び出された場合はデフォルトを設定すること。
//引数の後ろに=を入れてデフォルト値を代入することができる。
// sayHello();
//引数がないのでデフォルト値が代入される。
//関数の引数や分割代入の部分にも使用することができる。
//変数の後ろに=で何か書いていたら初期値になる。

//スプレッド構文について。 ...の文法
// 配列の展開
// const arr1 = [1,2,3];
// console.log(arr1);
//配列が表示される。
// console.log(...arr1);
//スプレッド構文にすると配列ではなく、実際の１ 2と表示される。
//配列の中身を順番に表示してくれる。

// const  sumFunc = (num1, num2) => console.log(num1 + num2);
// sumFunc(arr1[0], arr1[1]);
//それぞれ代入すると計算することができる。
//スプレッド構文を使用して引数を使うとどうなるか。
// sumFunc(...arr1);
//配列の要素が順に設定されて代入されていくようになる。
//上の配列要素を１つずつ入れたものと同じ結果になる。
//配列の要素が多くても引数に必要な個数だけ代入される。

//まとめる。
// const arr2 = [1,2,3,4,5];
//配列の分割代入とまとめるのは同時に使われるのが多い。
// const [num1, num2, ...arr3] = arr2;
//分割にすると順番に値が入ってくる。残りの部分をまとめて配列を受け取ることができる。
// console.log(num1);
// console.log(num2);
// console.log(arr3);//分割の残ったものをまとめることができる。

//配列のコピー、結合でもスプレッド構文を使用することができる。
// const arr4 = [10, 20];
// const arr5 = [30, 40];
//arr4をコピーしたものを作成
// const arr6 = [...arr4];
//上記のようにするとコピーすることができる。
// arr6[0] = 100;
// console.log(arr6);
// console.log(arr4);
//arr4にarr6の変更は影響しない。

//arr4,arr5の両方を結合する時にもスプレッド構文を使用することができる。
// const arr7 = [...arr4, ...arr5];
// console.log(arr7);
//arr4を展開して、その後にarr5を展開したものが設定されている。
//２つ以上の配列を結合する時にもスプレッド構文を使用することができる。
//コピーするなら=ですればいいんじゃないかというがどうか
// const arr8 = arr4;
// console.log(arr8);
//=でコピーするには問題がある。
//参照が引き継がれるので、コピーしてきたarr8に対して数値の変更をするとすると
// arr8[0] = 100;
// console.log(arr8);
// console.log(arr4);
//参照元のarr4の値も変更されてしまう。
//=でコピーしてしまうとarr4の参照先をarr8も参照することになってしまうのでarr4も影響を受けてしまう。
//なので、スプレッド構文を使用してコピーする方がいい。

//map, filterを使った配列の処理
// const nameArr = ["田中", "山田", "じゃけぇ"];
//配列は何番目かがよく使用される。
//配列をループしてそれぞれの配列を表示したり、処理するのは通常はfor文を使用していた。
// for(let i = 0; i < nameArr.length; i ++){
//   console.log(nameArr[i]);
// }
//配列が順番に処理されて配列が順番的に表示される
//これが従来の方法。 mapを使ってやってみる。
// const nameArr2 = nameArr.map((name) => {
//   return name;
// });
//そのままreturnしていると入ってきた値をそのまま返してきて、情報が入った配列が表示される。同じような結果になる。
//returnに返ってきたもので新しい配列を作ることができる。
//mapの中にはnameArrの中身が入ってくる。
//引数に配列の中身が順番に入ってくる。
// console.log(nameArr2);
//mapでfor文のようにするとどうなるか
//mapで何番目を表示するにはどうするのか。第二引数で使用できる。
//mapの時の１つ目の配列は、配列の実際の要素。
//2つ目の要素は、順番が0から入ってくる。
// nameArr.map((name,i) => console.log(`${i + 1}番目は${name}です。`));
//このようにすることでややこしい書き方を実現することができる。
//console.logを使うことでそれぞれを表示することもできる。
//2つの使い方がある。

//実践的なmapの使用方法。
//自分の以外にさんつけるようにする。
// const newNameArr = nameArr.map((name) => {
//   if (name === "じゃけぇ") {
//     return name;
//   } else {
//     return `${name}さん`;
//   }
// });
// console.log(newNameArr);
//新しい配列をつくることができる。

//filterについて確認。
// const numArr = [1,2,3,4,5];
//数字の配列から対象の数値を抽出することができる。
//filterの場合はreturnに条件式を書いてそれに一致するものを返すという動きになる。
// const newNumArr = numArr.filter((num) => {
//   return num % 2 === 1;
// })
//returnに適合したものを新しい配列にすることができる。
// console.log(newNumArr);

//25三項演算子 ?:
//ある条件？true:false
// const val1 = 1 > 0 ? 'trueです。':'falseです';
// console.log(val1);
//ifelseを１行で書くことができる。
// const num = 1300;
// const num = '1300';
// console.log(num.toLocaleString());
//3桁ごとにカンマ区切りをしてくれるもの。文字列が来ると変更できない。数値でないといけない。
//数値の時は3桁区切りで表示して、そうでない時は、エラーみたいに表示してあげたい。
// const formattedNum = typeof num === 'number' ? num.toLocaleString(): '数値を入力してください。';
// console.log(formattedNum);

//関数のreturn部分に三項演算子を使用する。

// const check = (num1, num2) => {
//   return num1 + num2 > 100 ? '100を超えています' : '許容範囲内です。'
// }

// console.log(check(30,40));
