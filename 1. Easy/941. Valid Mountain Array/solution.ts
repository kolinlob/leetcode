function validMountainArray(arr: number[]): boolean {
  if (arr.length < 3) return false;

  let up = true;
  for (let i = 1; i < arr.length - 1; ++i) {
    if (up) {
      if (arr[i - 1] < arr[i] && arr[i] < arr[i + 1]) continue;
      if (arr[i - 1] < arr[i] && arr[i] > arr[i + 1]) up = false;
      else return false;
    } else {
      if (arr[i - 1] > arr[i] && arr[i] > arr[i + 1]) continue;
      else return false;
    }
  }

  return up == false;
}
