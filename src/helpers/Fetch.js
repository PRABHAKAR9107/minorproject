const Fetch = async (url) => {
    const fetchUrl = 'https://cors-anywhere.herokuapp.com/' + url;

    let result = await fetch(fetchUrl);
    let response = await result.json();
    return response;
}

export default Fetch;