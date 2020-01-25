import React from 'react'
import { Component } from 'react'

class Paragraphs extends Component{
    constructor(props) {
        super(props)

        this.state = {
            value: props.value
        }
    }

    onChange(e) {
        this.setState(
            {
              value: e.target.value      
            },
            this.props.onChange(this.state.value)
            )
        }



    render() {
        return (
            
            <div>
                <input type='number' maxLength='1' onChange={this.onChange.bind(this)}/>
            </div>

        )

    }


}

export default Paragraphs