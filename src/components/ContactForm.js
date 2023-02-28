import React, { useState } from 'react';
import { Email, Item, Span, A, renderEmail } from 'react-html-email';
import nodemailer from 'nodemailer-react';

function ContactForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [emailCount, setEmailCount] = useState(0);
  const [isFormDisabled, setIsFormDisabled] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (emailCount < 10) {
      try {
        // Send email using nodemailer
        const transporter = nodemailer.createTransport({
          host: 'smtp.gmail.com',
          port: 587,
          secure: false,
          auth: {
            user: process.env.GMAIL_USER,
            pass: process.env.GMAIL_PASSWORD,
          },
        });

        await transporter.sendMail({
          from: process.env.GMAIL_USER,
          to: 'arsena0202@gmail.com',
          subject: 'New message from website contact form',
          html: renderEmail(
            <Email title="New message from website contact form">
              <Item>
                <Span>Name:</Span>
                <Span>{name}</Span>
              </Item>
              <Item>
                <Span>Email:</Span>
                <A href={`mailto:${email}`}>{email}</A>
              </Item>
              <Item>
                <Span>Message:</Span>
                <Span>{message}</Span>
              </Item>
            </Email>
          ),
        });

        console.log('Email successfully sent!');
        alert('Your message has been sent!');
        setEmailCount(emailCount + 1);
        if (emailCount === 9) {
          setIsFormDisabled(true);
        }
        setName('');
        setEmail('');
        setMessage('');
      } catch (error) {
        console.error('Email failed to send:', error);
        alert('There was an error sending your message. Please try again later.');
      }
    } else {
      alert('Sorry, you have exceeded the limit of 10 emails per day.');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(event) => setName(event.target.value)}
          disabled={isFormDisabled}
        />
      </div>
      <div>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          disabled={isFormDisabled}
        />
      </div>
      <div>
        <label htmlFor="message">Message:</label>
        <textarea
          id="message"
          value={message}
          onChange={(event) => setMessage(event.target.value)}
          disabled={isFormDisabled}
        ></textarea>
      </div>
      <div>
        <button type="submit" disabled={isFormDisabled}>
          Send
        </button>
      </div>
    </form>
  );
}

export default ContactForm;
