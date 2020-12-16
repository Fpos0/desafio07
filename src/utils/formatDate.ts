const formatDate = (value: Date): string => {
  // `${value.toString()} / ${value.getMonth} / ${value.getFullYear}`;
  const [sDate, ,] = value.toString().split('T');
  const [year, month, day] = sDate.split('-');
  return `${day}/${month}/${year}`;
};

export default formatDate;
