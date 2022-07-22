import React, {useState, useMemo, useReducer} from 'react'
import MyHeader from "./MyHeader"
import ContactsList from "./ContactsList"
import MyPopUp from "./UI/MyPopUp/MyPopUp"
import SearchBar from "./UI/SearchBar/SearchBar"
import reducer, {MAIN_CONTACT_LIST} from "./reducer";


const ContactsBook = () => {

	const [state, dispatch] = useReducer(reducer, MAIN_CONTACT_LIST);

	const onContactDelete = (contact) => {
		dispatch({
			type: 'delete',
			payload: contact.id
		})
	}

	const filterHandler = useMemo (() =>{
	return state.contacts.filter(contact => contact.name.toLowerCase().includes(state.filterContacts.toLowerCase())
		|| contact.surname.toLowerCase().includes(state.filterContacts.toLowerCase())
		|| contact.phone.toLowerCase().includes(state.filterContacts.toLowerCase()))
	}, [state.contacts, state.filterContacts])


	const currentContactHandler = useMemo (() => {
		return filterHandler.find(contact=>contact.id === state.currentContactId)
	}, [state.currentContactId, filterHandler])


	const closePopUp = () => {
		dispatch(
			{
				type: 'closeContact',
				payload: null
			})
	}

	const saveNewChange = (saveChangeHandler) => {
	  dispatch({
			  type: 'saveContactChange',
			  payload: saveChangeHandler
		  })
	}

	return (
		<div className={'container'}>
			<MyHeader/>
			<SearchBar
				onSearch={e=>
					dispatch(
						{
							type: 'search',
							payload: e.target.value
						})}
				value={state.filterContacts}
			/>
			<ContactsList
				contacts={filterHandler}
				onContactDelete={onContactDelete}
				buttonChange={(id)=>dispatch(
					{
						type: 'currentContactId',
						payload: id
					})}
			/>

			{
				(typeof state.currentContactId === 'number' )
				? <MyPopUp
						currentContactHandler={currentContactHandler}
						closePopUp={closePopUp}
						saveNewChange={saveNewChange}
					/>
				: <></>
			}

		</div>
	)
}

export default ContactsBook