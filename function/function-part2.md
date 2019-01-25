## C4E JS - Student book

### III. HÀM CÓ RETURN (FUNCTION RETURN)

**1. Giới thiệu**

-   Sử dụng hàm tính tổng bạn đã làm ở cuối chương trước, truyền vào 2 parameter lần lượt là 1 và 2. Thực hiện các yêu cầu sau:

    -   In ra màn hình "The result of sum between one and two is 3"

    -   In ra màn hình "Hello, we are One and Two, our sum is 3"

&rarr; Nếu bạn đang gặp khó khăn trong việc in ra màn hình đúng như yêu cầu, thì đây là lúc bạn cần tới **return**.

**2. Khái niệm**

-   **return** là một **keyword** được sử dụng bên trong **function**, với mong muốn **function** chỉ trả ra kết quả của đoạn code bên trong. Từ đó chúng ta có thể sử dụng kết quả với nhiều tình huống khác nhau.

**3. Cú pháp**
-   Chúng ta sẽ tìm hiểu cách viết cũng như cách sử dụng keyword **return** thông qua việc giải quyết bài toán ở đầu chương:

-   Giả sử hàm tính tổng bạn đã biết được viết như sau:

    <pre>
        function add(a, b) {
            console.log(a+b);
        }
    </pre>

-   Thay vì **console.log(a+b)**, bạn hãy sửa thành:

    <pre>
        function add(a, b) {
            return a+b;
        }
    </pre>

-   Như vậy, **function add** lúc này sẽ chỉ có nhiệm vụ tính toán và đưa ra kết quả thôi, không hề liên quan đến việc in ra màn hình &rarr; Với việc sử dụng **return**, bạn có thể dễ dàng trình bày kết quả theo từng tình huống khác nhau. Cụ thể:
    <pre>
        console.log("The result of sum between one and two is ", add(1, 2));
        console.log("Hello, we are One and Two, our sum is ", add(1, 2));
    </pre>

**NHẬN XÉT:**

-   Lợi dụng tính linh hoạt khi sử dụng **return**, nên trên thực tế, những phần code liên quan đến input và output không bao giờ để chung với phần code thực hiện tính toán, chức năng

***Bài tập:***

1.  Viết function thực hiện xóa hết tất cả các dấu dollars ($) trong một string. Function có một parameter (nhận vào một đoạn string bất kỳ). **Return** ra một string mới không chứa dấu dollars ($).
Gợi ý: https://www.w3schools.com/jsref/jsref_replace.asp

2.  