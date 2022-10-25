// Reference: https://flaviocopes.com/nextjs-serialize-date-json/
export const safeJson = (data) => {
  return JSON.parse(JSON.stringify(data));
}

export const formatDate = (date) => {
  // date coming in looks like: 2022-10-25T12:46:05.348Z
  // date coming out looks like: October 25, 2022
  const d = new Date(date);
  const month = d.toLocaleString('default', { month: 'long' });
  const day = d.getDate();
  const year = d.getFullYear();
  return `${month} ${day}, ${year}`;
}