import UserForm from "./UserForm"
import "./UserForm.css"


const newUser = () => {
    return(
        <section className="constainer">
            <h5>Registrati</h5>
            <UserForm />
        </section>
    )
}
export default newUser;