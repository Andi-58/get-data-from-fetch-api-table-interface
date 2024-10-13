// Menhubungkan ke API / mengambil data
const getUsers = async () => {
    const url = 'https://jsonplaceholder.typicode.com/users';
    const response = await fetch(url);
    return await response.json();
};

// Filter data
const render = (users) => {
    return users.map(({ id, name, username, email }) => 
        `<tr>
            <td>${id}</td>
            <td>${name}</td>
            <td>${username}</td>
            <td>${email}</td>
        </tr>`).join('');
};

// Menampilkan data
(async () => {
    const users = await getUsers();
    document.querySelector('#data-api').innerHTML = `<tbody>${render(users)}</tbody>`;
})();