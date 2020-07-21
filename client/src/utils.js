export const extractIndexes = (string) => {
  const purifiedStr = string.match(/[0-9]/g);
  if (!purifiedStr) {
    return null;
  }
  return purifiedStr 
    .map(item => +item);
}
