import moment from 'moment'
import { FaTrash } from 'react-icons/fa'
import { FiEdit2 } from 'react-icons/fi'
import AnimalCard from '../../common/Cards'
import '../animal.css'

export default function AnimalDetails({ props, activities }) {
  // age: "6 days";
  // animalCategory_id: 4;
  // birth_date: "2022-11-15T00:00:00.000Z";
  // birth_weight: "7";
  // bred_date: null;
  // breed: "uyewq";
  // breed_id: null;
  // breeding_status: "Pregnant";
  // breeding_stock: "false";
  // coloring: "yuffv";
  // condition_score: "5";
  // contact_id: null;
  // createdAt: "2022-11-21T11:52:09.048Z";
  // createdBy: 2;
  // death_date: null;
  // deceased_reason: null;
  // description: "vaccinate animal 201";
  // earring_num: "56554";
  // electronic_id: "ytrewsrty";
  // estimated_value: null;
  // farm_id: 1;
  // father_id: null;
  // feed: null;
  // gender: "Female";
  // group_id: null;
  // group_qty: null;
  // harvest_label: "utreyycdd";
  // harvest_unit: "Lost";
  // height: "80";
  // id: 3;
  // internal_id: null;
  // is_group: false;
  // is_neutered: false;
  // keywords: "ytrewr";
  // market_price: null;
  // measurement_date: null;
  // mother_id: null;
  // name: "develop";
  // on_feed: false;
  // other_tag_number: null;
  // purchase_date: null;
  // purchase_price: "0";
  // purchased: false;
  // purchased_from_id: null;
  // purpose_id: 1;
  // registry_number: "6543123";
  // retention_score: "76";
  // sale_date: null;
  // sale_price: null;
  // sold_to: null;
  // status: "active";
  // tag_color: "uytre";
  // tag_number: "65432";
  // updatedAt: "2022-11-21T11:52:09.048Z";
  // weight: "20";

  return (
    <div className='container'>
      <div className='left-s'>
        <AnimalCard props={props} />
        <br />
        <div className='header'>
          <h1 className='title'>Basic information</h1>
          <div className='hr'></div>
        </div>
        <div className='detailsContainer'>
          <div className='subd-container'>
            <p className='first'>name</p>
            <p className='second'> {props.name} </p>
          </div>
          <div className='subd-container'>
            <p className='first'>Earring num</p>
            <p className='second'> {props.earring_num} </p>
          </div>
          <div className='subd-container'>
            <p className='first'>Electronic id</p>
            <p className='second'> {props.electronic_id} </p>
          </div>

          <div className='subd-container'>
            <p className='first'>Tag number</p>
            <p className='second'>
              {' '}
              {props.tag_number ? props.tag_number : '-'}{' '}
            </p>
          </div>
          <div className='subd-container'>
            <p className='first'>Status</p>
            <p className='second'> {props.status} </p>
          </div>
          <div className='subd-container'>
            <p className='first'>breeding status</p>
            <p className='second'> {props.breeding_status} </p>
          </div>
        </div>
        <br />

        <div className='header'>
          <h1 className='title'>Physical Characteristics </h1>
          <div className='hr'></div>
        </div>
        <div className='detailsContainer'>
          <div className='subd-container'>
            <p className='first'>Height</p>
            <p className='second'> {props.height} </p>
          </div>
          <div className='subd-container'>
            <p className='first'>Weight</p>
            <p className='second'> {props.weight} </p>
          </div>
          <div className='subd-container'>
            <p className='first'>Gender</p>
            <p className='second'> {props.gender} </p>
          </div>
          <div className='subd-container'>
            <p className='first'>Breed</p>
            <p className='second'> {props.breed} </p>
          </div>
        </div>
        <br />
        <div className='header'>
          <h1 className='title'>Birth Information </h1>
          <div className='hr'></div>
        </div>
        <div className='detailsContainer'>
          <div className='subd-container'>
            <p className='first'>Birth date</p>
            <p className='second'>
              {' '}
              {moment(props.birth_date).format('MM/DD/YYYY')}{' '}
            </p>
          </div>
          <div className='subd-container'>
            <p className='first'>Age</p>
            <p className='second'> {props.age} </p>
          </div>
          <div className='subd-container'>
            <p className='first'>Birth weight</p>
            <p className='second'> {props.birth_weight} lbs </p>
          </div>
        </div>
        <br />
        <div className='header'>
          <h1 className='title'>Death Information </h1>
          <div className='hr'></div>
        </div>
        <div className='detailsContainer'>
          <div className='subd-container'>
            <p className='first'>Death date</p>
            <p className='second'>
              {' '}
              {props.death_date
                ? moment(props.death_date).format('MM/DD/YYYY')
                : 'N/A'}{' '}
            </p>
          </div>
          <div className='subd-container'>
            <p className='first'>Deceased reason</p>
            <p className='second'> {props.deceased_reason} </p>
          </div>
          <div className='subd-container'>
            <p className='first'>Description</p>
            <p className='second'> {props.description} </p>
          </div>
        </div>
        <br />
        <div className='header'>
          <h1 className='title'>Sale Information </h1>
          <div className='hr'></div>
        </div>
        <div className='detailsContainer'>
          <div className='subd-container'>
            <p className='first'>Sale date</p>
            <p className='second'>
              {' '}
              {props.sale_date
                ? moment(props.sale_date).format('MM/DD/YYYY')
                : 'N/A'}{' '}
            </p>
          </div>
          <div className='subd-container'>
            <p className='first'>Sale price</p>
            <p className='second'> {props.sale_price} </p>
          </div>
          <div className='subd-container'>
            <p className='first'>Sold to</p>
            <p className='second'> {props.sold_to} </p>
          </div>
        </div>
      </div>
      <div className='right-s'>
        <div style={{ margin: '10px' }}>
          <br />
          <br />
          <div className='icons'>
            <p className='rhb'> Recent activities </p>
            <FiEdit2 size={22} color={'#31b0d5'} className='cursor-pointer' />
            <FaTrash size={19} color={'#C70000'} className='cursor-pointer' />
          </div>
          <br />
          {activities.length === 0 ? (
            <div style={{ color: 'black' }}>no recent activities </div>
          ) : (
            activities.map((act, idx) => {
              return (
                <div key={idx}>
                  <div className='rt-container'>
                    <p style={{ width: '90px' }}>
                      {' '}
                      {moment(props.date).format('MM/DD/YYYY')}{' '}
                    </p>
                    <p style={{ width: '70px' }}> {act.type} </p>
                    {act.type === 'expense' ? (
                      <p style={{ color: 'red' }}>{act.amount}</p>
                    ) : (
                      <p style={{ color: 'green' }}>{act.amount}</p>
                    )}
                  </div>
                </div>
              )
            })
          )}
        </div>
      </div>
    </div>
  )
}
