import User from "./User";
import UserClass from "./UserClass";

const About =() => {
    return(
        <div>
            <h1>About</h1>
            <h2>This is about Us series </h2>
            <User name={"Prince Gupta (function)"} />
            <UserClass name={"Prince Gupta (class) "} location={"Roorkee(class)"}/>
        </div>
    )
}
export default About;