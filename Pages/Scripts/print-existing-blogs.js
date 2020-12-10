const numBlogsPerRow = 3;

window.addEventListener('load', function(){
    let dataList = document.querySelector('#listOfBlogs');
    fetch('http://localhost:3000/blogs')
    .then(r => r.json())
    .catch(reason => {
        console.log('Failed to fetch blogs');
    })
    .then(blogs => {
        const numRows = Math.trunc(blogs.length / numBlogsPerRow) + 1;
        let counter = 1;
        let currRow = 1;

        for(let i = 0; i < numRows; i++){
            dataList.appendChild(document.createElement('p')).outerHTML = `
            <div class="row" id="row-${i+1}">
            </div>
            `;
        }

        blogs.forEach(blog => {
            let rowContainer = document.querySelector(`#row-${currRow}`)
            rowContainer.appendChild(document.createElement('p')).outerHTML = `
                <div class="col-lg-4">
                    <div class="card mb-3">
                        <div class="card-header bg-dark  text-white">
                            <h5>${blog.title}</h5>
                        </div>
                        <div class="card-body bg-light">
                            <p>${blog.description}</p>
                            <p>Category: ${blog.category}</p>
                            <p>Posted on: ${blog.postedOnDate}</p>
                        </div>
                    </div>
                </div>
            `;
            if(counter == 3){
                currRow++;
                counter = 1;
            }
            counter++;
        });
    })
});