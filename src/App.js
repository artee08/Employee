import React, {Component} from 'react';
import './App.css';
import ContactData from './Contact/ContactData'; 

class App extends Component{
  render()
  {
    return (
    <div className="App">
      <header className="App-header">
      
        <p>
          <code>Employee App</code>
         <ContactData/>
        </p>
      </header>
    </div>
  );
    }
}

export default App;
