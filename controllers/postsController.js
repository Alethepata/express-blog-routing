const posts = require('../db/posts.js');

const index = (req, res) => {
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
};

const show = (req, res) => {
    const slug = req.params.slug;
    const post = posts.find(post => post.slug === slug);
    res.format({
        html: () => {
            let html;

                html += `
            <div>
               <h1>${post.title}</h1>
               <img width="500" src="/imgs/posts/${post.image}" alt="${post.title}">
               <p>${post.content}</p>
               <ul>
            `;
                post.tags.forEach(tag => html += `<li>${tag}</li>`);
                html += '</ul></div>';
                
            res.send(html);
    
        },
        json: () => {
            res.json(post);
        }
    })
}

module.exports = {
    index,
    show
}