import { Modal } from 'antd'
import Loader from '../../common/loader'
import moment from 'moment'

export default function OneNoteModal({ toogle, Toogle, OneNote }) {
  return (
    <Modal
      title='Details'
      centered
      visible={toogle}
      onOk={() => Toogle(false)}
      onCancel={() => Toogle(false)}
      width={800}
      footer={null}
    >
      <div className='p-4 w-[100%] h-auto bg-white sm:p-6 lg:p-8'>
        {OneNote.loading ? (
          <Loader />
        ) : (
          <div className='my-0 mx-auto w-[30%]'>
            <div className='flex flex-row'>
              <p className='w-[120px] text-blue text-lg'>Description</p>
              <p className='text-lg'> {OneNote.data.description} </p>
            </div>
            <div className='flex flex-row'>
              <p className='w-[120px] text-blue text-lg'>Category</p>
              <p className='text-lg'> {OneNote.data.category} </p>
            </div>
            <div className='flex flex-row'>
              <p className='w-[120px] text-blue text-lg'>Keywords</p>
              <p className='text-lg'> {OneNote.data.keywords} </p>
            </div>
            <div className='flex flex-row'>
              <p className='w-[120px] text-blue text-lg'>Date</p>
              <p className='text-lg'>
                {' '}
                {moment(OneNote.data.date).format('MM/DD/YYYY')}{' '}
              </p>
            </div>
          </div>
        )}
      </div>
    </Modal>
  )
}
