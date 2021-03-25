import React, {useEffect, useState} from "react"
import {IUser} from "../Models/IUsers";
import axios from "axios";

interface IProps{
    receiveUser : (user : IUser) => void
}
interface IState{
    users : IUser[]
}

let ContactList : React.FC<IProps> = ({receiveUser}) => {

    let [state , setState] = useState<IState>({
        users : [] as IUser[]
    })

    useEffect(() => {
        let dataUrl : string = "https://gist.githubusercontent.com/manikumar455045/040cfb672a251464ccba35c99adf0922/raw/d4bc89badc9658f13cb5d94e00f6946582f8b968/contact.json"
        axios.get(dataUrl).then((response) => {
            setState({
                users : response.data
            })
        }).catch((error) => {
            console.log(error)
        })
    })

    let sendContact = (user : IUser) => {
        receiveUser(user)
    }

    return (
        <React.Fragment>
            <section className="mt-2">
                <div className="container">
                    <table className="table table-striped text-center">
                        <thead className="bg-dark text-white">
                        <tr>
                            <td>ID</td>
                            <td>Name</td>
                            <td>Email</td>
                            <td>City</td>
                        </tr>
                        </thead>
                        <tbody>
                        {
                            state.users.map((user) => {
                                return (
                                    <tr key={user.login.uuid} onClick={sendContact.bind(this,user)}>
                                      <td>{user.login.uuid.substr(31)}</td>
                                        <td>{user.name.title} {user.name.first} {user.name.last}</td>
                                        <td>{user.email}</td>
                                        <td>{user.location.city}</td>
                                    </tr>
                                )
                            })
                        }
                        </tbody>
                    </table>
                </div>
            </section>
        </React.Fragment>
    )

}

export default ContactList;