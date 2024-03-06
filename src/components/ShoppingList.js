import plantList from '../data/plantList'
import '../styles/ShoppingList.css'

function ShoppingList() {

	// extracts the unique plant categories
	const categories = plantList.reduce(
		(accumulator, plant) =>
		// if the array accumulator array doesn't have the categorie we add it
		accumulator.includes(plant.category) ? accumulator : accumulator.concat(plant.category),
		[]
	)

	return (
		<div>
			<ul>
				{categories.map(
					(cat) => (
						<li key={cat}>{cat}</li>
					)
				)}
			</ul>
			<ul className='jh-plant-list'>
				{plantList.map(
					(plant) => (
						<li key={plant.id} className='jh-plant-item'>
							{plant.name}
							{plant.isBestSale ? <span>🔥</span> : null}
							{plant.hasOwnProperty('isSpecialOffer') ? <div className='jh-sales'>Sale</div> : null}
						</li>
					)
				)}
			</ul>
		</div>
	)
}

export default ShoppingList