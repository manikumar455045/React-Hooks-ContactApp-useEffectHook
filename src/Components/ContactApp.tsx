import React, {useState} from "react"
import ContactList from "./ContactList";
import ContactCard from "./ContactCard";
import {IUser} from "../Models/IUsers";

interface IProps{
}
interface IState{
    selectedContact : IUser
}

let ContactApp : React.FC<IProps> = () => {

    let [state , setState] = useState<IState>({
        selectedContact : {} as IUser
    })

    let receiveContact = (user : IUser) => {
        setState({
            selectedContact : user
        })
    }

    return (
        <React.Fragment>
            <section className="mt-2">
                <div className="container">
                    <h2 className="text-center">Contact App</h2>
                    <p className="lead">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci, at debitis eos esse, eveniet excepturi expedita id illum iure molestias natus non nulla quae reiciendis sit soluta voluptas voluptate voluptatem.</p>
                </div>
            </section>
            <section className="mt-2">
                <div className="container">
                    <div className="row">
                        <div className="col-md-8">
                            <ContactList receiveUser = {receiveContact}/>
                        </div>
                        <div className="col-md-4">
                            <ContactCard user={state.selectedContact}/>
                        </div>
                    </div>
                </div>
            </section>
        </React.Fragment>
    )

}

export default ContactApp;