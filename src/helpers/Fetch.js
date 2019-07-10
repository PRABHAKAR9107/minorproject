const Fetch = async (url) => {
    const fetchUrl = 'https://cors-anywhere.herokuapp.com/' + url;

    let res = await fetch(fetchUrl);
    let dab = await res.json();
    return dab;
}

export default Fetch;