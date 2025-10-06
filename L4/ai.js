fetch('https://jsonplaceholder.typicode.com/posts')
  .then((response) => response.json())
  .then((posts) => {
    const sortedPosts = posts.sort((a, b) => b.title.length - a.title.length);
    console.log('Отсортированные посты:', sortedPosts);
    return sortedPosts;
  })
  .catch((error) => console.error('Ошибка при получении постов:', error));