import dayjs from 'dayjs';

export const formatCurrency = (value: number) =>
  new Intl.NumberFormat('en', { style: 'currency', currency: 'EUR' }).format(value);

export const formatDate = (date: string) => {
  return dayjs(date).format('DD MMM YYYY');
};
