function introduceMe(username, profession) {
    console.log('Hi');
    console.log(`My name is ${username || 'Procodrr'}`);
    console.log(`I am a ${profession ||'CSE Student'}`);

}

introduceMe('John Doe', 'Web Developer');
introduceMe('Tahsin', 'Django Developer');
introduceMe('Ferdous');
introduceMe();