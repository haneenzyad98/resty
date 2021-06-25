import React from 'react';
import Header from './components/Header.js';
import Footer from './components/Footer.js';
import Form from './components/form.js';
import People from './People'

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      url: '' , 
      method: '', 
      Headers: {} ,
      Response: {}
    }
    };
  
  handleForm = (Results) => {
    this.setState({
     Results
    });
  }
 
  render() {
    return (
      <>
        <Header />
        <main>
          <Form handler={this.handleForm} />
          <People results={this.state} />
        </main>
        <Footer />
      </>
    );
  }
}

export default App;