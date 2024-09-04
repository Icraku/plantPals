// Load environment variables from .env file

export const plantOptions = {
    method: 'GET',
    redirect: 'follow'
};
/* fetch(`https://perenual.com/api/species-list?key=${process.env.PLANT_PERENUAL_API_KEY}`, requestOptions)
    .then(response => response.text())
    .then(result => console.log(result))
    .catch(error => console.log('error', error)); */

// Function to fetch data from API
export const fetchData = async (url, options) => {
    try {
        const response = await fetch(url, options);
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching data:', error);
        throw error;
    }
};