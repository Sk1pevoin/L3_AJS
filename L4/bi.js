fetch('https://jsonplaceholder.typicode.com/users')
  .then((response) => response.json())
  .then((users) => {
    const filteredUsers = users.map((user) => {
      return {
        id: user.id,
        name: user.name,
        username: user.username,
        email: user.email,
        phone: user.phone
      };
    });
    console.log('Отфильтрованные пользователи:', filteredUsers);
    return filteredUsers;
  })
  .catch((error) => console.error('Ошибка при получении пользователей:', error));