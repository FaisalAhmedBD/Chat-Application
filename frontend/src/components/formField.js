import React from 'react'
import { Row, Form, FormGroup, Input, Button } from 'reactstrap'
class FormField extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <Row>
                <Form>
                    <FormGroup>
                        <Input type="text" name="userName" id="userName" placeholder="name" onChange={this.props.inputFieldOnChange} style={styles.formField} />
                        <Input type="text" name="message" id="message" placeholder="" onChange={this.props.inputFieldOnChange} value={this.props.value} style={styles.formField} />
                    </FormGroup>
                    <Button onClick={this.props.sendButtonOnClick} style={styles.buttonStyle}>Send</Button>
                </Form>
            </Row>
        )
    }
}
export default FormField
const styles = {
    formField:{
      padding:'1%'
    }
  }