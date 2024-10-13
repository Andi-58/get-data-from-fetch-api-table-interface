async function create(blogPost) {
    try {
        // Create the URL
        const url = 'https://jsonplaceholder.typicode.com/posts';

        // Create the headers / karena bentuk API adalah data, maka requestnya bentuk JSON biar bisa diolah
        const headers = {
            'Content-Type': 'application/json',
        };

        // Create the POST body
        const body = JSON.stringify({
            title: blogPost.title,
            body: blogPost.body,
            userId: blogPost.userId,
        });

        // Send the POST request
        const response = await fetch(url, { method: 'POST', headers, body });

        // Check the response status
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        // Parse the JSON response
        const data = await response.json();
        console.log('Success:', data);
    } catch (error) {
        // Handle any errors
        console.error('Error:', error);
    }
}

create({
    title: 'Test Post',
    body: 'This is a test post',
    userId: 1,
});