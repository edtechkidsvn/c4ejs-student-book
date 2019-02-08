async function asyncData() {
	const response = await fetch('https://reqres.in/api/users', {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            "name": "Quan",
            "job": "Massage for dev"
        })
    });
	return response.json();
}

const result = asyncData();
result.then(function(data){
    console.log(data);
});
