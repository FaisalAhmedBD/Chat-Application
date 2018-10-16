import React from 'react'

class FormField extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            username: '',
            message: '',
            messages: []
        };

    }
    render() {
        return (
            <div className="card-footer">
                <input type="text" placeholder="Username" value={this.state.username} onChange={ev => this.setState({ username: ev.target.value })} className="form-control" />
                <br />
                <input type="text" placeholder="Message" className="form-control" value={this.state.message} onChange={ev => this.setState({ message: ev.target.value })} />
                <br />
                <button onClick={this.sendMessage} className="btn btn-primary form-control">Send</button>
            </div>
        )
    }
}