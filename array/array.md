## C4E JS - Student book

### I. MẢNG LÀ GÌ? (ARRAY)
**1. Giới thiệu**  
-   Hãy tưởng tượng bạn là người viết chương trình quản lý menu các món ăn cho một nhà hàng. Bếp trưởng sẽ là người sử dụng phần mềm của bạn.

-   Ban đầu nhà hàng khai trương với một menu gồm 5 món ăn, bạn liệt kê chúng như sau:  
    <pre>
        let monAn1 = "com";
        let monAn2 = "thit";
        let monAn3 = "ca";
        let monAn4 = "trung";
        let monAn5 = "rau";
    </pre>

-   Một ngày đẹp trời, bếp trưởng muốn thêm món **bún** vào menu, lúc này bạn sẽ nghĩ ngay đến việc bật máy tính -> mở code ra -> khai báo thêm 1 biến mới để lưu thêm **bún** vào menu:  
    <pre>
        let monAn1 = "com";
        let monAn2 = "thit";
        let monAn3 = "ca";
        let monAn4 = "trung";
        let monAn5 = "rau"; 
        let monAn6 = "bun"; 
    </pre>

- Đến đây mọi chuyện vẫn ổn, chưa có gì khó khăn, nhưng bây giờ nhà hàng tuyển thêm 4 người phụ bếp nữa, mỗi người cảm thấy cần phải thêm một món mới của riêng họ vào menu. Lúc này thì có 1 vài vấn đề thực sự xảy ra:  
    -   Càng ngày nhu cầu thêm mới món ăn vào menu ngày càng nhiều, chưa kể sau một thời gian, có những món không mấy ai dùng, nhà hàng cần phải xóa khỏi menu, hoặc sửa thành món khác.

    -   Bạn không thể phân thân ra để phục vụ từng ấy con người, mỗi người một nhu cầu khác nhau, vào những thời điểm khác nhau.

    -   Giả sử bạn có thể đáp ứng được nhu cầu của các phụ bếp cũng như bếp trưởng một cách thủ công như vậy, thì việc lập trình cũng không còn ý nghĩa.

<!-- &rarr; May mắn thay, có một phương pháp để giải quyết vấn đề của bạn, đó là sử dụng **Array (Mảng)** -->
&rarr; **Array (Mảng)** được sinh ra để giải quyết vấn đề này. Với **Array**, bạn hoàn tự động hóa việc đáp ứng tất cả những hành động, nhu cầu như thêm, sửa, xóa món ăn của bất kỳ ai, vào bất kỳ thời điểm nào.

**2. Khái niệm**  
-   **Array** là một phương pháp dùng để lưu trữ nhiều dữ liệu trong một biến.

-   **Array** được dùng để lưu trữ dữ liệu, vậy nên **Array** cũng được tính là 1 **Kiểu Dữ Liệu**.

**3. Cú pháp**  
<pre>
    let monAn = ["com", "thit", "ca", "trung", "rau"];
</pre>

-   Tất cả các món ăn (phần tử) được liệt kê trong cặp ngoặc vuông ([]), ngăn cách nhau bởi dấu phẩy (,)

### II. CÁC THAO TÁC VỚI MẢNG (ARRAY)

-   Vì **Array** dùng để lưu trữ nhiều dữ liệu, nên cũng được tính là một **Kiểu Dữ Liệu**.

-   Khi học về một **Kiểu Dữ Liệu** mới, ngoại trừ những **Kiểu Dữ Liệu** cơ bản chỉ lưu được một dữ liệu đơn (như **String**, **Number**, ...), thì sẽ cần phải học 4 kỹ năng cơ bản sau đây để có thể làm việc thành thạo được với nó:

    -   <b><u>C</u></b>reat: **Thêm mới** dữ liệu.
    -   <b><u>R</u></b>ead: **Đọc, truy cập** dữ liệu.
    -   <b><u>U</u></b>pdate: **Cập nhật** dữ liệu.
    -   <b><u>D</u></b>elete: **Xóa** dữ liệu.

-   Trước khi đi vào học 4 thao tác trên, bạn cần phải nắm được khái niệm **Độ Dài Của Mảng (Length)**

    <pre>
        let monAn = ["com", "thit", "ca", "trung", "rau"];
    </pre>

    Trong **Array monAn**, bằng mắt thường bạn có thể dễ dàng thấy có 5 món ăn. Tuy nhiên hãy thử tưởng tượng **Array monAn** chứa hàng chục thậm chí hàng trăm món ăn, chắc chắn là bạn không đủ kiên nhẫn để đếm xem **Array monAn** chứa bao nhiêu món ăn.

    &rarr; JS cung cấp cho bạn một cách để có thể nhanh chóng biết được số lượng phần tử có trong một **Array**:  

    <pre>
        let monAn = ["com", "thit", "ca", "trung", "rau"];
        let soLuongMonAn = monAn.length;
        console.log(soLuongMonAn) // 5
    </pre>

-   Sau khi đã nắm được cách kiểm tra số lượng phần tử có trong một **Array**, chúng ta đã có thể sẵn sàng để làm quen với 4 thao tác cơ bản như đã giới thiệu ở trên.

**1. Create**  

**2. Read**  

**3. Update**  

**4. Delete**  

