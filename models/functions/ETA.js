async function ETA (date, duration) { //13:00h,
  const time = duration.substr(0,5).split(':');
  const hour = parseInt(time[0]);
  const min = parseInt(time[1]);

  date.setHours(date.getHours() + hour);
  date.setMinutes(date.getMinutes() + min);

}

module.exports = ETA;
