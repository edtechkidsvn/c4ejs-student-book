async function asyncData() {
    const response = await fetch('https://reqres.in/api/users');
    console.log(await response.json());
    
}   

asyncData();