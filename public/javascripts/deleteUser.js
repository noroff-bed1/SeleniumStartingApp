async function deleteUser(url, userId) {
    console.log(url, userId)
    await fetch(url, {
        method: 'DELETE',
        headers: {
            'Content-type': 'application/json'
        },
        body: JSON.stringify({
            id: userId
        })
    }).then((response) => {
        if (response.ok) {
            const resData = 'User deleted...';
            location.reload()
            return Promise.resolve(resData);    
        }
        return Promise.reject(response); 
    })
      .catch((response) => {
        alert(response.statusText);
      });;
}