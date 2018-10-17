import React from 'react'
import { Row, Form, FormGroup, Input, Button } from 'reactstrap'
const FormField = ({inputFieldOnChange,value,sendButtonOnClick}) => {
    return (
        <Row>
            <Form>
                <FormGroup>
                    <Input type="text" name="userName" id="userName" placeholder="name" onChange={inputFieldOnChange} style={styles.formField} />
                    <Input type="text" name="message" id="message" placeholder="" onChange={inputFieldOnChange} value={value} style={styles.formField} />
                </FormGroup>
                <Button onClick={sendButtonOnClick} style={styles.buttonStyle}>Send</Button>
            </Form>
        </Row>
    )
}

export default FormField
const styles = {
    formField: {
        padding: '1%'
    }
}