export const jobPostedByEmailPromise = (email, accessToken) => {
    return fetch(`https://devhire-server.vercel.app/jobs?email=${email}`, {
        headers: {
            authorization: `Bearer ${accessToken}`
        }
    })
    .then(res => res.json())
}