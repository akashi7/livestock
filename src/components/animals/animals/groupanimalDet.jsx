import AnimalCard from '../../common/Cards'
import '../animal.css'

export default function GroupAnimalDetails({ props }) {
  return (
    <div className='container'>
      <div className='left-s'>
        <AnimalCard props={props} group={true} />
      </div>
    </div>
  )
}
