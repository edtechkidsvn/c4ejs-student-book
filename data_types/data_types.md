## C4E JS - Student book

### I. KIỂU DỮ LIỆU LÀ GÌ? (DATA TYPES)
**1. Ví dụ thực tế**
<!-- -   Hãy tưởng tượng một ngày đẹp trời bạn đến gặp bác sĩ để khám, bạn mong đợi sẽ mang về nhà một đơn thuốc phù hợp về căn bệnh mà mình đang mắc phải.

-   Khi đã xác định được loại bệnh của bạn, bác sĩ mới có thể kê đơn thuốc. Nếu như không biết được bạn đang mắc phải bệnh gì, sẽ rất khó để bác sĩ có thể kê cho bạn những loại thuốc phù hợp. Nói cách khác, "kê đơn thuốc phù hợp" chính là **tìm ra giải pháp giải quyết vấn đề**, nhờ xác định được loại bệnh của bạn mà bác sĩ có thể làm điều này một cách dễ dàng. -->

-   Hãy tưởng tượng một ngày đẹp trời bạn nổi hứng muốn làm bánh gato tặng người yêu. Điều quan trọng nhất bạn phải có trước khi bắt tay vào làm bánh, đó chính là nguyên liệu.


-   Để làm được một chiếc bánh gato hoàn chỉnh thì sẽ phải cần rất nhiều nguyên liệu, trong ví dụ này sẽ chỉ nói đến 2 loại nguyên liệu cơ bản nhất xuất hiện trong tất cả các loại bánh gato. Đó là **bơ** và **trứng**. Vấn đề bây giờ của bạn là không biết dùng chúng như thế nào và có tác dụng gì. Sau một hồi tìm hiểu, bạn nhận ra **bơ** có tác dụng làm cho bánh thơm hơn, còn **trứng** sẽ khiến chiếc bánh tơi xốp hơn.

-   Trong ví dụ trên, có thể coi **bơ** và **trứng** là 2 **Kiểu Dữ Liệu** khác nhau, dùng với 2 mục đích khác nhau, mặc dù cùng góp sức tạo nên chiếc bánh.
<!-- -   Giả sử trong nhà bếp của bạn đã có đầy đủ tất cả các loại nguyên liệu để có thể tạo ra chiếc bánh, nhưng vấn đề bây giờ của bạn là không biết phải chọn cụ thể thứ nguyên liệu nào trong số một vài nguyên liệu tương đương nhau. Chúng ta sẽ lấy một vài ví dụ về những nguyên liệu cơ bản nhất, luôn xuất hiện trong bất kỳ chiếc bánh gato nào:

    -   Trong tất cả các loại **bột**, bạn phải chọn bột mỳ, chứ không thể là bột chiên giòn hay một loại bột nào khác.

    -   Giữa muối và nước mắm, gọi chung là **gia vị mặn**, bạn phải chọn muối.

    -   Bạn không thể lấy dầu hào để thay thế cho dầu ăn được, mặc dù chúng đều là **dầu**. -->

<!-- -   Trong ví dụ trên, có thể coi **bột**, **gia vị mặn** hay **dầu** là **Dữ Liệu**, **bột mỳ**, **muối** và **dầu ăn** là **Kiểu Dữ Liệu (Data Types)**. Khi đã có trong tay đủ các nguyên liệu cần thiết, bạn đã có thể bắt tay vào làm bánh. Nói cách khác, khi đã xác định được **Kiểu** của **Dữ Liệu**, bạn hoàn toàn có thể yên tâm để bắt đầu làm việc với chúng.

    *Nguồn:https://www.quora.com* -->

**2. Khái niệm**  

-   Chỉ có các loại số (number) thì mới có thể sử dụng để tính toán, còn văn bản chữ và các loại ký tự thì không. Bản thân máy tính không thể phân biệt được đâu là chữ và đâu là số. Vậy nên tất cả các ngôn ngữ lập trình đều sẽ có một vài quy tắc để phân biệt chúng, JavaScript cũng không ngoại lệ. Nắm được các quy tắc này, bạn sẽ dễ dàng thao tác và xử lý được với mọi loại dữ liệu.

-   Trong ngôn ngữ lập trình nói chung và JavaScript nói riêng, mỗi một biến (variable) sẽ mang một giá trị (value), và mỗi một value này sẽ mang một kiểu dữ liệu (data types).

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
Trong chương này sẽ chỉ đề cập đến một số kiểu dữ liệu quan trọng nhất, người lập trình sẽ gặp phải nhiều nhất trong một dự án, đó là **String** và **Number**. Các kiểu dữ liệu còn lại sẽ được đề cập trong các chương sau.

### II. CHI TIẾT CÁC KIỂU DỮ LIỆU
**1. String**
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

    
**2. Number**
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

-   Nhắc đến **Number** thì sẽ không thể thiếu các loại toán tử (operators). Trong JavaScript chia làm rất nhiều các loại toán tử khác nhau, trong chương này sẽ chỉ đề cập đến một số loại toán tử sử dụng thường xuyên nhất. Các loại toán tử trong chương này bao gồm:

    -   **Toán tử số học (Arithmetic Operators)**:  
        Giả sử có A = 10, B = 20, bảng dưới đây sẽ mô tả và giải thích rõ ràng ý nghĩa của các loại toán tử số học

        ![Data-Type-Arithmetic](../images/data_types/data_types_arithmetic.png)  
        (*Nguồn: https://www.vietjack.com*)


    -   **Toán tử so sánh (Comparison Operators)**  
        Giả sử có A = 10, B = 20, bảng dưới đây sẽ mô tả và giải thích rõ ràng ý nghĩa của các loại toán tử so sánh

        ![Data-Type-Comparison](../images/data_types/data_types_comparison_3.png)  
        (*Nguồn: https://www.vietjack.com*)

    -   **Toán tử Logic (Logical Operators)**
        Giả sử có A = 10, B = 20, bảng dưới đây sẽ mô tả và giải thích rõ ràng ý nghĩa của các loại toán tử logic  

        ![Data-Type-Logic](../images/data_types/data_types_logical.png)  
        (*Nguồn: https://www.vietjack.com*)

    -   **Toán tử typeof (The typeof Operator)**  
        
        Toán tử typeof sẽ giúp bạn kiểm tra **kiểu dữ liệu** của một **dữ liệu** bất kỳ, cách sử dụng như sau:
        <pre>
            typeof "John"                 // Returns string 
            typeof 3.14                   // Returns number
            typeof NaN                    // Returns number
            typeof false                  // Returns boolean
            typeof [1, 2, 3, 4]           // Returns object
            typeof {name:'John', age:34}  // Returns object
            typeof new Date()             // Returns object
            typeof function () {}         // Returns function
            typeof myCar                  // Returns undefined (if myCar is not declared)
            typeof null                   // Returns object
        </pre>  
        (*Nguồn: https://www.w3schools.com*)
        
        Trong ví dụ trên bạn sẽ thấy một vài kiểu dữ liệu mới lạ, nhưng **đừng lo lắng**, những kiểu dữ liệu này sẽ được đề cập tới ở các chương sau.  

*Bài tiếp theo [Vòng lặp (Loops)](../loops/loops.md)*
    





