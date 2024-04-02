export const formatDate = (date: string) => {
    const parts = date.split('-');
    const year = parts[0];
    const month = parts[1];
    const day = parts[2].split('T')[0];
    return `${day.padStart(2, '0')}.${month.padStart(2, '0')}.${year}`;
}