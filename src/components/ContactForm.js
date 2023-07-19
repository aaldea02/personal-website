import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import { TextField, Button, makeStyles, Box } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  form: {
    display: 'flex',
    flexDirection: 'column',
    width: '80%',
    margin: '0 auto',
    padding: theme.spacing(2),
    border: '2px solid #ccc',
    borderRadius: theme.shape.borderRadius,
  },
  field: {
    margin: theme.spacing(1, 0),
  },
  button: {
    margin: theme.spacing(1, 0),
    backgroundColor: '#1e90ff',
    color: '#fff',
    '&:hover': {
      backgroundColor: '#0077b6',
    },
  },
}));

function ContactForm() {
  const classes = useStyles();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [emailCount, setEmailCount] = useState(0);
  const [isFormDisabled, setIsFormDisabled] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (emailCount < 10) {
      try {
        // Send email using EmailJS
        await emailjs.send('service_dqt6duo', 'template_gmail', {
          from_name: name,
          from_email: email,
          message: message,
        }, 'zAd5WcmGlyUqv_ozv');

        console.log('Email successfully sent!');
        alert('Your message has been sent!');
        setEmailCount(emailCount + 1);
        console.log(`Email count: ${emailCount + 1}`);
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
    <Box component="form" onSubmit={handleSubmit} className={classes.form}>
      <TextField
        label="Name"
        value={name}
        onChange={(event) => setName(event.target.value)}
        disabled={isFormDisabled}
        className={classes.field}
      />
      <TextField
        label="Email"
        type="email"
        value={email}
        onChange={(event) => setEmail(event.target.value)}
        disabled={isFormDisabled}
        className={classes.field}
      />
      <TextField
        label="Message"
        multiline
        rows={4}
        value={message}
        onChange={(event) => setMessage(event.target.value)}
        disabled={isFormDisabled}
        className={classes.field}
      />
      <Button type="submit" disabled={isFormDisabled} className={classes.button}>
        Send
      </Button>
    </Box>
  );
}

export default ContactForm;
