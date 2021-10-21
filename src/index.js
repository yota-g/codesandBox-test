import "./styles.css";

const onClickAdd = () => {
  //テキストボックスの値を取得し、初期化することが可能に
  // alert("buttonclick");
  const inputText = document.getElementById("add-text").value;
  //valueでinputの情報を取得することが可能。
  // console.log(inputText);
  document.getElementById("add-text").value = ""; //追加後にinput内を空に設定
  //liとdivを作成する。
  const li = document.createElement("li");
  const div = document.createElement("div");
  div.className = "list-row";
  // console.log(div, li)
  const p = document.createElement("p");
  p.innerText = inputText;
  // console.log(p);
  //liの下にdiv、divの下にpを入れていく。
  let liContent = li.appendChild(div);
  liContent.appendChild(p);
  liContent.appendChild();
  // console.log(li);
  //divタグの子要素に各要素を設定。
  document.getElementById("incomplete-list").appendChild(li);
};

document
  .getElementById("add-button")
  .addEventListener("click", () => onClickAdd());
