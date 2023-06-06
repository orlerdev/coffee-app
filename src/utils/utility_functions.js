const Component = ({ isFavorite, isUserCreated }) => {
	const key = `${isFavorite ? "favorite" : "notFavorite"}_${
		isUserCreated ? "userCreated" : "notUserCreated"
	}`

	const elements = {
		favorite_userCreated: <div>Favorite and User Created Content</div>,
		favorite_notUserCreated: <div>Favorite but not User Created Content</div>,
		notFavorite_userCreated: <div>Not Favorite but User Created Content</div>,
		notFavorite_notUserCreated: (
			<div>Not Favorite and not User Created Content</div>
		)
	}

	return <div>{elements[key] || <div>Default Content</div>}</div>
}

export default Component
