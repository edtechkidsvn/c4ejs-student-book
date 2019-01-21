## C4E JS - Student book

### I. CÂU LỆNH RẼ NHÁNH LÀ GÌ? (BRANCHING STATEMENT)
**1. Giới thiệu**

-   Ngay từ chương đầu tiên, chúng ta đã đi vào học ngay vào ngôn ngữ lập trình, mà chưa hề quan tâm đến khái niệm **Lập Trình**.

-   **Lập trình** là công việc tạo ra những phần mềm, web, app, ứng dụng di động nhằm giảm tải sức lao động của con người. Lập trình viên là những người tạo ra những ứng dụng như vậy.

-   Khi lập trình ra một phần mềm, người lập trình sẽ phải lường trước được tất cả các tình huống mà người dùng sẽ thực hiện trong quá trình sử dụng sản phẩm của mình. Ví dụ:  
    -   A và B cùng sử dụng một chương trình. Chương trình này có nhiệm vụ nhận số tuổi của người dùng nhập vào, sau đó hiện lên thông báo người dùng đã đủ tuổi để được phép điều khiển ô tô hay chưa (18 tuổi trở lên).

    -   Làm sao để người lập trình biết được số tuổi mà người dùng nhập vào lớn hơn hay nhỏ hơn 18 để hiện lên màn hình thông báo phù hợp?


    &rarr; **Câu lệnh rẽ nhánh (Branching Statement)** sinh ra để đáp ứng nhu cầu này của người lập trình.


**2. Cú pháp**  
-   Cú pháp đầy đủ của **câu lệnh rẽ nhánh** như sau:

    <pre>
        if (dieuKien) {
            // đoạn code được thực hiện
        } else if (dieuKien) {
            // đoạn code được thực hiện
        } else {
            // đoạn code được thực hiện
        }
    </pre>

-   Thông qua ví dụ dưới đây bạn sẽ hiểu rõ về cú pháp trên:  

    <pre>
        let age = prompt("Your age? ")
        
        if (age < 10) {
            console.log("You are Baby!");
        } else if (age < 18) {
            console.log("You are Teenager!");
        } else {
            console.log("You are Adult");
        }
    </pre>

-   Đoạn code trên giải nghĩa như sau:  
    -   Cho người dùng nhập tuổi, số tuổi mà người dùng nhập sẽ được lưu vào biến **age**.

    -   **Nếu** (**if**) age nhỏ hơn 10 thì màn hình sẽ in ra "You are Baby!"

    -   **Còn nếu** (**else if**) age nhỏ hơn 18 thì màn hình sẽ in ra "You are Teenager!"

    -   **Những trường hợp còn lại** (**else**), màn hình sẽ in ra "You are Adult!"

-   Sau khi đọc xong phần giải thích, bạn có thể chạy thử đoạn code trên. Cho dù bạn có nhập độ tuổi là bao nhiêu đi nữa, thì tại 1 thời điểm, chương trình luôn chỉ hiển thị ra màn hình 1 thông báo, tùy thuộc vào số tuổi mà bạn nhập.

-   Nếu tinh ý 1 chút bạn sẽ thấy đoạn " **Còn nếu** age nhỏ hơn 18 thì màn hình sẽ in ra 'You are Teenager!' " **không hợp lý**:  
    -   **age nhỏ hơn 18** cũng có nghĩa là **age nhỏ hơn 10**, như vậy thì màn hình sẽ phải in ra đồng thời "You are Baby!" và "You are Teenager!". Tuy nhiên khi code và chạy thử bạn sẽ thấy màn hình chỉ in ra "You are Teenager!". Tại sao lại như vậy?

&rarr; Lý do là vì khi thực hiện code của bạn, JavaScript sẽ kiểm tra điều kiện của **if**, nếu không đúng thì mới kiểm tra tiếp điều kiện của **else if**, nếu không đúng nữa thì mới chạy đoạn lệnh trong **else**. Vậy trong trường hợp trên, khi JS đã phải kiểm tra đến **age < 18** thì có nghĩa là điều kiện **age < 10** đã sai mất rồi, đồng nghĩa với việc **age** mà người dùng nhập vào **đã lớn hơn 10** rồi.

***Lưu ý:*** **Else** nghĩa là **Những trường hợp còn lại**, đã là **còn lại** thì sẽ không có bất kỳ một điều kiện nào đằng sau nó, đoạn code phía trong **else** chỉ được thực hiện khi điều kiện của **if** và **else if** đều sai


**3. Bài tập**  
1.  Cho người dùng nhập vào chiều cao, cân nặng. Tính ra chỉ số BMI dựa vào công thức, sau đó in ra thông báo tương ứng:  
    <pre>
        BMI = weight/(height*height)
        Trong đó:
        weight: cân nặng
        height: chiều cao
        
        < 18.5: Gầy
        18.5 - 24.9: Bình thường
        25 - 29.9: Hơi béo
        30 - 34.9: Béo phì cấp độ 1
        30 - 34.9: Béo phì cấp độ 2
        35 - 39.9: Béo phì cấp độ 3
    </pre>

2.  Viết chương trình tính số nghiệm của phương trình bậc 2, dựa vào 3 số a, b, c mà người dùng nhập vào:  

    -   Nếu delta > 0, thông báo "Phương trình có 2 nghiệm phân biệt".

    -   Nếu delta < 0, thông báo "Phương trình vô nghiệm".

    -   Nếu delta = 0, thông báo "Phương trình có 1 nghiệm duy nhất".