import React from 'react';
import {
  HashRouter,
  Route,
  Link,
} from 'react-router-dom';
import Basic from '../examples/Basic';
import DynamicExample from '../examples/DynamicExample';
import AsyncExample from '../examples/AsyncExample';
import CustomErrorMessageExample from '../examples/CustomErrorMessageExample';
import FileExample from '../examples/FileExample';
import CalculatedErrorMessageExample from '../examples/CalculatedErrorMessageExample';
import OptionalExample from '../examples/OptionalInput';
import FormControlInputExample from '../examples/FormControlInputExample';

const Routers = () => (
  <HashRouter>
    <div>
      <h1>Example for `react-hoc-form-validatable`</h1>
      <ul>
        <li><Link to="/">Basic demo</Link></li>
        <li><Link to="/examples/optional">Optional Input</Link></li>
        <li><Link to="/examples/dynamic">Dynamic Example</Link></li>
        <li><Link to="/examples/async">Async Example</Link></li>
        <li><Link to="/examples/calculated-error-message">Calculated Error Message Example</Link></li>
        <li><Link to="/examples/custom-error-message">Custom Error Message Example</Link></li>
        <li><Link to="/examples/files">Validate file input</Link></li>
        <li><Link to="/examples/custom-validation-with-form-control">Custom validation with formControl.checkInput</Link></li>
      </ul>

      <hr />

      <Route exact path="/" component={Basic} />
      <Route exact path="/examples/dynamic" component={DynamicExample} />
      <Route exact path="/examples/async" component={AsyncExample} />
      <Route exact path="/examples/calculated-error-message" component={CalculatedErrorMessageExample} />
      <Route exact path="/examples/custom-error-message" component={CustomErrorMessageExample} />
      <Route exact path="/examples/files" component={FileExample} />
      <Route exact path="/examples/optional" component={OptionalExample} />
      <Route exact path="/examples/custom-validation-with-form-control" component={FormControlInputExample} />
    </div>
  </HashRouter>
);

export default Routers;
