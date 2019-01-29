// Đoạn code dưới đây mô phỏng 1 chương trình gồm 2 phần:
//  Phần 1:
//  -   Cho người dùng nhập vào một chuỗi các số, ngăn cách nhau bởi dấu cách (space)
//  -   In ra màn hình số lớn nhất trong dãy số người dùng vừa nhập

//  Phần 2:
//  -   Cho người dùng nhập vào một đoạn text có chứa dấu cách
//  -   In ra màn hình đoạn text người dùng vừa nhập, đã được loại bỏ hết dấu cách (space)

//  Yêu cầu:
//  -   Tối ưu đoạn code phía dưới bằng cách tìm ra chức năng chung của 2 phần, gộp lại thành một function,
//  sau đó sử dụng chung function đó cho cả 2 phần


// Part 1
let listNumbers = [];
let number = "";

let inputNumbers = prompt("Enter your list number, separated by space");

for (let index = 0; index < inputNumbers.length; index++) {
    
    if (inputNumbers[index] !== " ") {
        number += inputNumbers[index];
    } else {
        number = "";
    }

    if (number !== "") {
        listNumbers.push(parseInt(number));
    }        
}

// Phần code tìm giá trị lớn nhất
let maxNumber = -999999;
for (let index = 0; index < listNumbers.length; index++) {
    if (listNumbers[index] > maxNumber) {
        maxNumber = listNumbers[index];
    }
}

console.log(maxNumber);


// Part 2
let sentence = prompt("Enter your sentence, separated by space");
let sentenceNoSpace = "";
for (let index = 0; index < sentence.length; index++) {
    if (sentence[index] !== " ") {
        sentenceNoSpace += sentence[index];
    }
}

console.log(sentenceNoSpace);



// Gợi ý:
//  -   Viết một function nhận vào một parameter là một string bất kỳ
//  -   Return ra một string không chứa dấu cách