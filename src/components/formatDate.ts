export function formatDate(inputDate:any) {
    const options :any= { year: 'numeric', month: 'short', day: 'numeric' };
    const formattedDate = new Date(inputDate).toLocaleDateString('en-US', options);
    return formattedDate;
  }