export interface InvestDataInterface {
  initialInvestment: number;
  duration: number;
  expectedReturn: number;
  annualInvestment: number;
}

export type ResultsType = {
  year: number;
  interest: number;
  valueEndOfYear: number;
  annualInvestment: number;
  totalInterest: number;
  totalAmountInvested: number;
};
