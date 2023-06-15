class User{
    username:string
    password: string
    token:string

    constructor(username:string, password:string, token:string){
        this.username = username;
        this.password = password;
        this.token = token;
    }
}


class AuthenticationProvider {



    static authenticate(username: string, password: string) {
        //perform service lookups and such
        //pretend we are making SOA calls or whatever

        //our user repository, lazily stored inside this static function
        let users: Array<User> = new Array<User>(
            new User("benmullen1@gmail.com", "12345", "12345"),
            new User("bob@bob","12345","56789"),
            new User("asdf@asdf","12345","55555")
        );
        let user:any = users.find(user=>{
            if (user.username===username){
                if (user.password===password){
                    return user.token
                }
            }
            return undefined;
        });
        if (user !== undefined){
            return user.token;
        } 
        return null;
        
        
    }

} export default AuthenticationProvider;