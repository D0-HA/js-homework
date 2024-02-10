/* 

1. 클릭 이벤트 활성화
2. nav 클릭시 배경 색상 변경
3. 이미지 변경
4. 텍스트 변경
5. 함수 분리

*/

const navigation = document.querySelector("nav");
const nickName = document.querySelector(".nickName");
const mainImage = document.querySelector(".visual img");

// 2. nav 클릭시 배경 색상 변경
function setBgColor(index) {
  document.body.style.background = `linear-gradient(to bottom, ${
    data[index - 1].color[0]
  },${data[index - 1].color[1]})`;
}

// 3. 이미지 변경
function setImage(index) {
  mainImage.src = `./assets/${data[index - 1].name.toLowerCase()}.jpeg`;
}

// 4. 텍스트 변경
function setNameText(index) {
  nickName.innerHTML = `${data[index - 1].name}`;
}

// 1. 클릭 이벤트 활성화
function handleClick(e) {
  let li = e.target.closest("li");

  Array.from(li.parentElement.children).forEach((item) =>
    item.classList.remove("is-active")
  );
  li.classList.add("is-active");

  let index = li.dataset.index;

  setBgColor(index);
  setImage(index);
  setNameText(index);
}

navigation.addEventListener("click", handleClick);
