## C4E JS - Student book

### I. NETWORKING LÀ GÌ?
**1. Giới thiệu**

-   Nhắc đến web thì không thể không nhắc đến mạng internet. Tất cả những gì chúng ta học từ đầu khóa đến giờ đều là những phần không liên quan gì tới mạng.

-   Một trang web thường sẽ hoạt động dựa trên mô hình **Client - Server**:
    -   **Client** hiểu đơn giản là trình duyệt web của bạn.
    -   **Server** có thể hiểu là một chiếc máy tính lớn với cấu hình đặc biệt để có thể lưu trữ và vận hành tốt toàn bộ dữ liệu của trang web.

-   Trong khóa học này, chúng ta sẽ sử dụng JavaScript để phát triển trang web từ phía **Client** trước. Với vai trò là một người lập trình để phát triển trang web, tất cả những thao tác, xử lý vượt ra khỏi phạm vi máy tính (Browser hoặc Client) của bạn, được gọi chung là **Networking**.

### II. CÁC GIAO THỨC CƠ BẢN

-   Về cơ bản thì **Client** và **Server** sẽ giao tiếp với nhau thông qua **các giao thức (HTTP methods)**, trong chương này chúng ta sẽ làm quen với một trong các giao thức được sử dụng nhiều nhất là **GET**

-   Để có một cái nhìn tổng quát, chúng ta sẽ sử dụng ví dụ chung sau đây:

    -   Giả sử bạn đi đến ngân hàng, gặp nhân viên ngân hàng với mong muốn lập tài khoản để gửi tiết kiệm. Lúc này sẽ xuất hiện cuộc trò chuyện giữa bạn và nhân viên.

    -   Bạn sẽ đóng vai trò là **Client**, nhân viên là **Server**.

    -   Quy trình gửi tiết kiệm như sau:

        ***B1***: Bạn nhận tờ khai thông tin cá nhân từ nhân viên (form).

        ***B2***: Bạn điền thông tin cá nhân vào form và đưa lại cho nhân viên.

    -   Ở **B1**:
        -   Hãy tưởng tượng ban đầu nhân viên gặp bạn và không nói gì, thì bạn sẽ phải yêu cầu nhân viên đưa form cho bạn. 

        -   Sau khi nhân viên đưa form ra và bạn cầm lấy form trên tay rồi, tức là bạn đã **lấy** (**GET**) một cái form từ nhân viên thành công.

-   Đối chiếu với ví dụ trên, **GET** bao gồm 2 bước:
    -   Gửi yêu cầu
    -   Nhận về form

-   Bạn chỉ cần quan tâm đến bước đầu tiên, tức là làm sao để có thể gửi yêu cầu, hay nói cách khác là thực hiện **GET** thôi. Còn bước sau là hệ quả sau khi bước một thành công.

-   Cú pháp như sau:
    -   Tạo một function tên là myFunction
        ```js
        function myFunction(){
            
        }
        ```

    -   Chuẩn bị một link API, ví dụ: `https://reqres.in/api/users`
    
        (Nguồn: https://reqres.in) 
        
        (khóa học này không tập trung quá nhiều vào định nghĩa API, mà chỉ tập trung vào cách làm việc với nó, nên bạn có thể tạm hiểu API là một link chứa dữ liệu. Bạn có thể tìm kiếm các link API chứa data có sẵn trên mạng)

    -   Sử dụng function **fetch()** có sẵn của JavaScript để **GET** dữ liệu từ API trên và lưu vào biến **response**, sau đó in ra **response** như sau:

        ```js
        function myFunction() {
            const response = fetch('https://reqres.in/api/users');

            console.log(response);
        }       
        ```

    -   Vì JavaScript hoạt động bất đồng bộ, nên để đảm bảo function **fetch()** hoàn thành xong nhiệm vụ của nó trước khi in ra màn hình, chúng ta sử dụng **async/await**:

        ```js
        async function myFunction() {
            const response = await fetch('https://reqres.in/api/users');

            console.log(await response.json());
        } 
        ```

    -   Ở dòng in ra màn hình có thêm **.json()** và **await** đằng trước, thì bạn có thể hiểu như sau:
        -   **await** để đảm bảo dòng lệnh in ra chỉ được thực hiện khi **fetch dữ liệu thành công**.
        
        -   **.json()** để lấy ra được dữ liệu thực sự có trong API.

    -   Như vậy là function **myFunction()** đã được hoàn thành. Bây giờ chúng ta chỉ việc gọi **myFunction()**:

        ```js
            myFunction();
        ```
    -   Đến đây là chúng ta đã hoàn thành xong việc lấy dữ liệu từ một API bất kỳ, kết quả như sau:

        ![Networking-1](../images/networking/networking-1.png)

    -   Dữ liệu này hoàn toàn trùng khớp với dữ liệu khi bạn truy cập trực tiếp vào link API trên.

***Bài tập***
-   Bên cạnh **GET** thì **POST** cũng là một method được sử dụng thường xuyên trong quá trình phát triển web. Để có thể hình dung được method **POST**, bạn hãy quay lại một chút với ví dụ gửi tiết kiệm ở gần đầu chương:

    -   Ở **B2**, bạn điền thông tin cá nhân vào form và đưa lại cho nhân viên.

    -   Nói cách khác, bạn đang **gửi** (**POST**) cho nhân viên cái form chứa đầy đủ thông tin cần thiết.

&rarr; Tìm hiểu và thực hiện **POST** dữ liệu có dạng như sau lên API `https://reqres.in/api/users`.

```json
    {
        "name": "Quan",
        "job": "Massage for dev"       
    }
```
-   Kết quả sau khi thực hiện thành công sẽ như sau:
    ![Networking-2](../images/networking/networking-2.png)

-   ***Gợi ý***: Chỉ thực hiện thay đổi function fetch()

*Bài tiếp theo [CSS](../css/css.md)*
