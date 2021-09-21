import { useState } from 'react'
import Alert from 'react-bootstrap/Alert'
import Button from 'react-bootstrap/Button'



export function RequestAlert() {
  const [show, setShow] = useState(true);

  if (show) {
    return (
      <Alert variant="success" onClose={() => setShow(false)} dismissible>
        <Alert.Heading>Request Submitted!</Alert.Heading>
      </Alert>
    );
  }
  return <Button onClick={() => setShow(true)}>Submit Request</Button>;
}