import React from 'react'
import { Contact } from "./Contact";

const users = [
    {
        name: 'Joey',
        avatar: require("../images/joey.png"),
        online: true
    },
    {
        name: 'Dee-Dee',
        avatar: require("../images/dee-dee.png"),
        online: false
    },
    {
        name: 'Marky',
        avatar: require("../images/marky.jpeg"),
        online: true
    }
];

export const ContactList = () => (

    <section>
        {
            users.map( user => <Contact avatar={user.avatar} name={user.name} online={user.online ?? '' } /> )
        }
    </section>
)