import { Modal } from 'antd'

export default function AncestorsModal({
  toogle,
  Toogle,
  setChange,
  setGender,
}) {
  function Toogling(gender) {
    Toogle(false)
    setChange(true)
    setGender(gender)
  }
  return (
    <Modal
      title='Add Ancestors'
      style={{
        top: 20,
      }}
      visible={toogle}
      onOk={() => Toogle(false)}
      onCancel={() => Toogle(false)}
      width={800}
      footer={null}
    >
      <div className='p-4 w-[100%] h-auto bg-white sm:p-6 lg:p-8'>
        <div className='flex  justify-between items-center m-[9px]  '>
          <p>Dam (Maternity)</p>
          <button
            className='w-fit bg-blue text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'
            onClick={() => Toogling('female')}
          >
            Add new
          </button>
        </div>
        <div className='flex  justify-between items-center  m-[9px]'>
          <p>Sire (Paternity)</p>
          <button
            className='w-fit bg-blue text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'
            onClick={() => Toogling('male')}
          >
            Add new
          </button>
        </div>
      </div>
    </Modal>
  )
}
