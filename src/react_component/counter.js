import React from "react";

export default class counter extends React.Component {
    constructor(props) {
        super(props);
    }
    render (){
        return(
            <div>
            <h1>the state is {this.props.count}</h1>
            <button onClick={this.props.addCount}>+</button>
            <button onClick={this.props.decCount}>-</button>
            </div>
        )
    }
}
