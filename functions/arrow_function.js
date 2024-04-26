const user = {
    username: "akash",
    email: "google.com",
    welcomeMessage: function(){
        console.log(`${this.username} welcome to the website.`)
    }
}

user.welcomeMessage()