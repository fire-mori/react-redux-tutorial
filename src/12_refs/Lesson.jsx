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

  inputRef = React.createRef();
  textareaRef = React.createRef();
  selectRef = React.createRef();

  componentWillMount() {
    console.log('cwm', this.inputRef);
  }

  componentDidMount() {
    console.log('cdm', this.inputRef);
  }

  handleChange = () => {
    this.setState({
      inputText: this.inputRef.current.value,
      textareaText: this.textareaRef.current.value,
      selectText: this.selectRef.current.value,
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
          <input ref={ this.inputRef } type="text" name="name" value={ inputText } onChange={ this.handleChange } />
        </label>
        <br />
        <label htmlFor="text">Text:</label>
        <textarea ref={ this.textareaRef } value={ textareaText } onChange={ this.handleChange } />
        <br />
        <select ref={ this.selectRef } value={ selectText } onChange={ this.handleChange }>
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
