// import '../farm.css'
import AnimalCard from '../../common/Cards'
export default function FarmDetails({ props }) {
  return (
    <div className='container'>
      <div className='left-s'>
        <AnimalCard props={props} round={false} type={true} />
        <br />
        <div className='header'>
          <h1 className='title'>Location information</h1>
          <div className='hr'></div>
        </div>
        <div className='detailsContainer'>
          <div className='subd-container'>
            <p className='first'>Province</p>
            <p className='second'> {props.province} </p>
          </div>
          <div className='subd-container'>
            <p className='first'>District</p>
            <p className='second'> {props.district} </p>
          </div>
          <div className='subd-container'>
            <p className='first'>Sector</p>
            <p className='second'> {props.sector} </p>
          </div>

          <div className='subd-container'>
            <p className='first'>Cell</p>
            <p className='second'> {props.cell} </p>
          </div>
          <div className='subd-container'>
            <p className='first'>Status</p>
            <p className='second'> {props.status} </p>
          </div>
        </div>
        <br />
        <div className='header'>
          <h1 className='title'>User information </h1>
          <div className='hr'></div>
        </div>
        <div className='detailsContainer'>
          <div className='subd-container'>
            <p className='first'>First name</p>
            <p className='second'> {props?.user?.firstname} </p>
          </div>
          <div className='subd-container'>
            <p className='first'>Last name</p>
            <p className='second'> {props?.user?.lastname} </p>
          </div>
          <div className='subd-container'>
            <p className='first'>occupation</p>
            <p className='second'> {props?.user?.occupation} </p>
          </div>

          <div className='subd-container'>
            <p className='first'>role</p>
            <p className='second'> {props?.user?.role} </p>
          </div>
          <div className='subd-container'>
            <p className='first'>Status</p>
            <p className='second'> {props?.user?.status} </p>
          </div>
        </div>
        <br />
        <div className='header'>
          <h1 className='title'>Other information </h1>
          <div className='hr'></div>
        </div>
        <div className='detailsContainer'>
          <div className='subd-container'>
            <p className='first'>Others</p>
            <p className='second'> {props.others} </p>
          </div>
        </div>
      </div>
    </div>
  )
}
