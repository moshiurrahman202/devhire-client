export const myApplicationPromise = (email, accessToken) => {
    return fetch(`https://devhire-server-47ycxg3dh-moshiurrahman202s-projects.vercel.app/applications?email=${email}`, {
        headers: {
            authorization: `Bearer ${accessToken}`
        }
    }).then(res => res.json())
}