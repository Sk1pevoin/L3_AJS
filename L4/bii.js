fetch('https://jsonplaceholder.typicode.com/todos')
    .then(response => {
        if (!response.ok) {
            throw new Error('Вы: Ошибка');
        }
        return response.json();
    })
    .then(todos => {
        const filteredUsers= todos.filter(todo => !todo.completed);
        console.log("Отсортированные по completed", filteredUsers);
    })
    .catch(error => {
        reject(error);
    });