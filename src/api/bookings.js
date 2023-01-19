import { async } from "@firebase/util";

// save booking
export const saveBooking = async bookingData => {
    const url = `${process.env.REACT_APP_Base_url}/bookings`

    const response = await fetch(url, {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(bookingData)
    })
    const data = await response.json()
    return data;
}

//get all bookings for usres
export const getAllBookingsByEmail = async email => {
    const url = `${process.env.REACT_APP_Base_url}/bookings?email=${email}`
    const response = await fetch(url)
    const data = response.json();
    return data;
}

//get all bookings for Admin
export const getAllBookings = async () => {
    const url = `${process.env.REACT_APP_Base_url}/bookings`
    const response = await fetch(url)
    const data = response.json();
    return data;
}
// delete booking