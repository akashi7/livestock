import { Layout } from 'antd'
import moment from 'moment'
import { useEffect, useState } from 'react'
import { Calendar, momentLocalizer } from 'react-big-calendar'
import 'react-big-calendar/lib/css/react-big-calendar.css'
import { FaTrash } from 'react-icons/fa'
import { FiEdit2 } from 'react-icons/fi'
import { useDispatch, useSelector } from 'react-redux'
import { SeeOneAnimal } from '../../../state/slices/animal.slice'
import {
  CreateEventApi,
  ListEventApi,
  EditEventApi,
} from '../../../state/slices/event.slice'
import AddEventModal from '../../animals/modals/addEvent'
import AnimalCard from '../../common/Cards'
import MenuBar from '../../common/menubar/menubar'

const localizer = momentLocalizer(moment)

export default function EventList({ farmId }) {
  const dispatch = useDispatch()
  const { events: Events, loading } = useSelector((state) => state.event)
  const { animal } = useSelector((state) => state.animal)

  const id = localStorage.getItem('id')

  useEffect(() => {
    dispatch(ListEventApi({ fId: farmId, param: id }))
    dispatch(SeeOneAnimal({ Id: farmId, params: id }))
    //eslint-disable-next-line
  }, [])

  const [toogle, setToogle] = useState(false)
  const [edit, setEdit] = useState(null)

  function Toogle() {
    setToogle(!toogle)
  }

  const [seeTasks, setSeeTasks] = useState(true)

  function ToogleView() {
    setSeeTasks(!seeTasks)
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
            <div className='flex  flex-row'>
              <button
                type='button'
                className='w-40 bg-blue text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'
                onClick={Toogle}
              >
                Add new task
              </button>
              <div className='pl-[10px]'>
                <button
                  type='button'
                  className='w-40  bg-blue text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'
                  onClick={ToogleView}
                >
                  {seeTasks ? 'View Calender' : 'View List'}
                </button>
              </div>
            </div>
            {toogle && (
              <AddEventModal
                Toogle={setToogle}
                toogle={toogle}
                id={id}
                CreateEventApi={CreateEventApi}
                loading={loading}
                list={ListEventApi}
                dispatch={dispatch}
                editValues={edit}
                EditEventApi={EditEventApi}
                fId={farmId}
              />
            )}
          </div>
          <br />
          <div style={{ margin: '10px' }}>
            <div
              className=''
              style={{
                minHeight: 480,
                width: seeTasks ? 'auto' : '70%',
                margin: seeTasks ? 'auto' : '0 auto',
              }}
            >
              {seeTasks ? (
                <div>
                  {Events.data.map((event, idx) => {
                    return (
                      <div
                        key={idx}
                        className='flex justify-between m-[10px] w-[100%] items-center bg-smoke p-[10px] border-l-4 border-blue'
                      >
                        <div className='flex flex-col'>
                          <p className='m-1'>
                            {moment(event.start).format('MM/DD/YYYY')}
                            <span className='pl-[5px]'>
                              - {moment(event.end).format('MM/DD/YYYY')}
                            </span>
                          </p>
                          <p className='m-1'> {event.title} </p>
                          <p className='bg-black w-[100%] p-[5px] text-white m-1'>
                            {event.description}
                          </p>
                          <div className='flex flex-row mt-3'>
                            <p>Status : </p>
                            <p> {event.status} </p>
                          </div>
                        </div>
                        <div className='flex justify-between  items-center'>
                          <FiEdit2
                            size={22}
                            color={'#31b0d5'}
                            className='cursor-pointer m-[5px]'
                            onClick={() => {
                              setEdit(event)
                              Toogle()
                            }}
                          />
                          <FaTrash
                            size={19}
                            color={'#C70000'}
                            className='cursor-pointer m-[5px]'
                          />
                        </div>
                      </div>
                    )
                  })}
                </div>
              ) : (
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
              )}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}
