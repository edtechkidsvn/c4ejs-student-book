## C4E JS - Student book

### I. BIẾN LÀ GÌ? (VARIABLES)

**1. Ví dụ thực tế**

-   Đức là một nhân viên phục vụ bàn trong một nhà hàng tên là Pectopah, mức lương cố định của Đức là 100k/giờ.

-   Ngoài mức lương cố định trên, mỗi giờ Đức có thể được nhận thêm tiền boa (tips) từ khách hàng.

-   Số tiền mà Đức nhận được mỗi giờ có thể được biểu diễn bởi biểu thức sau:  

    <pre>100+tips</pre>

-   Số tiền boa (tips) mỗi giờ có thể ít, có thể nhiều hoặc không có tùy thuộc vào nhiều yếu tố như: giờ đó đông hay vắng khách, thái độ của khách đang vui hay buồn,...Nói tóm lại, **tips có thể thay đổi (vary)**.

-   Vậy tổng số tiền mà Đức nhận được mỗi giờ phụ thuộc vào số tiền tips mà Đức nhận được trong giờ đó.  

Trong ví dụ trên, **tips** được gọi là biến (variable).

**2. Khái niệm**

-   Trong máy tính, biến là một vùng không gian trống trong RAM, dùng để lưu trữ giá trị (value). Nói cách khác, trong lập trình có thể coi biến như một cái hộp, bên trong nó chứa một value nào đó. 

-   Tại một thời điểm, một biến chỉ có thể lưu trữ được một value.

**3. Cú pháp**
-   Một biến cần phải được khai báo trước khi sử dụng.  

-   Cú pháp khai báo biến trong javascript như sau: 

    <pre>let firstVariable;</pre>
-   Ở câu lệnh trên:
    -   "firstVariable" là tên biến, có thể đặt tùy ý, lưu ý là cần phải đặt tên biến có nghĩa và phải tuân thủ theo các quy tắc đặt tên. 

    -   "let" là từ khóa (keyword) của javascript, sử dụng để khai báo một biến. Có 3 cách để khai báo một biến trong javascript, tương ứng với 3 keywords **var**, **let** và **const**. Chúng được gọi là **declarations of variables**. Ý nghĩa và cách sử dụng 3 keywords này sẽ được đề cập cụ thể ở phần II.
        
-   Một vài ví dụ về cách khai báo biến:  

    <pre>
        let myMovie;
        const bestSchool;
        var dateOfBirth;
    </pre>

**4. Quy tắc đặt tên**  

Một đoạn code viết ra với những tên biến mang ý nghĩa rõ ràng, sẽ khiến cho việc đọc code và sửa lỗi trở nên dễ dàng hơn. Ngoài việc cần phải mang ý nghĩa rõ ràng, tên biến trong lập trình sẽ phải tuân thủ một số quy tắc đặt tên như sau:

-   Có thể bao gồm cả chữ và số.

-   **Không được** bắt đầu bằng số.

-   **Không được** chứa những ký tự đặc biệt (khoảng trắng cũng tính là ký tự đặc biệt), ngoại trừ "_" và "$".

-   **Không được** trùng với các từ khóa (keywords) của javascript.

-   Các keyword có trong javascript:  

    ![Keywords](../images/variable/keywords.png)  
-   Tên của biến là duy nhất, có thể coi tên của biến là định danh (indentifiers).
-   Ví dụ:
    -   Tên biến hợp lệ: dateOfBirth, temp99, $credit, _name,...

    -   Tên biến không hợp lệ: 22CThanhCong, @gmail.com, break,...  

    <i>**Bài tập**</i>  
    1.  Sau khi chạy những đoạn code dưới đây, x bằng bao nhiêu?  
        -   Code 1
            <pre>
                let x = 5;
                let x = 10;
            </pre>
            *[Đáp án](result-1.md)*
            -   Code 2
            <pre>
                let x = 5;
                x = 10;
            </pre>
            *[Đáp án](result-2.md)*

    
    
    2.  Những cách khai báo biến nào sau đây hợp lệ:  
        <pre>
            var break;
            let Break;
            let year-of-birth;
            const MYFAVORITE;
            const tech_kids;
            const 4ever;
        </pre>
        *[Đáp án](result-3.md)*


### II. CÚ PHÁP KHAI BÁO BIẾN, PHẠM VI HOẠT ĐỘNG CỦA BIẾN (TYPE SYNTAX, VARIABLE SCOPE)
**1. Phạm vi hoạt động của biến (Variable Scope)**  
Trước khi đến với cách sử dụng các loại **declarations of variables (var, let, const)**, chúng ta hãy đi tìm hiểu khái niệm **Scope**.  

