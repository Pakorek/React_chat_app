import './Contact.css';

const name = "Goldorak"
const avatar = 'url'
const online = true

const Contact = () => (
    <div className="Contact">
        <img className="avatar" src={avatar} alt="avatar" />
        <div>
            <h4 className="name">{name}</h4>
            <p className="status" >
                <span className={ online ? 'status-online' : 'status-offline'}/>
                { online ? 'Online' : 'Offline' }
            </p>
        </div>
    </div>
)

export { Contact }
