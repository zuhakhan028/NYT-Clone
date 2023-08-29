export function formatNames(inputString: string): string {
    const formattedString: string = inputString
      .replace(/\bBY\b/g, 'By')
      .replace(/\bAND\b/g, 'and');
      
    return formattedString;
  }
  
  