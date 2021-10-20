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
const arr4 = [10, 20];
const arr5 = [30, 40];
//arr4をコピーしたものを作成
const arr6 = [...arr4];
//上記のようにするとコピーすることができる。
arr6[0] = 100;
console.log(arr6);
console.log(arr4);
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
