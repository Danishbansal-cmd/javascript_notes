const User = {
    email: 'h@hc.com',
    _password: "abc",


    get emaill(){
        return this.email
    },

    // set email(value){
    //     this._email = value
    // }
}

const tea = Object.create(User)
console.log(tea.emaill);