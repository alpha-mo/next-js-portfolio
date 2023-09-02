import { sendMail } from "./mailer";

export async function POST(request: Request) {
    const req = await request.json()
    const result = await sendMail(req)

    return new Response('ok', {
        status: result.success ? 200 : 500
    })
}