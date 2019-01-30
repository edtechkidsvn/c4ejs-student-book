// function wait(ms) {
//     return new Promise(r => setTimeout(r, ms))  
//  }
 
// async function main() {
//     console.log('sắp rồi...')
//     await wait(2007)
//     console.log('chờ tí...')
//     await wait(2012)
//     console.log('thêm chút nữa thôi...')
//     await wait(2016)
//     console.log('xong rồi đấy!')
// };

// main();
function wait(ms) {
    return new Promise(r => setTimeout(r, ms))  
}

async function main() {
    console.log('ONE');
    await wait(2000);
    console.log('TWO');
};

main();