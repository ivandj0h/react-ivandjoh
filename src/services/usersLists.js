export function getUsersList() {
    return fetch('https://jsonplaceholder.typicode.com/users')
        .then(data => data.json())
}