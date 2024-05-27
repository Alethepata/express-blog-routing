const posts = require('../db/posts.js');

module.exports = {
    controllerPosts: (req, res) => { 
        res.format({
            html: () => {
                let html;
                posts.forEach(post => {
                    html += `
                <div>
                   <h1>${post.title}</h1>
                   <img width="500" src="imgs/posts/${post.image}" alt="${post.title}">
                   <p>${post.content}</p>
                   <ul>
                `;
                    post.tags.forEach(tag => html += `<li>${tag}</li>`);
                    html += '</ul></div>';
                    
                })
                res.send(html);
        
            },
            json: () => {
                res.json(posts);
            }
        })
    }
}