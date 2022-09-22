import axios from 'axios';
import * as dotenv from 'dotenv';

dotenv.config();

const { GOOGLE_API_KEY } = process.env;

export const getGeoCode = async (input) => {
    let { street, city, state } = input;
    input.address = `${street} ${city}, ${state}`;
    street = street.split(' ').join('+');
    city = city.split(' ').join('+');

    const { data } = await axios(
        `https://maps.googleapis.com/maps/api/geocode/json?address=${street},+${city},+${state}&key=${GOOGLE_API_KEY}`
    );

    if (data.results.length) {
        const { lat, lng } = data.results[0].geometry.location;
        input.latitude = lat;
        input.longitude = lng;
        input.address = data.results[0].formatted_address;
    }
    return input;
};
