const Post = require('../models/post');
const User = require('../models/user');

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
    app.get('/posts', ensureAuthenticated, function(req, res) {
        const currentUser = req.user.id;

        User.findOne({ 'spotifyId': currentUser })
            .then(user => {
                if (user.friendsList) {
                    let friends = user.friendsList
                    console.log(`friends:${user.friendsList}`)
                    console.log('this is current user')
                    console.log(currentUser)

                    res.render("posts", { user, newfriend: user.request, passport: req.user, friends });

                } else {
                    res.render("posts", { user, newfriend: user.request, passport: req.user });
                }
            })
            .catch(err => {
                console.log(err.message);
            });
    });

};