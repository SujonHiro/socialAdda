function formatTime(date) {
  const now = new Date();
  const givenDate = new Date(date);
  const diff = now - givenDate;

  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;
  const week = day * 7;
  const month = day * 30;
  const year = day * 365;

  if (diff < second) {
    return "Just now"; // If it's 0 seconds or so, display "Just now"
  } else if (diff < minute) {
    const seconds = Math.floor(diff / second);
    return `${seconds} second${seconds !== 1 ? "s" : ""} ago`;
  } else if (diff < hour) {
    const minutes = Math.floor(diff / minute);
    return `${minutes} minute${minutes !== 1 ? "s" : ""} ago`;
  } else if (diff < day) {
    const hours = Math.floor(diff / hour);
    return `${hours} hour${hours !== 1 ? "s" : ""} ago`;
  } else if (diff < week) {
    const days = Math.floor(diff / day);
    return `${days} day${days !== 1 ? "s" : ""} ago`;
  } else if (diff < month) {
    const weeks = Math.floor(diff / week);
    return `${weeks} week${weeks !== 1 ? "s" : ""} ago`;
  } else if (diff < year) {
    const months = Math.floor(diff / month);
    return `${months} month${months !== 1 ? "s" : ""} ago`;
  } else {
    const years = Math.floor(diff / year);
    return `${years} year${years !== 1 ? "s" : ""} ago`;
  }
}

export { formatTime };
