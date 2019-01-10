<pre>
    let myFeel = "happy";
    console.log("I feel ${feel}");
</pre>

Chương trình sẽ in ra:
<pre>
    I feel ${feel}
</pre>

Trong câu lệnh console.log("I feel ${feel}"), dấu **Double quotes** đang được sử dụng, vì vậy tất cả ký tự nằm trong **Double quotes** sẽ chỉ được tính là **String** thông thường, cú pháp **${}** dùng để truyền biến vào **String** (hoặc tính toán biểu thức) sẽ không có tác dụng trong trường hợp này.