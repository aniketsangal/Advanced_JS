function getUser(id, callback) {
    setTimeout(() => {
        console.log("User fetched");

        const user = {
            id: 101,
            username: "Aniket"
        };

        callback(null, user);
    }, 1000);
}

function getProfile(id, callback) {
    setTimeout(() => {
        console.log("Profile fetched");

        const profile = {
            username: "Aniket",
            location: "GZB"
        };

        callback(null, profile);
    }, 1000);
}

function getPosts(username, callback) {
    setTimeout(() => {
        console.log("Posts fetched");

        const posts = ["post1", "post2", "post3"];

        callback(null, posts);
    }, 1000);
}

getUser(1, function (error, user) {

    if (error) {
        console.error(error);
        return;
    }

    getProfile(user.id, function (error, profile) {

        if (error) {
            console.error(error);
            return;
        }

        getPosts(profile.username, function (error, posts) {

            if (error) {
                console.error(error);
                return;
            }

            console.log(`Fetched Posts: ${posts}`);
        });
    });
});