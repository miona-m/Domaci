import React, { Component, Fragment } from 'react';
import { Popup } from './components/popup';

class App extends Component {



  state = {
    kontakt: [
  {
      "name": "Rick Deckard",
      "phone": "0641345479"
  },

  {
      "name": "Roy Batty",
      "phone": "062461436"
  },
  
  {
      "name": "Louise Banks",
      "phone": "065988737"
  }
    
    ],
    fullName: '',
    phoneNumber: '',
    userExists: false,
    prompt: false,
    error: false,
  }

  handlePromptAccept = () => {
    const { kontakt, phoneNumber } = this.state;
    const index = kontakt.findIndex(person => person.name === this.state.fullName);
    const newKontaktState = [...kontakt];
    newKontaktState[index] = {
      ...newKontaktState[index],
      phone: phoneNumber
    };
    this.setState({ kontakt: newKontaktState, prompt: false })
  }

  handlePromptReject = () => {
    this.setState({ prompt: false });
  }

  _updateField = (fieldName, value) => {
    this.setState({ [fieldName]: value })
  }

  _handleSubmit = (e) => {
    e.preventDefault();

    const {
      kontakt,
      fullName,
      phoneNumber
    } = this.state;

    const result = kontakt.filter(person => person.name === fullName);
    
    if (fullName === '' || phoneNumber === '')
      return this.setState({ error: true });

    if (result.length)
      return this.setState({ prompt: true, error: false });

    this.setState(prevState => ({
      kontakt: [...prevState.kontakt, { name: prevState.fullName, phone: prevState.phoneNumber }],
      error: false
    }))
  }

  render() {
    const {
      fullName,
      phoneNumber,
      kontakt,
      prompt,
      error,
    } = this.state;

    return (
      <Fragment>
        {error && (
          <div style={{
            border: '3px solid red',
            backgroundColor: 'white',
            color: 'red',
            padding: '3px',
            fontFamily: 'Arial',
            textAlign: 'center'
          }}>
            {'This field cannot be empty!'}
          </div>
        )}
        {prompt && <Popup accept={this.handlePromptAccept} reject={this.handlePromptReject} message="Are you sure you want to change phone number?" />}
        <form>
          <input type="text" placeholder="Name" value={fullName} onChange={e => this._updateField('fullName', e.currentTarget.value)} />
          <input type="number" placeholder="Phone Number" value={phoneNumber} onChange={e => this._updateField('phoneNumber', e.currentTarget.value)} />
          <button onClick={this._handleSubmit}>Add</button>
        </form>
        <ul>
          {kontakt.map(person => (
            <li key={person.phone}>
              <h4>{person.name}</h4>
              <div>{person.phone}</div>
            </li>
          ))}
        </ul>
      </Fragment>
    );
  }
}

export default App;