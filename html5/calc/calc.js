var buttons = document.querySelectorAll("button");
for (var i = 0; i < buttons.length; i++) {
  // 반복 실행
  buttons[i].addEventListener("click", function (event) {
    // EventListener → click 이벤트에 실행되는 코드
    var text = event.target.innerText;
    console.log(text);
    // 1. 변수 사용
    var origin = document.querySelector("input").value;
    document.querySelector("input").value = origin + text;
    //  // 2. 식 하나로
    //  document.querySelector('input').value =
    //  document.querySelector('input').value + text;
    //  // 3. 축약 연산자. input의 value에 text를 추가(연결)
    //  document.querySelector('input').value += text;
  });
}
