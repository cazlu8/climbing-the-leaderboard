function binarySearch (arr, x) {
  let start=0, end=arr.length-1;
  if (x > arr[0])
    return 1
  if (x < arr[end])
    return end + 2;

  while (start <= end){
    let mid = Math.floor((start + end)/2);
    if (arr[mid] === x) return mid + 1;
    else if(arr[mid] < x && x < arr[mid - 1]) return mid + 1;
    else if (arr[mid] > x && x >= arr[mid + 1]) return mid + 2;
    else if (arr[mid] > x)
      start = mid + 1;
    else
      end = mid - 1;
  }
  return false;
}


function climbingLeaderboard(scores, alice) {
  const uniqueScores = [...new Set([...scores])].sort((x, y) => y - x)
  return alice.map(x => binarySearch(uniqueScores, x));
}
