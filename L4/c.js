async function asSortDataPosts(){
    const response = await fetch('https://jsonplaceholder.typicode.com/posts')
    const data = await response.json();
    return data.sort((a,b)=>b.title.length-a.title.length);
}

async function asSortDataComms(){
    const response = await fetch('https://jsonplaceholder.typicode.com/comments')
    const data = await response.json();
    return data.sort((a,b)=>a.name.length-b.name.length)
}

async function asStoreSomeData() {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    const users = await response.json();
    const filteredUsers = users.filter(user => ({
        id: user.id,
        name: user.name,
        username: user.username,
        email: user.email,
        phone: user.phone
    }));
        
    return filteredUsers;
}

async function asStoreSomeTasks() {
    const response = await fetch('https://jsonplaceholder.typicode.com/todos');
    const tasks = await response.json();
    const filteredTasks = tasks.filter(task => task.completed === false);
    return filteredTasks;
}