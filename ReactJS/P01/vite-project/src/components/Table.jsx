import { nutritions } from "../constants";

const Table = ({data}) => {
    return (
        <table>
            <tr>
                <th colSpan={2}>Dessert (100g serving)</th>
                <th className="cat">↑ Calories</th>
                <th className="cat">Fat(g)</th>
                <th className="cat">Carbs(g)</th>
                <th className="cat">Protein(g)</th>
            </tr>
            {
                data.map((item) => (
                    <tr key={item.id}>
                        <th><input type="checkbox" name={item.title} id={item.title} /></th>
                        <th >{item.title}</th>
                        <td>{item.categories.calories}</td>
                        <td>{item.categories.fat}</td>
                        <td>{item.categories.carbs}</td>
                        <td>{item.categories.protein}</td>
                    </tr>
                ))
            }
        </table>
    )
}

export default Table;