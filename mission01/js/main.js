/*

1. email 정규표현식을 사용한 validation
- 입력받은 ID가 조건에 맞는 형식인지 확인
- 일치하면 Pass, 불일치하면 에러 메세지 출력

2. pw 정규표현식을 사용한 validation
- 입력받은 PW가 조건에 맞는 형식인지 확인
- 일치하면 Pass, 불일치하면 에러 메세지 출력

3. 상태 변수 관리
- ?

4. 로그인 버튼을 클릭시 조건처리
- 상태 변수의 값에 따라서 조건처리
- true일 때, welcome 페이지로 이동
- false일 때, 로그인 실패 메세지 출력

*/

const user = {
  id: "asd@naver.com",
  pw: "spdlqj123!@",
};

const userEmail = document.querySelector("#userEmail");
const userPassword = document.querySelector("#userPassword");
const submit = document.querySelector(".btn-login");

userEmail.addEventListener("input", handleCheckId);
userPassword.addEventListener("input", handleCheckPw);
submit.addEventListener("click", handleSubmit);

function emailReg(text) {
  const re =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  return re.test(String(text).toLowerCase());
}

function pwReg(text) {
  const re = /^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[!@#$%^*+=-]).{6,16}$/;
  return re.test(String(text).toLowerCase());
}

// 1. email 정규표현식을 사용한 validation
function handleCheckId() {
  if (emailReg(userEmail.value) || userEmail.value === "") {
    console.log("success");
    userEmail.classList.remove("is--invalid");
  } else {
    console.log("error!");
    userEmail.classList.add("is--invalid");
  }
}

// 2. pw 정규표현식을 사용한 validation
function handleCheckPw() {
  if (pwReg(userPassword.value) || userPassword.value === "") {
    console.log("success");
    userPassword.classList.remove("is--invalid");
  } else {
    console.log("error!");
    userPassword.classList.add("is--invalid");
  }
}

// 3. 상태 변수 관리

// 4. 로그인 버튼을 클릭시 조건처리
function handleSubmit(e) {
  e.preventDefault();

  if (userEmail.value === user.id && userPassword.value === user.pw) {
    console.log("success");
    window.location.href = "welcome.html";
  } else {
    console.log("error!");
    alert("아이디 또는 비밀번호를 잘못 입력했습니다.");
  }
}
