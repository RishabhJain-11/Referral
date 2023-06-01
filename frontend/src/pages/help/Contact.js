/* eslint-disable no-unused-vars */
import { Form, redirect, useActionData } from "react-router-dom"

export default function Contact() {
    const data = useActionData();

    return (
        <>
            <div className="contact">
                <Form method="post" action="/help/contact">

                    <div className="input-group">
                        <label>Full Name</label>
                        <input type="text" placeholder="Enter your name" id="contact-name" onkeyup="validate" required />
                        <span id="name-error"></span>
                    </div>

                    <div className="input-group">
                        <label>Email Id</label>
                        <input type="email" placeholder="Enter Email" required />
                        <span id="email-error"></span>
                    </div>

                    <div className="input-group">
                        <label>Your Message</label>
                        <textarea rows="5" placeholder="Enter your message"></textarea>
                        <span id="message-error"></span>
                    </div>

                    <button>Submit</button>
                    <span id="submit-error"></span>

                    {data && data.error && <p>{data.error}</p>}
                </Form>
            </div>
        </>
    )
}

export const contactAction = async ({ request }) => {
    const data = await request.formData()

    const submission = {
        email: data.get('email'),
        message: data.get('message')
    }

    console.log(submission)

    // send your post request

    if (submission.message.length < 10) {
        return { error: 'Message must be over 10 chars long.' }
    }

    // redirect the user
    return redirect('/')
}