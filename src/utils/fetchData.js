export const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "a85101ec23mshce8abdd651f744fp1dc829jsn0dca2f061d1a",
    "X-RapidAPI-Host": "exercisedb.p.rapidapi.com",
  },
};

export const youtubeOptions = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'a85101ec23mshce8abdd651f744fp1dc829jsn0dca2f061d1a',
		'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com'
	}
};
export const fetchData = async (url, options) => {
  const response = await fetch(url, options);
  const data = await response.json();
  return data;
};
