async function addRoom(url) {
    let hotelId = parseInt(prompt("Provide hotel id"));
    let capacity = parseInt(prompt("Provide the room Capacity"))
    let price = parseFloat(prompt("Provide the room Price"))
    await fetch(url, {
        method: 'POST',
        headers: {
            'Content-type': 'application/json'
        },
        body: JSON.stringify({
            HotelId: hotelId, 
            Capacity: capacity,
            PricePerDay: price
        })
    }).then((response) => {
        if (response.ok) {
            const resData = 'Created a new room';
            location.reload()
            return Promise.resolve(resData);    
        }
        return Promise.reject(response); 
    })
      .catch((response) => {
        alert(response.statusText);
      });
}