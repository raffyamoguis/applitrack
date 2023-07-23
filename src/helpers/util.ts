export function formatDate(dateString: string) {
    const dateObj = new Date(dateString);

  const formattedDate = dateObj.toLocaleDateString('en-US', {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
  });

  return formattedDate;
}

export function getPercentage(num: any, total: number) {
  return (num / total) * 100;
}