import moment from "moment";

export const formatToCurrency = (value: number) => {
  let formatting_options = {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 2,
  }
  let dollarString = new Intl.NumberFormat( "en-US", formatting_options );
  return dollarString.format(value);
};

export const getTimeStamp = (date: Date) => {
  const attainedDate = new Date(date);
  const formattedDate = moment(attainedDate).format("MMMM Do YYYY, h:mm:ss a");

  return formattedDate;
};
