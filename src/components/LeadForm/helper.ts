export const getPrice = (amount:string) => {
    let decimalAmount = parseFloat(parseFloat(amount).toFixed(2));
    let finalAmount = decimalAmount.toLocaleString("en-US");
    return finalAmount;
  };
  export   const filterPassedTime = (time:number | string | Date) => {
    const currentDate = new Date();
    const selectedDate = new Date(time);

    return currentDate.getTime() < selectedDate.getTime();
  };
  
  export const getNext15Minutes = () => {
    const now = new Date();
    const minutes = now.getMinutes();
    const roundedMinutes = Math.ceil(minutes / 15) * 15;

    now.setMinutes(roundedMinutes);
    now.setSeconds(0); // Reset seconds to 0
    now.setMilliseconds(0); // Reset milliseconds to 0

    return now;
  };
  export const getCurrentTime = () => {
    const now = new Date();
    const hours = now.getHours().toString().padStart(2, "0");
    const minutes = now.getMinutes().toString().padStart(2, "0");
    return `${hours}:${minutes}`;
  };
  
  export const getTime = (time:number | string | Date) => {
    const date = new Date(time);
  
    let hours = date.getHours().toString().padStart(2, "0");
    let minutes = date.getMinutes().toString().padStart(2, "0");
  
    return `${hours}:${minutes}`;
  };
  
  export  const getUTCTime = (dateObj:number | string | Date) => {
    const date = new Date(dateObj);
    // Get the UTC time as a string
    let utcTimeString = date.toUTCString();  // Fri, 20 Sep 2024 18:19:42 GMT
  
    // Extract only the hours and minutes
    let utcTimeWithoutSeconds = utcTimeString.split(' ')[4].slice(0, 5);  // 18:19
    return utcTimeWithoutSeconds;
  };

  export const convertTimeFormat = (time:string) => {
    const floatTime = parseFloat(time);
    const hours = Math.floor(floatTime);
    const decimalPart = floatTime - hours;
  
    const minutes = Math.round(decimalPart * 60);
  
    return `${hours} hours ${minutes} minutes`;
  };