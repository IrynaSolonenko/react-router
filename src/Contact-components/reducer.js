export const MAIN_CONTACT_LIST = {
    contacts:[
        {
            id: 1,
            name: 'Lidia',
            surname: 'Nikitina',
            phone: '+38 (123) 123 45 67'
        },
        {
            id: 2,
            name: 'Alice',
            surname: 'Kluni',
            phone: '+38 (163) 123 45 67'
        },
        {
            id: 3,
            name: 'Carol',
            surname: 'Semko',
            phone: '+38 (123) 163 45 67'
        },
        {
            id: 4,
            name: 'Olga',
            surname: 'Baritska',
            phone: '+38 (123) 123 46 67'
        },
        {
            id: 5,
            name: 'Olga',
            surname: 'Marirchko',
            phone: '+38 (123) 123 45 66'
        },
        {
            id: 6,
            name: 'Svetlana',
            surname: 'Prihodko',
            phone: '+38 (323) 323 45 67'
        },
        {
            id: 7,
            name: 'Alex',
            surname: 'Manson',
            phone: '+38 (123) 123 43 67'
        }],
    currentContactId: null,
    filterContacts: ''
}


export default function reducer(state, action){
    switch (action.type){
        case 'delete':
            return {
                ...state, contacts: state.contacts.filter(current=>current.id !== action.payload)
            }
        case 'search':
            return {
                ...state, filterContacts: action.payload
            }
        case 'closeContact':
            return {
                ...state, currentContactId: action.payload
            }
        case 'currentContactId':
            return {
                ...state, currentContactId: action.payload
            }
        case 'saveContactChange':
        	const newContacts = state.contacts.slice();
        	const prevIndex = newContacts.findIndex(currentId=>currentId.id === action.payload.id)
        	newContacts.splice(prevIndex, 1, action.payload)
        	return {
                ...state, contacts: newContacts
            }


        default: return state;
    }
}