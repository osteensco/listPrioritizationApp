import { Button } from "./button";



export const SignInButton = () => {
    const loggedIn=false //TODO user creds
    if (!loggedIn) {
        return (
            <Button action="modal" text="Sign In" linkPath="" />
        )
    } else {
        return (<></>)
    }
}


