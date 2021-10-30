import React, { Component } from 'react'

export default class States extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             name:"Teja"
        }
    }
    
        render() {
            setTimeout(()=>{
                this.setState({name:"Teja Tata"})

            },3000)
        return (
            <div>
                <h1>
                    {this.state.name}
                </h1>
            </div>
        )
    }
}

