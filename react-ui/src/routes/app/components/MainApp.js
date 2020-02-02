import React from 'react';
import { Route } from 'react-router-dom';
import loadable from 'react-loadable';
import Header from '../../../components/Header'
import Sidenav from '../../../components/Sidenav';
import Footer from '../../../components/Footer';

import Commits from '../routes/commits/'
import PullRequests from '../routes/pull-requests/'
import Reviews from '../routes/reviews/'

class MainApp extends React.Component {

  render() {
    const { match, location } = this.props;

    return (
      <div className="main-app-container">
        <Sidenav />

        <section id="page-container" className="app-page-container">
          <Header />

          <div className="app-content-wrapper">
            <div className="app-content">
              <div className="h-100">
                  <Route path={`${match.url}/commits`} component={Commits} />
                  <Route path={`${match.url}/pull-requests`} component={PullRequests} />
                  <Route path={`${match.url}/reviews`} component={Reviews} />
              </div>
            </div>

            <Footer />
          </div>
        </section>
      </div>
    );
  }
}

export default MainApp;
