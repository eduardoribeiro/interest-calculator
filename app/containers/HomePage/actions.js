/* eslint-disable no-plusplus */
/* eslint-disable no-restricted-properties */
/*
 * Home Actions
 *
 * Actions change things in your application
 * Since this boilerplate uses a uni-directional data flow, specifically redux,
 * we have these actions which are the only way your application interacts with
 * your application state. This guarantees that your state is up to date and nobody
 * messes it up weirdly somewhere.
 *
 * To add a new Action:
 * 1) Import your constant
 * 2) Add a function like this:
 *    export function yourAction(var) {
 *        return { type: YOUR_ACTION_CONSTANT, var: var }
 *    }
 */

import { CALCULATE_INTEREST } from './constants';

/**
 * Changes the input field of the form
 *
 * @param  {name} name The new text of the input field
 *
 * @return {object}    An action object with a type of CHANGE_USERNAME
 */

function calculateMonthlyRate(p, i, m) {
  if (m < 12) {
    return ((p * i) * (Math.pow(1 + i, (m / 12)))) / (Math.pow(1 + i, (m / 12)) - 1);
  }
  return ((p * i) * (Math.pow(1 + i, (m / 12)))) / (Math.pow(1 + i, (m / 12)) - 1);
}

export function calculateInterest(value) {
  const P = Number(value); // principle / initial amount borrowed
  const I = ((6 * 360) / 365) / 100 / 12; // monthly interest rate 6%
  const sixMonths = calculateMonthlyRate(P, I, 6);
  const oneYear = calculateMonthlyRate(P, I, 12);
  const twoYears = calculateMonthlyRate(P, I, 24);
  return {
    type: CALCULATE_INTEREST,
    value,
    sixMonths,
    oneYear,
    twoYears
  };
}

export function demonstrateInterest(value) {
  const P = Number(value); // principle / initial amount borrowed
  const I = ((6 * 360) / 365) / 100 / 12; // monthly interest rate 6%
  const monthlyPayment = I === 0 ? P / 2 / 12 : ((P * I) / (1 - Math.pow(1 / (1 + I), 2 * 12)));
  const monthlyOverpayment = 0;
  const overpayments = [];
  let balance = P;
  let baseline = P;
  let payments = [{ overpayment: 0, balance, baseline }];
  let partial;


  for (let year = 0; year < 2; year++) {
    let interestYearly = 0;
    let overpaymentYearly = 0;
    for (let month = 1; month <= 12; month++) {
      const overpayment = overpayments.filter((x) => (+x.year === year && +x.month === month))
        .reduce((acc, val) => acc + (+val.amount), 0);
      const interestMonth = balance * I;
      interestYearly += interestMonth;
      overpaymentYearly += overpayment;
      balance -= monthlyPayment + +monthlyOverpayment + overpayment - interestMonth;
      baseline -= monthlyPayment - (baseline * I);

      if (balance <= 0) {
        balance = 0;
        if (partial === undefined && month !== 12) {
          partial = month;
        }
      }
    }

    payments.push({
      baseline, interestYearly, balance, partial, overpayment: overpaymentYearly + (+monthlyOverpayment * (partial || 12))
    });
    if (partial) partial = 0;
  }
  return { monthlyPayment: monthlyPayment.toFixed(2), payments };
}
