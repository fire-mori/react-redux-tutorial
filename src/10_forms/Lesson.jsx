import React, { Component, Fragment } from 'react';

const positions = [
  {
    id: 'fd',
    value: 'front-end-developer',
    title: 'front-end-developer',
  },
  {
    id: 'bd',
    value: 'back-end-developer',
    title: 'back-end-developer',
  }
]

class Form extends Component {
  state = {
    inputText: '',
    textareaText: '',
    selectText: '',
    showData: {
      name: '',
      text: '',
      position: '',
    }
  }

  handleInputChange = ({target: { value } }) => { // distructuixation of event
    this.setState({
      inputText: value,
    })
  }

  handleTextareaChange = ({target: { value } }) => {
    this.setState({
      textareaText: value,
    })
  }

  handleSelectChange = ({target: { value } }) => {
    this.setState({
      selectText: value,
    })
  }

  handleShow = (e) => {
    e.preventDefault();
    const { inputText, textareaText, selectText } = this.state;
    this.setState({
      inputText: '',
      textareaText: '',
      selectText: '',
      showData: {
        name: inputText,
        text: textareaText,
        position: selectText,
      }
    })
  }

  render() {
    const { inputText, textareaText, selectText, showData } = this.state;
    const { name, text, position } = showData;

    return (
      <Fragment>
        <form>
        <label>
          Name:
          <input type="text" name="name" value={ inputText } onChange={ this.handleInputChange } />
        </label>
        <br />
        <label htmlFor="text">Text:</label>
        <textarea id="text" value={ textareaText } onChange={ this.handleTextareaChange } />
        <br />
        <select value={ selectText } onChange={ this.handleSelectChange }>
          {positions.map(({ id, value, title }) => (
            <option key={ id } value={ value }>{ title }</option>
          ))}
        </select>
        <button onClick={this.handleShow }>Show</button>
      </form>
      <h2>{ name }</h2>
      <h3>{ text }</h3>
      <h3>{ position }</h3>
      </Fragment>
    );
  }
}

export default Form;
