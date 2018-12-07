/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 */

import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import ReposList from 'components/ReposList';
import Slider from 'react-rangeslider';
import 'react-rangeslider/lib/index.css';
import './style.scss';

export default class HomePage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  /**
   * when initial state username is not null, submit the form to load repos
   */

  constructor(props, context) {
    super(props, context);
    this.state = {
      horizontal: 10
    };
  }

  componentDidMount() {
    if (this.props.username && this.props.username.trim().length > 0) {
      this.props.onSubmitForm();
    }
  }

  handleChangeHorizontal = (value) => {
    this.setState({
      horizontal: value
    });
  };

  render() {
    // const { loading, error, repos } = this.props;
    /* const reposListProps = {
      loading,
      error,
      repos,
    }; */

    const { horizontal } = this.state;
    const horizontalLabels = {
      0: 'Low',
      50: 'Medium',
      100: 'High'
    };

    const formatMoney = (value) => `${value} €`;
    /* const formatPc = (p) => `${p }%`; */

    return (
      <article>
        <Helmet>
          <title>Home Page</title>
          <meta name="description" content="A React.js Boilerplate application homepage" />
        </Helmet>
        <div className="home-page">
          <section className="centered">
            <h2>Need a loan?</h2>
            <p>Simple estimate your loan interests and total amount due</p>
          </section>
          <section className="calculator">
            {/* <form onSubmit={this.props.onSubmitForm}>
              <label htmlFor="username">
              Show Github repositories by
                <span className="at-prefix">@</span>
                <input
                  id="username"
                  type="text"
                  placeholder="flexdinesh"
                  value={this.props.username}
                  onChange={this.props.onChangeUsername}
                />
              </label>
            </form>
            <ReposList {...reposListProps} /> */}
            <div className="calculator-interface">
              <h2>{formatMoney(horizontal)}</h2>
              <Slider
                className=""
                min={0}
                max={100}
                value={horizontal}
                labels={horizontalLabels}
                format={formatMoney}
                handleLabel={horizontal}
                onChange={this.handleChangeHorizontal}
              />
            </div>
          </section>
        </div>
      </article>
    );
  }
}

HomePage.propTypes = {
  loading: PropTypes.bool,
  error: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.bool,
  ]),
  repos: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.bool,
  ]),
  onSubmitForm: PropTypes.func,
  username: PropTypes.string,
  onChangeUsername: PropTypes.func,
};
