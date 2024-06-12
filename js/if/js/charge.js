let age = prompt("나이를 입력하세요.");

if (age > 19) {
  document.write("3,000원 입니다.")
} else if (age > 13){
  document.write("2,500원 입니다.")
} else if (age > 8) {
  document.write("2,000원 입니다.")
} else {
  document.write("1,000원 입니다.");
}