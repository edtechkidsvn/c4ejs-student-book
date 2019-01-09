<pre>
    function() {
        var y = 30;
        if(y > 10) {
            let x = 20;
        }
        console.log(x);
    }
</pre>  

Trong đoạn code trên, chương trình sẽ báo lỗi. Vì biến x được khai báo với **let**. Biến được tạo ra bởi **let** chỉ có thể truy cập được trong **Scope** bao quanh nó. Câu lệnh cuối cùng ( console.log(x) ) nằm ngoài **Scope** của biến x nên không thể in ra x.