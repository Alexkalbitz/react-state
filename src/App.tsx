import React from 'react';
import './App.css';

// https://www.techdiagonal.com/wp-content/uploads/2019/09/react-props-blog-image-design-2.jpg

// a state definition
interface IState {
  counter: number
  enabled: boolean
}

// a class based component

class App extends React.Component<{}, IState> {

  // initial state
  public state: IState = {
    counter: 0,
    enabled: true
  }

  public componentDidMount() {

    setInterval(() => {
      this.setState({
        counter: this.state.counter + 1
      })
    }, 1000);

  }

  // the render method
  public render() {

    console.log('render()');

    // destructuring operator
    const { counter, enabled } = this.state;

    // return the HTML
    return (
      <>
        <h1>Hey there</h1>
        <h2>The timer says: {counter}</h2>

        <button onClick={() => {
          this.setState({ ...this.state, enabled: !enabled })
        }} >Toggle</button>

        {enabled && <div style={{ display: 'inline-block', backgroundColor: 'green' }}>Enabled</div>}
        {!enabled && <div style={{ display: 'inline-block', backgroundColor: 'red' }}>Disabled</div>}
      </>
    );
  }
}


export default App;
