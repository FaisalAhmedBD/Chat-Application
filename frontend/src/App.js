import React, { Component } from 'react';
import io from 'socket.io-client'
import Messages from './components/Messages'
import { Container, Row, Col, Form, FormGroup, Input, Button } from 'reactstrap'
const socket = io.connect('http://localhost:4004')
class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      userName: "",
      message: "",
      messages: []
    }
  }
  componentDidMount() {
    const { userName, message, messages } = this.state
    socket.on('newMessage', (data) => {
      messages.push(`${data.userName} : ${data.message}`)
      this.setState({
        messages: messages
      })
    })
  }
  render() {
    const { userName, message, messages } = this.state

    return (
      <Container>
        <Row>
          <Messages messages={messages} />
        </Row>
        <Row>
          <Form>
            <FormGroup>
              <Input type="text" name="userName" id="userName" placeholder="name" onChange={this.inputFieldOnChange} />
              <Input type="text" name="message" id="message" placeholder="" onChange={this.inputFieldOnChange} />
            </FormGroup>
            <Button onClick={this.sendButtonOnClick}>Send</Button>
          </Form>
        </Row>
      </Container>
    );
  }
  inputFieldOnChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }
  sendButtonOnClick = (event) => {
    const { userName, message } = this.state
    socket.emit('newMessage', {
      message: message,
      userName: userName
    })
  }

}

export default App;