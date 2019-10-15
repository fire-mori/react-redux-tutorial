import React, { Fragment } from 'react';
// import PropTypes from 'prop-types';


const Columns = () => (
  <Fragment>
    <td>hello</td>
    <td>salut</td>
  </Fragment>
);

const Table = () => (
  <table>
    <tbody>
      <tr>
        <Columns/>
      </tr>
    </tbody>
  </table>
)

export default App;
