import React from 'react'

const SearchBar = ({onSearch, value}) => {


	return (
		<input
			value={value}
			onChange={onSearch}
			className={'search'}
			placeholder={'Search'}
		/>
	)
}

export default SearchBar