const Post = require('../models/post');

module.exports = (app, ensureAuthenticated) => {

    app.get('/posts/new', ensureAuthenticated, function(req, res) {
        res.render('post-new', { user: req.user });
    });

    // CREATE
    app.post('/posts/new', (req, res) => {
        console.log(`${req.user.id}`)
        if (req.user) {
            var post = new Post(req.body);
            post.user = req.user.id;

            post
                .save()
                .then(post => {
                    console.log(`The post: ${post}`)
                    return post.user;
                })
                .then(user => {
                    console.log(`The user: ${user}`)
                        // REDIRECT TO THE NEW POST
                    res.redirect('/');
                })
                .catch(err => {
                    console.log(err.message);
                });
        } else {
            return res.status(401); // UNAUTHORIZED
        }
    });

    // INDEX
    app.get('/posts', ensureAuthenticated, (req, res) => {
        const currentUser = req.user.id;
        // LOOK UP THE POST

        console.log(req.user)

        Post.find({ 'user': currentUser }).populate()
            .then(post => {
                console.log(`${post}`)
                res.render("posts", { post, 'user': currentUser });
            })
            .catch(err => {
                console.log(err.message);
            });
    });
};