/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 */

import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import LoanTerms from 'components/LoanTerms';
/* import ReposList from 'components/ReposList'; */
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
      loanAmount: 100
    };
  }

  componentDidMount() {
    /* if (this.props.username && this.props.username.trim().length > 0) {
      this.props.onSubmitForm();
    } */
  }

  /* handleChangeHorizontal = (value) => {
    this.setState({
      loanAmount: value
    });
  }; */

  render() {
    // const { loading, error, repos } = this.props;
    /* const reposListProps = {
      loading,
      error,
      repos,
    }; */

    const { loanAmount } = this.state;
    const values = {
      min: 100,
      max: 2000,
      step: 100
    };
    const horizontalLabels = {
      100: '100€',
      1000: '1000€',
      2000: '2000€'
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
              <h2>Simulate your loan</h2>
              <div className="loan-amount">
                <h2 className="amout">{formatMoney(loanAmount)}</h2>
                <h3 className="inner-title">Amount required</h3>
                <Slider
                  min={values.min}
                  max={values.max}
                  step={values.step}
                  value={loanAmount}
                  format={formatMoney}
                  labels={horizontalLabels}
                  onChange={this.props.onChangeValue}
                />
              </div>
              <div className="loan-term">
                <h3 className="inner-title">The following terms are available</h3>
                <LoanTerms amount={loanAmount} />
              </div>
            </div>
          </section>
        </div>
      </article>
    );
  }
}

HomePage.propTypes = {
  loading: PropTypes.bool,
  loanAmount: PropTypes.string,
  onChangeValue: PropTypes.func,
};
