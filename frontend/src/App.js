import React, { Component } from 'react';
import io from 'socket.io-client'
import Messages from './components/Messages'
import { Container, Row, Col, Form, FormGroup, Input, Button } from 'reactstrap'
const socket = io.connect('http://localhost:4005')
class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      userName: "",
      message: "",
      messages: [],
      typing: ""
    }

  }
  componentDidMount() {
    const { userName, message, messages } = this.state
    socket.on('newMessage', (data) => {
      messages.push(`${data.userName} : ${data.message}`)
      this.setState({
        messages: messages,
        typing: ""
      })
    })

    socket.on('typing', data => {
      console.log('typing received : ', data)
      this.setState({
        typing: `${data} is typing`
      })
    })
  }
  render() {
    const { userName, message, messages, typing } = this.state

    return (
      <Container>
        <Row style={styles.messageBox}>
          <Messages messages={messages} />
          <p>{typing}</p>
        </Row>
        <Row>
          <Form>
            <FormGroup>
              <Input type="text" name="userName" id="userName" placeholder="name" onChange={this.inputFieldOnChange} />
              <Input type="text" name="message" id="message" placeholder="" onChange={this.inputFieldOnChange} value={this.state.message} />
            </FormGroup>
            <Button onClick={this.sendButtonOnClick}>Send</Button>
          </Form>
        </Row>
        <Row>
          <Button onClick={this.clearMessages}>Clear All</Button>
        </Row>
      </Container>
    );
  }
  clearMessages = () => {
    this.setState({
      userName: "",
      message: "",
      messages: [],
      typing: ""
    })
  }
  inputFieldOnChange = (event) => {
    if (event.target.name === 'message') {
      socket.emit('typing', this.state.userName)
    }
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
    this.setState({
      message: ""
    })
  }

}
export default App;
const styles = {
  messageBox: {
    minHeight: '200px',
    backgroundColor: '#f5f5ef'
  },
  buttonStyle: {

  }
}