import React, { Component } from 'react'
import { connect } from 'react-redux'
import classnames from 'classnames'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import getMuiTheme from 'material-ui/styles/getMuiTheme'
import { Route, Redirect } from 'react-router-dom'

import MainApp from './routes/app/'
import PageLogin from './routes/login/'
import Page404 from './routes/404/'
import Page500 from './routes/500/'

// = styles =
// 3rd
import './theme/styles/bootstrap.scss'
// custom
import './theme/styles/layout.scss';
import './theme/styles/theme.scss';
import './theme/styles/ui.scss';
import './theme/styles/app.scss';

import lightTheme from './theme/lightTheme'

class App extends Component {
  componentDidMount() {}

  render() {
    const { match, location, layoutBoxed, navCollapsed, navBehind, fixedHeader, sidebarWidth } = this.props;
    let materialUITheme = lightTheme;

    const isRoot = location.pathname === '/' ? true : false;
    if (isRoot) {
      // return ( <Redirect to={'/login'}/> );
      // return ( <Redirect to={'/app/dashboard'}/> );
      return ( <Redirect to={'/app/pull-requests'}/> );
    }

    return (
      <MuiThemeProvider muiTheme={getMuiTheme(materialUITheme)}>
        <div id="app-inner">
          <div className="preloaderbar hide"><span className="bar" /></div>
          <div
            className={classnames('app-main full-height', {
              'fixed-header': fixedHeader,
              'nav-collapsed': navCollapsed,
              'nav-behind': navBehind,
              'layout-boxed': layoutBoxed,
              'sidebar-sm': sidebarWidth === 'small',
              'sidebar-lg': sidebarWidth === 'large'})
          }>
            
            <Route path={`${match.url}app`} component={MainApp} />
            <Route exact path="/login" component={PageLogin} />
            <Route exact path="/404" component={Page404} />
            <Route exact path="/500" component={Page500} />
          </div>
        </div>
      </MuiThemeProvider>
    );
  }
}

const mapStateToProps = (state, ownProps) => ({
  layoutBoxed: state.settings.layoutBoxed,
  navCollapsed: state.settings.navCollapsed,
  navBehind: state.settings.navBehind,
  fixedHeader: state.settings.fixedHeader,
  sidebarWidth: state.settings.sidebarWidth,
  theme: state.settings.theme,
});

export default connect(mapStateToProps)(App)
