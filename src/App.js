import React from 'react';
import { canConstructResponseFromBodyStream } from 'workbox-core/_private';
import logo from './logo.svg';
import DashboardView from './views/DashboardView';

export default class App extends React.Component {

  constructor(props) {
    super(props);
    this.setState
  };

  componentDidMount() {
    document.title = "Inforona"
  }

  render() {
    return (
      <div>
        <DashboardView/>
      </div>
    );
  }
}
