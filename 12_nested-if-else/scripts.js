const username = prompt('Please Enter Your Name.');
const userAge = parseInt(prompt('Please Enter Your Age.'));

debugger

if (username) {
    console.log(`Name: ${username}`);

    if (userAge) {
        if (userAge >= 0) {
            if (userAge <= 4) {
                console.log(`${username} is a kid.`);
                console.log('And he/she is playing.');
            } else if (userAge <= 17) {
                console.log(`${username} is a school student.`);
                console.log('And he/she is learning science and maths.');
            } else if (userAge <= 24) {
                console.log(`${username} is a college student.`);
                console.log('And he/she is learning computer science.');
            } else if (userAge <= 45) {
                console.log(`${username} is a working professional.`);
                console.log('And he/she is a web developer.');
            } else if (userAge < 121) {
                console.log(`${username} is retired.`);
                console.log('And he/she reads newspaper.');
            } else {
                if (userAge >= 121) {
                    console.log(`${username} is immortal.`);
                    console.log('And he/she reads newspaper.');
                }
            }
        } else {
            console.log('Please Enter a Valid Age');
        }
    } else {
        console.log('Age must be provided');
    }
} else {
    if (!username) {
        console.log('Username cannot be empty');
    }
}

console.log('Program Ended!!');
