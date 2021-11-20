import fetchJsonp from 'fetch-jsonp';

export const wrapFetchJsonp = async (url: string): Promise<any> => {
  return await fetchJsonp(url, {
    timeout: 100000,
  })
  .then(response => {
    return response.json();
  }).then((json) => {
    return json;
  }).catch(ex => {
    console.log('parsing failed', ex);
  })
}

export const fetchFortune = (path = '') => {
    return wrapFetchJsonp(`http://api.jugemkey.jp/api/horoscope/free/jsonp${path}`)
}
