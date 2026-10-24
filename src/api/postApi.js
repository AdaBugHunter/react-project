export async function getPosts () {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts',
        {
            method: "GET",
            headers: { "Content-Type": "application/json" }
        });

    if (!response.ok) {
        throw new Error("Failed to fetch posts");
    }

    return response.json();
}