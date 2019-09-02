import React from "react";
import Counter from "./react_component/counter";
import Welcome from "./react_component/welcome";
import { connect } from "react-redux";
import { addCount, decCount } from "./actions/actions";

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  handleAdd = () => {
    this.props.dispatch(addCount());
  };

  handleDec = () => {
    this.props.dispatch(decCount());
  };

  render() {
    return (
      <div>
        {this.props.welcomeList.map((list, index) => {
          <Welcome
            key={index}
            isTeacher={list.isTeacher}
            name={list.name}
            count={this.props.count}
           />
          })};
        <Counter
          count={this.props.count}
          addCount={this.handleAdd}
          decCount={this.handleDec}
        />
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    count: state.counterReducer.count,
    welcomeList: state.welcomeReducer.welcomeList
  };
};
export default connect(mapStateToProps)(App);
