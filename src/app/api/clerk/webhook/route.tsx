// api/clerk/webhook/page.tsx

import { db } from "@/server/db";

export const POST = async (req: Request, res: Response) => {
    const {data}= await req.json();
    console.log(data);
    const emailAddress = data.email_addresses[0].email_address;
    const lastName = data.last_name;
    const firstName = data.first_name;
    const imageUrl = data.image_url
    const id=data.id;

    await db.user.create({
        data: {
            emailAddress,
            lastName,
            firstName,
            imageUrl,
            id
        }
    })
    console.log('User created successfully');

    return new Response('Webhook recieved',{status:200});
}