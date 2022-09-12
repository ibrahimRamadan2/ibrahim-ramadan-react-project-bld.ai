 

export async function getApiData(url) {
  // fetch Data from API .
  let jsonData = await fetch(url);
  jsonData = await jsonData.json();
  return jsonData;
}

export function convertIntRate(rate) {
  // take double value for rating
  rate = rate.toString();
  let x = rate[0] + "." + rate[2];
  return x;
}

export function getarrayOfStars(rate) {
  // take a string value
  let arr = [0, 0, 0, 0, 0];
  let rateNumber = convertIntRate(rate);
  let rateNum = rateNumber.split(".");
  let FullStarNum = parseInt(rateNum[0]);
  let halfStarNum = parseInt(rateNum[1]);
  halfStarNum = halfStarNum >= 5 ? 1 : 0;
  let cnt = 0;
  for (let i = 0; i < FullStarNum; i++) arr[cnt++] = 1;
  if (halfStarNum) arr[cnt++] = 0.5;
  return arr;
}
 