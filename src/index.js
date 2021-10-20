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
const myProfile1 = ["じゃけぇ", 28];
const message3 = `名前は、${myProfile1[0]}です。年齢は、${myProfile1[1]}です。`;
console.log(message3);
//配列の場合は名前が決まっていないので順番で受け取っていく。
const [name, age] = myProfile1;
const message4 = `名前は、たぶん${name}です。年齢は、${age}です。`;
console.log(message4);
