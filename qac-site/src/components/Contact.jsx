import React from "react";
import Form from 'react-bootstrap/Form';

const Contact = () => {
  return (
<Form action="https://formsubmit.co/ridwan_kawsar@hotmail.co.uk" method="POST">
     <input type="text" name="name" required></input>
     <input type="email" name="email" required></input>
     <input type="comment" name="comment" required></input>
     
     <button type="submit">Send</button>
    </Form>
  );
}

export default Contact;