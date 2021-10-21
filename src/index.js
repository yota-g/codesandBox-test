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
  //buttonタグを作成する。
  const completeButton = document.createElement("button");
  completeButton.innerText = "完了";
  completeButton.addEventListener("click", () => {
    const completeItem = completeButton.parentNode;
    const completeTarget = completeItem.parentNode;
    document.getElementById("complete-list").appendChild(completeTarget);
  });
  const deleteButton = document.createElement("button");
  deleteButton.innerText = "削除";
  deleteButton.addEventListener("click", () => {
    //押された削除ボタンの親タグを未完了から削除
    const deleteTarget = deleteButton.parentNode.parentNode;
    //  console.log(deleteTarget);
    document.getElementById("incomplete-list").removeChild(deleteTarget);
  });
  //子要素に追加していく。
  liContent.appendChild(p);
  liContent.appendChild(completeButton);
  liContent.appendChild(deleteButton);
  // console.log(li);
  //divタグの子要素に各要素を設定。
  document.getElementById("incomplete-list").appendChild(li);
};

//未完了リストから指定の要素を削除
const delteFromIncompleteList = (target) => {
  document.getElementById.length("imcomplete-list").removeChild(deleteTarget);
};

document
  .getElementById("add-button")
  .addEventListener("click", () => onClickAdd());
