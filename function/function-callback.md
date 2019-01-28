## C4E JS - Student book

### IV. HÀM CALLBACKS (CALLBACKS FUNCTION)
**1. Giới thiệu cơ chế bất đồng bộ (async)**
-   Trước khi đi tìm hiểu về một trong những khái niệm tương đối phức tạp này, chúng ta cần phải nắm được cơ chế hoạt động **bất đồng bộ (async)** của JavaScript.

-   **Bất đồng bộ (Async)** là đặc thù của JS, bạn có thể hiểu đơn giản là JS chạy code **không chờ đợi**. Ví dụ sau đây sẽ giúp bạn hiểu hơn về cơ chế này:

    ``` javascript
        console.log("Hello my name is ONE");
        console.log("Hello my name is TWO");
        console.log("Hello my name is THREE");
    ```

-   Chạy đoạn code trên bạn sẽ thấy code được thực hiện lần lượt từ trên xuống dưới:  

    ![Function-Callback-1](../images/function/function-callback-1.png)

-   Sửa lại ví dụ trên một chút như sau:  
    ``` javascript
        console.log("Hello my name is ONE");

        setTimeout(function(){
            console.log("Hello my name is TWO");
        }, 3000);
        
        console.log("Hello my name is THREE");
    ```

-   Phần code bao ngoài câu lệnh **console.log("Hello my name is TWO");** bạn có thể tạm hiểu như sau: *ra lệnh cho JS **sau 3000 milisecond (tương đương 3 second) thì mới được in ra đoạn text "Hello my name is TWO"***. (Tham khảo thêm: https://www.w3schools.com/jsref/met_win_settimeout.asp)

-   Kết quả:  
![Function-Callback-1](../images/function/function-callback-2.png)

&rarr; Bạn hãy để ý đến dòng lệnh console.log() cuối cùng. Thay vì phải chờ đợi 3 giây để **"Hello my name is TWO"** được in ra màn hình rồi nó mới chạy, thì nó đã chạy ngay và cho ra kết quả trước khi **"Hello my name is TWO"** được in ra. Lý do là vì thời gian thực hiện của nó nhanh hơn. Cơ chế hoạt động này được gọi là **bất đồng bộ**

&rarr; Tóm lại, cơ chế **bất đồng bộ** tóm gọn lại như sau:
-   Tất cả các dòng lệnh, chức năng được chạy đồng thời. Dòng lệnh, chức năng nào nhanh hơn thì sẽ thực thi xong trước.

-   Nếu 2 dòng lệnh, chức năng cùng tốc độ, thì sẽ ưu tiên theo thứ tự từ trên xuống dưới.

**2. Callbacks**

Callback là một thứ vô cùng khó hiểu nếu chúng ta đọc khái niệm lý thuyết một cách thuần túy. Chính vì thế chúng ta sẽ tìm hiểu callback qua ví dụ sau:

-   Chi là một người gặp rất nhiều khó khăn trong việc quản lý thời gian biểu của mình. Xây dựng 2 function để giúp Chi quản lý thời gian biểu của mình, với các chức năng lần lượt là **học bài** và **đi ngủ**, sau đó gọi lần lượt cả 2 function để sử dụng như sau:

    ``` javascript
        function hocBai() {
            setTimeout(function() {
                console.log("study");
            }, 2000);
        }

        function diNgu() {
            console.log("zzZZZzzz...");
        }

        hocBai();
        diNgu();
    ```

-   Chạy thử đoạn code trên, bạn sẽ thấy Chi chưa kịp **học bài** đã vội **đi ngủ**. Để đảm bảo Chi thực hiện các việc theo thứ tự **học bài** &rarr; **đi ngủ**, chúng ta sẽ cần đến một điệp viên báo cho chúng ta biết, khi nào Chi **học bài** xong. Điệp viên này có mật danh là **callback**.

-   **callback** muốn biết chính xác lúc nào **hocBai** được thực hiện xong, thì **callback** phải nằm trong chính function **hocBai**, như sau:  

    ``` javascript
            function hocBai(callback) {
                setTimeout(function() {
                    console.log("study");
                    callback(); // đây là lúc việc học xảy ra xong, callback nằm đây để báo cáo lại cho chúng ta!
                }, 2000);
            }
    ```

-   Dừng lại ở đây một chút, để ý kỹ bạn sẽ thấy **callback** đang là một **parameter** của **hocBai**, và callback được sử dụng bằng câu lệnh **callback();**. Cặp ngoặc đơn bên cạnh **callback** cho thấy **hocBai** sẽ chỉ nhận parameter ***là một function***.

-   Bây giờ, nhiệm vụ của chúng ta là sẽ đi tạo ra một điệp viên thực thụ (function), đóng vai làm **callback**, chui vào bên trong **hocBai**, như sau:

    ``` javascript
            function hocBai(callback) {
                setTimeout(function() {
                    console.log("study");
                    callback(); // đây là lúc việc học xảy ra xong, callback nằm đây để báo cáo lại cho chúng ta!
                }, 2000);
            }

            function diNgu() {
                console.log("zzZZZzzz...");
            }

            // tạo ra một điệp viên thực thụ, tên là meCuaChi.
            // meCuaChi sẽ giúp Chi thực hiện việc diNgu ngay sau khi Chi học bài xong ( console.log("study") ).
            let meCuaChi = function() {
                diNgu();
            }

            hocBai(meCuaChi);
    ```
-   Đoạn code: 
    ``` javascript
        let meCuaChi = function() {
                diNgu();
            }

        hocBai(meCuaChi);
    ```
-   Có thể viết gọn lại như sau:
    ``` javascript
        hocBai(function() {
            diNgu();
        });
    ```

***Callback sẽ được áp dụng rất nhiều khi thực hiện các chức năng tương tác giữa người dùng và trang web, sẽ được hướng dẫn chi tiết trong các chương tới***
