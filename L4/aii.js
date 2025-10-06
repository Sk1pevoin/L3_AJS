fetch('https://jsonplaceholder.typicode.com/comments')
        .then(response => {
            if (!response.ok) {
                throw new Error('Вы:Ошибка');
            }
            return response.json(); 
        })
        .then(comments => {
            const sortedComments = comments.sort((a, b) => a.name.localeCompare(b.name));
            console.log("Отсортированные юзеры по комментам", sortedComments);
        })
        .catch(error => {
            callback(error, null);
        });