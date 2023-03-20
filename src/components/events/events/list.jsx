import { Layout } from 'antd'
import moment from 'moment'
import { useEffect, useState } from 'react'
import { Calendar, momentLocalizer } from 'react-big-calendar'
import 'react-big-calendar/lib/css/react-big-calendar.css'
import { useDispatch, useSelector } from 'react-redux'
import { SeeOneAnimal } from '../../../state/slices/animal.slice'
import { ListEventApi, CreateEventApi } from '../../../state/slices/event.slice'
import AddEventModal from '../../animals/modals/addEvent'
import AnimalCard from '../../common/Cards'
import MenuBar from '../../common/menubar/menubar'

const localizer = momentLocalizer(moment)

export default function EventList() {
  const dispatch = useDispatch()
  const { events: Events, loading } = useSelector((state) => state.event)
  const { animal } = useSelector((state) => state.animal)

  const id = localStorage.getItem('id')

  useEffect(() => {
    dispatch(ListEventApi({ param: id }))
    dispatch(SeeOneAnimal({ params: id }))
    //eslint-disable-next-line
  }, [])

  const [toogle, setToogle] = useState(false)

  console.log({ Events })

  function Toogle() {
    setToogle(!toogle)
  }

  const event = ({ event }) => {
    return (
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          backgroundColor: 'white',
          padding: '5px',
          border: '1px solid darkgreen',
          color: 'black',
        }}
      >
        {event.title}
        <br />{' '}
        <small style={{ marginLeft: '3px', color: 'black' }}>
          {event.description}
        </small>{' '}
      </div>
    )
  }

  return (
    <Layout className='layout-container'>
      <div className='main-container'>
        <MenuBar />
        <div className='leftContainer'>
          <AnimalCard props={animal.data} round={true} />
          <br />
          <div style={{ margin: '10px' }}>
            <button
              type='button'
              className='w-40 bg-blue text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'
              onClick={Toogle}
            >
              Add new task
            </button>
            {toogle && (
              <AddEventModal
                Toogle={setToogle}
                toogle={toogle}
                id={id}
                CreateEventApi={CreateEventApi}
                loading={loading}
                list={ListEventApi}
                dispatch={dispatch}
              />
            )}
          </div>
          <br />
          <div style={{ margin: '10px' }}>
            <div
              className=''
              style={{ minHeight: 480, width: '70%', margin: '0 auto' }}
            >
              <Calendar
                events={Events.data}
                step={60}
                localizer={localizer}
                showMultiDayTimes
                defaultDate={new Date()}
                style={{ minHeight: 580 }}
                components={{
                  event: event,
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}
