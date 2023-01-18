import { Modal } from 'antd'

export default function AddGroupModal({ toogle, Toogle }) {
  return (
    <Modal
      title='Add group'
      style={{
        top: 20,
      }}
      visible={toogle}
      onOk={() => Toogle(false)}
      onCancel={() => Toogle(false)}
      width={800}
      footer={null}
    >
      <div className='p-4 w-[100%] h-auto bg-white sm:p-6 lg:p-8'>add new</div>
    </Modal>
  )
}
