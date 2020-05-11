export async function callApiWithAccessToken(endpoint, token) {
    const headers = new Headers();
    const bearer = `Bearer ${token}`;
    headers.append("Authorization", bearer);

    const options = {
        method: "GET",
        headers
    };

    const response = await fetch(endpoint, options);
    const data = await response.json();
    console.log(data);
    return JSON.stringify(data, null, 2);
}