Liên hệ một chút với ví dụ ở đầu chương:
-   Khi còn đang ở trong nhà hàng Pectopah, tất cả khách hàng đều có quyền yêu cầu Đức phục vụ họ, vì lúc này Đức đang đóng vai trò là nhân viên phục vụ bàn, Đức có trách nhiệm phải hoàn thành nhiệm vụ của một người phục vụ.

-   Hết giờ làm việc, Đức bước ra khỏi nhà hàng, không có bất cứ một ai có quyền yêu cầu Đức phục vụ món ăn nữa, vì lúc này đã là ngoài giờ làm việc, Đức không đóng vai trò là nhân viên phục vụ bàn. (Giả sử Đức không được phép ra khỏi nhà hàng trong giờ làm việc)

Trong ví dụ trên, có thể hiểu nhà hàng Pectopah là **Scope** hay **phạm vi hoạt động** của Đức - trong vai trò nhân viên phục vụ. Ra khỏi **Scope**, Đức không còn hoạt động như một nhân viên phục vụ bàn nữa.

Khi đã hình dung ra được **Scope**, chúng ta có thể dễ dàng nắm được cách sử dụng của các loại **declarations of variables (var, let, const)** như sau:
-   **var**: khai báo một biến, có phạm vi truy cập xuyên suốt function chứa nó. (Chi tiết về function sẽ được đề cập trong các chương sau, có thể tạm hiểu function là một loại scope mà khi ở bên ngoài function, không thể truy cập được những biến đã được khai báo bởi var ở bên trong function).

    <pre>
        function myFunction() {
            if (true) {
                var x = 5;
            };
            console.log(x); // x is 5
        };
        console.log(x); //x is not defined
    </pre>

-   **let**: khai báo một biến chỉ có thể truy cập được trong **Scope** bao quanh nó.

    <pre>
        if (true) {
            let y = 5;
        };
        console.log(y); //x is not defined
    </pre>

-   **const**: dùng để khai báo một hằng số - là một giá trị không thay đổi được trong suốt quá trình chạy. Nếu cố gắng thay đổi giá trị của biến được khai báo bởi **const**, chương trình sẽ báo lỗi.

    <pre>
        const theBestSchool = "TechKids";
        theBestSchool = "another school"; // will result is an error;
    </pre>

    <i>**Bài tập**</i>  
    Giá trị của x là bao nhiêu sau khi chạy những đoạn code dưới đây?
    -   Code 1
    <pre>
        function() {
            var x = 30;
            if(x > 10) {
                x = 5;
            }
            console.log(x);
        }
    </pre>  
    *[Đáp án](result-4.md)*

    -   Code 2
    <pre>
        function() {
            var y = 30;
            if(y > 10) {
                let x = 20;
            }
            console.log(x);
        }
    </pre>  
    *[Đáp án](result-5.md)*


### III. CÁC KHÁI NIỆM KHÁC
**1. Declaring variables và Evaluating variables**
-   **Declaring variables**: Hiểu một cách đơn giản thì đây là những biến được khai báo và được gán một giá trị nào đó.

    <pre>
        const theBestSchool = "TechKids";
        let mySport = "Football";
        var myPhoneNumber = "0123456789";
    </pre>

-   **Evaluating variables**: Những biến được khai báo nhưng không gán giá trị. Giá trị mặc định của những biến này là <i>undefined</i>

    <pre>
        const theBestSchool;
        let mySport;
        var myPhoneNumber;
    </pre>

**2. Hoisting Variable**

Cùng quan sát 2 đoạn code dưới đây:  

-   Code 1  
    <pre>
        console.log(x); // x == undefined;
        var x = 5;
    </pre>

-   Code 2  
    <pre>
        var x;
        console.log(x); // x == undefined;
        x = 5;
    </pre>

Việc JavaScript tự động ngầm chuyển đoạn code 1 sang đoạn code 2 rồi mới thực thi lệnh được gọi là **Hoisting**. JavaScript sẽ đưa việc khai báo biến lên trên cùng, việc gán giá trị vẫn giữ nguyên. Điều này giải thích tại sao khi truy cập biến x ở ảnh 1 trước khi x được khai báo, nhưng chương trình lại không báo lỗi, mà chỉ trả ra giá trị mặc định của x.  

*Bài tiếp theo [Kiểu dữ liệu (Data types)](data_types.md)*