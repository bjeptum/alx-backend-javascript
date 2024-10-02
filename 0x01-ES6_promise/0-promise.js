function getResponseFromAPI() {
    return new Promise((resolve, reject) => {
        // Simulate an API call
        setTimeout(() => {
            const response = {
                status: 200,
                body: 'Success!',
            };
            resolve(response);
        }, 1000);
    });
}

export default getResponseFromAPI;
