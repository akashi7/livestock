import './index.css'

export default function AnimalCard({ props, round, group }) {
  return (
    <div className='animal-header'>
      {props.name && (
        <div className={round ? 'rouz' : 'round'}>
          {' '}
          {props.name && props.name.slice(0, 1)}{' '}
        </div>
      )}
      <h3 className='animal-t'>{props.name}</h3>
      <h3 className='animalId'>
        {' '}
        {/* {group?"":} */}
        {props.earring_num ? props.earring_num : 'N/A'}{' '}
      </h3>
    </div>
  )
}
