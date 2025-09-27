export function formatTimeindexToString(timeIndex: number): string {
  const hour = Math.floor(timeIndex / 2) + 8;
  const minute = (timeIndex % 2) * 30;
  if (hour < 12) {
    if (minute == 0) {
      return `오전 ${hour}시`;
    } else {
      return `오전 ${hour}시 ${minute}분`;
    }
  } else {
    if (hour == 12) {
      if (minute == 0) {
        return `오전 ${hour}시`;
      } else {
        return `오전 ${hour}시 ${minute}분`;
      }
    } else {
      if (hour == 24) {
        if (minute == 0) {
          return `오전 12시`;
        } else {
          return `오전 12시 ${minute}분`;
        }
      } else {
        if (minute == 0) {
          return `오후 ${hour % 12}시`;
        } else {
          return `오후 ${hour % 12}시 ${minute}분`;
        }
      }
    }
  }
}
