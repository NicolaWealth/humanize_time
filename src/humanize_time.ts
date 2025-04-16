export const humanizeTime = (milliseconds: number) => {
  const second = 1000;
  const minute = 60 * second;
  const hour = 60 * minute;
  let readableStr: string;
  if (milliseconds < second) {
    readableStr = "less than a second";
  } else if (milliseconds < minute) {
    const seconds = Math.floor(milliseconds / second);
    readableStr = `${seconds} second${seconds !== 1 ? 's' : ''}`;
  } else if (milliseconds < hour) {
    const minutes = Math.floor(milliseconds / minute);
    readableStr = `${minutes} minute${minutes !== 1 ? 's' : ''}`;
  } else {
    const hours = Math.floor(milliseconds / hour);
    readableStr = `${hours} hour${hours !== 1 ? 's' : ''}`;
    const remainingMinutes = Math.floor((milliseconds % hour) / minute);
    if (remainingMinutes > 0) {
      readableStr += ` ${remainingMinutes} minute${remainingMinutes !== 1 ? 's' : ''}`;
    }
  }
  return readableStr;
};
