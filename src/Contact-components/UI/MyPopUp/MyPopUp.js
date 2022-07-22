import React, {useReducer} from 'react'

const MyPopUp = ({currentContactHandler, closePopUp, saveNewChange}) => {

	const MAIN_CONTACT = {
		name: currentContactHandler.name,
		surname: currentContactHandler.surname,
		phone: currentContactHandler.phone,
		isSave: true
	}

	const onChangeFieldsHandler = (state, action) => {
		switch (action.type){
			case'name':
				return{
					...state, name: action.payload, isSave: false
				}
			case'surname':
				return{
					...state, surname: action.payload, isSave: false
				}
			case'phone':
				return{
					...state, phone: action.payload, isSave: false
				}
			default: return state
		}

	}
	const [state, dispatch] = useReducer(onChangeFieldsHandler, MAIN_CONTACT)

	const saveChangeHandler = () => {
	if (!state.isSave) {
		saveNewChange({
			id: currentContactHandler.id,
			name: state.name,
			surname: state.surname,
			phone: state.phone
		})
	}
		closePopUp()
	}

	return (
		<div>
			<div className={'my-dialog my-dialog_visible'}
				 onClick={()=>closePopUp()}
			>
				<div className={'dialog_content'}
					 onClick={(e) => e.stopPropagation()}>
					<div className="dialog_header">
						<p>Edit contact: <strong>{state.name} {state.surname}</strong></p>
						<p
							onClick={closePopUp}
						>X</p>
					</div>
					<div className="dialog_body">
						<span></span>
						<div className="dialog_actions">
							<label htmlFor="name">First name</label>
							<input
								onChange={({target})=>
									dispatch({
										type:'name',
										payload: target.value
									})}
								value={state.name}
								type="text"
							/>
							<label htmlFor="surname">Last name</label>
							<input
								onChange={({target})=>
									dispatch({
										type:'surname',
										payload: target.value
									})}
								value={state.surname}
								type="text"
							/>
							<label htmlFor="phone">Phone number</label>
							<input
								onChange={({target})=>
									dispatch({
										type:'phone',
										payload: target.value
									})}

								value={state.phone}
								type="text"
							/>
							<button
								onClick={saveChangeHandler}
							>Save</button>
						</div>
					</div>
				</div>

			</div>
		</div>
	);
};

export default MyPopUp;