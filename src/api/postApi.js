export async function getPosts (user) {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts',
        {
            method : "POST",
            headers : { "Content-Type" : "application/json"},
            body : JSON.stringify({
               id: user.id,
               title:user.title,
               body: user.body,
               userId: user.userId
            })
        }
    )
    if(!response.ok){
            throw new Error("Failed to add the user")
         }
    return response.json();    
}