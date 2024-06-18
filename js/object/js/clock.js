let today = new Date();

const year = today.getFullYear();
const month = today.getMonth() + 1;
const date = today.getDate();
const day = today.getDay();

let day2 = "";
switch (day) {
  case 0:
    day2 = "일";
    break;
  case 1:
    day2 = "월";
    break;
  case 2:
    day2 = "화";
    break;
  case 3:
    day2 = "수";
    break;
  case 4:
    day2 = "목";
    break;
  case 5:
    day2 = "금";
    break;
  case 6:
    day2 = "토";
    break;
};

let displayDate = document.getElementById("today");
// innerHTML은 태그도 저장 가능하지만 innerText는n 태그도 문자로 취급!
displayDate.innerHTML = `${year}년 ${month}월 ${date}일 ${day2}요일`;

const clock = function () {
  let now = new Date();
  let hour = now.getHours();
  let minute = now.getMinutes();
  let second = now.getSeconds();

  hour = (hour < 12) ? "오전" + hour : "오후 " + (hour-12);
  minute = (minute < 10) ? "0" + minute : minute;
  second = (second < 10) ? "0" + second : second;
    

  let displayTime = document.getElementById("clock");
  displayTime.innerHTML = `${hour}시 ${minute}분 ${second}초`;

}

setInterval(clock, 1000);