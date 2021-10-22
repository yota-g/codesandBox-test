import "./styles.css";

const onClickAdd = () => {
  //テキストボックスの値を取得し、初期化することが可能に
  // alert("buttonclick");
  const inputText = document.getElementById("add-text").value;
  //valueでinputの情報を取得することが可能。
  // console.log(inputText);
  document.getElementById("add-text").value = ""; //追加後にinput内を空に設定
  createIncompleteList(inputText);
};

//未完了リストから指定の要素を削除
const deleteFromIncompleteList = (target) => {
  document.getElementById("incomplete-list").removeChild(target);
};

//未完了リストに追加する関数。
const createIncompleteList = (text) => {
  //liとdivを作成する。
  const li = document.createElement("li");
  const div = document.createElement("div");
  div.className = "list-row";
  // console.log(div, li)
  const p = document.createElement("p");
  p.innerText = text;
  // console.log(p);
  //liの下にdiv、divの下にpを入れていく。
  let liContent = li.appendChild(div);
  //buttonタグを作成する。
  const completeButton = document.createElement("button");
  completeButton.innerText = "完了";
  completeButton.addEventListener("click", () => {
    //押された完了ボタンの親タグ(div)を未完了リストから削除
    deleteFromIncompleteList(completeButton.parentNode.parentNode);
    //完了リストに追加する要素
    const addTarget = completeButton.parentNode;
    // console.log(addTarget);
    //pタグの内容を取得
    const text = addTarget.firstElementChild.innerText;
    // console.log(text);
    //li以下を初期化
    addTarget.textContent = null;
    // console.log(addTarget);
    //pタグの作成。
    const p = document.createElement("p");
    p.innerText = text;
    //backボタンの作成
    const backButton = document.createElement("button");
    backButton.innerText = "戻す";
    backButton.addEventListener("click", () => {
      // alert();
      //incomplete-listに戻す。
      const backTarget = backButton.parentNode;
      const text = backTarget.firstElementChild.innerText;
      // console.log(text);
      createIncompleteList(text);
      //div以下を初期化
      backTarget.textContent = null;
      //complete-listから削除する。
      document
        .getElementById("complete-list")
        .removeChild(backTarget.parentNode);
    });
    //divの子要素に各要素を設定する。
    addTarget.appendChild(p);
    addTarget.appendChild(backButton);
    // console.log(addTarget.parentNode);
    const addList = addTarget.parentNode;
    // divの親要素を完了のulに追加する。
    document.getElementById("complete-list").appendChild(addList);
    // console.log(addList);
  });
  const deleteButton = document.createElement("button");
  deleteButton.innerText = "削除";
  deleteButton.addEventListener("click", () => {
    deleteFromIncompleteList(deleteButton.parentNode.parentNode);
    //押された削除ボタンの親タグを未完了から削除
    // const deleteTarget = deleteButton.parentNode.parentNode;
    //  console.log(deleteTarget);
    // document.getElementById("incomplete-list").removeChild(deleteTarget);
  });
  //子要素に追加していく。
  liContent.appendChild(p);
  liContent.appendChild(completeButton);
  liContent.appendChild(deleteButton);
  // console.log(li);
  //divタグの子要素に各要素を設定。
  document.getElementById("incomplete-list").appendChild(li);
};

document
  .getElementById("add-button")
  .addEventListener("click", () => onClickAdd());
