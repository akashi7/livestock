import { Modal } from 'antd'
import CreateAnimal from '../animals/create'

export default function NewAnimalModal({ toogle, Toogle, gender, id }) {
  return (
    <Modal
      title='Animal'
      centered
      visible={toogle}
      onOk={() => Toogle(false)}
      onCancel={() => Toogle(false)}
      width={1100}
      footer={null}
    >
      <div className='p-1 w-[100%] h-auto bg-white sm:p-6 lg:p-8'>
        <CreateAnimal newgender={gender} id={id} />
      </div>
    </Modal>
  )
}
