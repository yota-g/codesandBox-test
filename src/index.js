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
const name = "じゃけぇ";
const age = 28;
//「私の名前はじゃけぇです。年齢は28歳です。」
//従来の方法
const message1 = "私の名前は" + name + "です。年齢は" + age + "です。";
console.log(message1 + "2");
console.log(`私の名前は${name}です。年齢は${age}です。`);
