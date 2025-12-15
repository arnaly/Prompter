import { Link } from 'react-router-dom'
import './CategoryCard.css'

function CategoryCard({ title, link, completed = false }) {

  return (
    <Link to={link} className={`card ${completed ? 'card-completed' : ''}`}>
        <h1 className='card-title'>{title}</h1>
        {completed && <span className='card-check'>✓</span>}
    </Link>
  )
}

export default CategoryCard
