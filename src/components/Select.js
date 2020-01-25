import React from 'react'
import { Component } from 'react'



class Select extends Component {
    constructor(props) {
        super(props)
        this.state = {
            value: props.value
            }
    }

    onChange(e) {
        console.log(e)
        this.setState({
           value: e.target.value
        },
            this.props.onChange(this.state.value))
        
    }

    render() {
        
        return (
            <div>
            <select className="form-group" onChange={this.onChange.bind(this)}>
                <option value="text">Plain Text</option>
                <option value="html">With Html Tags</option>
            </select>
            </div>
        )
    }


}

export default Select