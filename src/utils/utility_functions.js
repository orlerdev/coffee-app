//DUAL VARIABLE SWITCH FUNCTION
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

//REACT SWITCH STATEMENT EXPRESSION SHORTHAND
{
  'case1': 'Result for case 1',
  'case2': 'Result for case 2',
  'case3': 'Result for case 3'
}['case2']

	const key = `${isFavorite ? "favorite" : "notFavorite"}_${
		isUserCreated ? "userCreated" : "notUserCreated"
	}`


	const icons = {
		favorite_userCreated: (
			<div>
				{heartFull}
				{heartBreak}
				{trash}
			</div>
		),
		favorite_notUserCreated: (
			<div>
				{heartFull}
				{heartBreak}
			</div>
		),
		notFavorite_userCreated: (
			<div>
				{empty}
				{trash}
			</div>
		),
		notFavorite_notUserCreated: <div>{empty}</div>
	}