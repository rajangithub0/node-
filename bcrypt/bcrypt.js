const bcrypt = require('bcrypt')

async function convert() {
    const password = '123456'
    const hashpassword = await bcrypt.hash(password, 10)
    console.log(`original password ${password}`);
    console.log(`hashed password ${hashpassword}`);

    //how to compaire the password 
    const match = await bcrypt.compare(password, hashpassword) //correct code 
    // const match = await bcrypt.compare("karan", hashpassword)
    if (match) {
        console.log('password matched');
    } else {
        console.log('invalid password');
    }
}
convert()