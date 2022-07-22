import React from 'react'

const ContactItem = ({contact, onContactDelete, buttonChange}) => {
	return (
		<div className={'contact_item'}>
			<span></span>
			<div className={'contact_info'}>
				<div>{contact.name} {contact.surname}</div>
				<p>{contact.phone}</p>
			</div>
			<div className={'contact_actions'}>
				<button
					onClick={()=>buttonChange(contact.id)}
				>✍️</button>
				<button
					onClick={()=>onContactDelete(contact)}
				>🗑</button>
			</div>
		</div>
	)
}

export default ContactItem