const ENDPOINT = 'https://randomuser.me/api/?results=50';

const fetchReasons = () => fetch(ENDPOINT).then(response => response.json());

export { fetchReasons };