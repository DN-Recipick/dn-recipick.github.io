export const formatDateTime = (isoString: string | undefined) => {
  if (isoString === undefined) {
    return '잘못된 날짜 형식입니다';
  }
  const date = new Date(isoString);

  return new Intl.DateTimeFormat('ko-KR', {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
    hour12: false,
  }).format(date);
};
export const formatNumber = (price: string | number): string => Number(price).toLocaleString();
