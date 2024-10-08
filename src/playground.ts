import { db } from "./server/db";

await db.user.create({
    data: {
        emailAddress:'rohit@gmail.com',
        lastName: 'Rohit',
        firstName: 'Kumar',
        imageUrl: 'https://rohit.com',

    }

})

console.log('User created successfully');