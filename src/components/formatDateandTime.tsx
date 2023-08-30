export function formatDateTime(dateTimeStr:string) {
    const date = new Date(dateTimeStr);
    
    // Format time in HH:MM a.m./p.m. format
    const formattedTime = date.toLocaleTimeString([], { hour: 'numeric', minute: '2-digit', hour12: true });
    
    // Extract the timezone offset from the original date string
    const timezoneOffset = dateTimeStr.slice(-6);
    
    // Create a timezone abbreviation based on the offset
    const timezoneAbbreviation = (timezoneOffset === "-04:00") ? "ET" : "Unknown";
    
    return `${formattedTime} ${timezoneAbbreviation}`;
  }
  
//   const inputDateTime = "2023-08-30T09:15:51-04:00";
//   const formattedDateTime = formatDateTime(inputDateTime);
//   console.log(formattedDateTime); // Output: "9:15 a.m. ET"
  