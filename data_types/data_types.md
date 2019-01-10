## C4E JS - Student book

### I. KIỂU DỮ LIỆU LÀ GÌ? (DATA TYPES)
Trong ngôn ngữ lập trình nói chung và JavaScript nói riêng, mỗi một biến (variable) sẽ mang một giá trị (value), và mỗi một value này sẽ mang một kiểu dữ liệu (data types).

*Ví dụ*:  
Trong đoạn lệnh sau:
<pre>
    let x = 100;
    let y = "100";
</pre>
-   x và y đều mang giá trị là 100, nhưng giá trị 100 của x là **số(number)**, còn giá trị "100" của y là **chuỗi(string)**.

-   Có thể thấy, giá trị của x và y nhìn qua thì có vẻ giống nhau, nhưng lúc thì là **number**, lúc lại là **string**. Việc nắm rõ cách sử dụng và phân biệt được các kiểu dữ liệu là hết sức quan trọng, nhầm lẫn có thể dẫn đến những kết quả không như mong đợi.

-   Trong JavaScript có tất cả 7 kiểu dữ liệu:
    -   string
    -   number
    -   boolean
    -   null
    -   object
    -   undefined
    -   array  
Chi tiết về các kiểu dữ liệu sẽ được đề cập ngay dưới đây.

### II. CHI TIẾT CÁC KIỂU DỮ LIỆU
## 1. String
-   Dữ liệu thuộc kiểu **String** là một chuỗi các ký tự được bọc trong dấu **quotes**. 
-   Một dữ liệu bất kỳ (kể cả số), khi được bọc trong **quotes** sẽ đều tính là **String**. Như vậy, nếu **Số** khi được bọc vào **quotes** sẽ không thể sử dụng để tính toán. Ví dụ:  
    <pre>
        let x = "1";
        let y = "2";
        console.log(x + y) // 12
        // Kết quả ra 12 vì x và y đều là dữ liệu thuộc kiểu String, nên phép cộng là hành động nối String, không phải là phép cộng trong toán học.
    </pre>

-   Trong JavaScript, có 3 loại **quotes**:
    -   Dấu nháy kép (Double quotes): 
        <pre>"TechKids"</pre>
    -   Dấu nháy đơn (Single quotes):
        <pre>'TechKids'</pre>
    -   Backticks:
        <pre>`TechKids`</pre>
-   Cả 3 loại **quotes** trên đều là dấu hiệu đánh dấu kiểu dữ liệu đang là **String**. Tuy nhiên **Backticks** đặc biệt hơn so với 2 loại còn lại:
    -   Backticks cho phép chèn biến hoặc biểu thức vào giữa **String** bằng cách gói các biến hoặc biểu thức đó vào trong **${}**. Ví dụ:  
    <pre>
        let name = "Quan";
        console.log(`Hello, ${name}!`) // Hello, Quan!
    </pre>
    <pre>
        console.log(`I was born in 1996, so I am ${2018 - 1996} years old.`) // I was born in 1996, so I am 22 years old.
    </pre>

    <i>**Bài tập**</i>  
    Kết quả sẽ như thế nào sau khi chạy đoạn code dưới đây?
    -   Code 1
        <pre>
            let myFeel = "happy";
            console.log("I feel ${feel}");
        </pre>
        *[Đáp án](result-1.md)*

    -   Code 2
        <pre>
            let x = "10 is greater than ";
            let y = "5";
            console.log(x+y)
        </pre>
        *[Đáp án](result-2.md)*

    -   Code 3
        <pre>
            console.log(`Result of 1+2 is ${1+2}`)
        </pre>
        *[Đáp án](result-3.md)*

    
## 2. Number
-   Kiểu dữ liệu **Number** biểu diễn các dữ liệu thuộc dạng **Số**, bao gồm cả số nguyên (integer) và số thực (float), có thể chứa dấu (-) để biểu thị số âm. 

-   Ví dụ:  
<pre>
    let myAge = 22;
</pre>

-   Nhắc lại một chút, một số được đặt bên trong **quotes** thì sẽ tính là **String**, không thể sử dụng để tính toán.  

    <i>**Bài tập**</i>  
    Kết quả sẽ như thế nào sau khi chạy đoạn code dưới đây?
    <pre>
        let x = 5;
        let y = "10";
        console.log(x+y);
    </pre>
    *[Đáp án](result-4.md)*

-   Nhắc đến **Number** thì sẽ không thể thiếu các loại toán tử (operators). Trong JavaScript chia làm 2 loại toán tử:
    -   **Toán tử số học (Arithmetic Operators)**:
        Giả sử có y = 10, bảng dưới đây sẽ mô tả và giải thích rõ ràng ý nghĩa của các loại toán tử số học
        


## 3. Boolean


## 4. Null
## 5. Object
## 6. Undefined
## 7. Array





