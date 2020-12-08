window.addEventListener('load', function(){
    let dataList = document.querySelector('#listOfBlogs');
    fetch('http://localhost:3000/blogs')
    .then(r => r.json())
    .catch(reason => {

    })
    .then(blogs => {
        blogs.forEach(blog => {
            dataList.appendChild(document.createElement('p')).outerHTML = `
            <div class="card mb-3">
                <div class="card-header bg-dark  text-white">${blog.title}</div>
                <div class="card-body bg-light">
                    <p>${blog.description}</p>
                    <p>Category: ${blog.category}</p>
                    <p>Posted on: ${blog.postedOnDate}</p>
                </div>
            </div>
            `
        });
    })
});