async function fetchPosts() {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    const posts = await response.json();
    const filteredPosts = posts.filter(post => post.title.length < 22);
    const titles = filteredPosts.map(post => post.title);
  
    const titlesList = document.createElement('ul');
    titles.forEach(title => {
      const li = document.createElement('li');
      li.textContent = title;
      titlesList.appendChild(li);
    });
  
    document.body.appendChild(titlesList);
  }
  
  fetchPosts();ы
