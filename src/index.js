import React from 'react';
import ReactDOM from 'react-dom';
//import Lesson from './02_components/Lesson';
// import CounterButton from './04_props/Lesson'
// import { CounterButton, Counter, Button } from './05_props/Lesson'
// import App from './06_events/Lesson'
// import App from './07_conditional-rendering/Lesson'
// import App from './08_lists/Lesson'
// import Form from './10_forms/Lesson';
// import App from './13_hoc/Lesson';
// import App from './14_portals/Lesson';
// import App from './15_context/Lesson';
import News from './16_api2/news';
import registerServiceWorker from './registerServiceWorker';


// ReactDOM.render(<CounterButton/>, document.getElementById('root'));
// ReactDOM.render(<CounterButton child={ <Button/> }><Counter /></CounterButton>, document.getElementById('root'));
// ReactDOM.render(<App/>, document.getElementById('root'));
//ReactDOM.render(<Form/>, document.getElementById('root'));
ReactDOM.render(<News/>, document.getElementById('root'));
registerServiceWorker();
