import Button from "../Button";

function LoginAndLogout(){
    const isLogedIn=true
    // if(isLogedIn){
    //     return <Button text="Logout"/>
    // }else{
    //        return <Button text="Login"/>
    // }
    // return isLogedIn? <Button text="Log out"/>: <Button text="Login"/>
        return isLogedIn&&<Button text="Log out"/>
}
export default LoginAndLogout;