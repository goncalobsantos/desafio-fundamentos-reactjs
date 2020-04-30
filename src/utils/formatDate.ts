const formatDate = (date: Date): string =>
  Intl.DateTimeFormat('pt-PT').format(date);

export default formatDate;
