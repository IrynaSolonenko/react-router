import React from 'react'
import ContactItem from "./ContactItem"

const ContactsList = ({contacts, onContactDelete, buttonChange}) => {



	return (
		<div className={'contacts-container'}>

			{contacts.length === 0 ?
				<div>
					No contacts found
				</div>
				:
				contacts.map(contact => (
						<ContactItem
							contact={contact}
							key={contact.id}
							onContactDelete={onContactDelete}
							buttonChange={buttonChange}
						/>
					))
			}
		</div>
	)
}

export default ContactsList