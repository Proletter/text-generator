import React from 'react'
import { Component } from 'react'
import axios from 'axios'
import Select from './components/Select'
import Output from './components/Output'
import Paragraphs from './components/Paragraphs'

class App extends Component{
    constructor(props) {
        super(props)

        //initialize three states. 1 for storing fetched data, another for setting parameters for our api request
        this.state = {
            paras: 1,
            format: 'html',
            text: ''
        }
    }


//run get sample text using componentdidmount
    componentDidMount() {
        this.getSampleText()
    }

//get sample text function
    getSampleText() {
        axios.get(`https://baconipsum.com/api/?type=meat-and-filler&paras=${this.state.paras}&format=${this.state.format}`)
            .then(response => this.setState(
                { text: response.data },
                ()=> console.log("data retrieved")
            ))
            .catch(e=>console.log(e))
    }


    //change the format parameter state
    changeFormat(x) {
    this.setState({format:x}, this.getSampleText())
}

    
    //change the paragraph parameters state
    changeParas(x) {
        this.setState({paras:x}, this.getSampleText())

    }


render() {
    
    return (
        <div className="App container">
            <h1>ReactJS Dummy Text Generator</h1>
            <hr/>
            <form className="form-inline">
                <label> Choose Format: </label>
                <Select value={this.state.format} onChange={this.changeFormat.bind(this)} />
                <label>Choose Number of Paragraphs</label>
                <Paragraphs value={this.state.paras} onChange={this.changeParas.bind(this)}/>
                
            </form>
            <Output value={this.state.text}/>
            
        </div>
    )


}    


}

export default App