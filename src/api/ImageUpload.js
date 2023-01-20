export const getImageUrl = async image => {
    const formData = new FormData();
    formData.append('image', image)

    const url = `https://api.imgbb.com/1/upload?key=${process.env.REACT_APP_Imgbb_key}`
    const response = await fetch(url, {
        method: 'POST',
        body: formData
    })
    const data = await response.json()

    console.log(data);
    return data.data.url;
}