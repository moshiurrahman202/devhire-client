export const jobPostedByEmailPromise = (email, accessToken) => {
    return fetch(`https://devhire-server-47ycxg3dh-moshiurrahman202s-projects.vercel.app/jobs?email=${email}`, {
        headers: {
            authorization: `Bearer ${accessToken}`
        }
    })
    .then(res => res.json())
}