// TODO

var App = () => (
  <div>Hello World</div>
);

ReactDOM.render(<App />, document.getElementById("app"));



class GroceryListItem extends React.Component {
  constructor(props) {
    super(props);

    this.state = { 'bold': false };
  }

  toggleBold() {
    this.setState({ bold: !this.state.bold });
  }

  render() {
    let style = {
      fontWeight: this.state.bold ? 'bold' : 'normal'
    };

    return (
      <li style={style} onMouseOver={this.toggleBold.bind(this)} onMouseOut={this.toggleBold.bind(this)} >{this.props.food}</li>
    );
  }
}

class GroceryList extends React.Component {
  constructor(props) {
    super(props);

  }

  render() {
    return (
      <ul>
        <GroceryListItem food={this.props.foods[0]} />
        <GroceryListItem food={this.props.foods[1]} />
      </ul>
    );
  }

  // render() {
  //   return (
  //     <ul>
  //       <GroceryListItem food="Orange Chicken" />
  //       <GroceryListItem food="Fried Rice" />
  //     </ul>
  //   );
  // }

}

ReactDOM.render(<GroceryList foods={['Orange Chicken', 'Fried Rice']} />, document.getElementById('groceries'));
