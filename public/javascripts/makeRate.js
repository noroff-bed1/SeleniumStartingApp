async function makeRate(userId, url) {
    let value = parseInt(prompt("Rate the hotel from 1 to 5"))
    if (value === null)
        return;
    if (value < 1 || value > 5)
        return;
    await fetch(url, {
        method: 'POST',
        headers: {
            'Content-type': 'application/json'
        },
        body: JSON.stringify({
            UserId: userId,
            Value: value
        })
    }).then((response) => {
        if (response.ok) {
            const resData = 'Made a rate';
            alert(resData);
            location.reload()
            return Promise.resolve(resData);    
        }
        return Promise.reject(response); 
    })
      .catch((response) => {
        console.log(response);
        alert(response.statusText);
      });
}