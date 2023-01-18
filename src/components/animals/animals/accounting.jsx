import { Layout, Table } from 'antd'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
  GetAccountingData,
  SeeOneAnimal,
} from '../../../state/slices/animal.slice'
import AnimalCard from '../../common/Cards'
import MenuBar from '../../common/menubar/menubar'
import { accountColumns } from './helper'
import Search from '../../common/search'

export default function ListAccounts() {
  const dispatch = useDispatch()

  const { animal, accountings } = useSelector((state) => state.animal)
  const id = localStorage.getItem('id')

  useEffect(() => {
    dispatch(GetAccountingData({ param: id }))
    dispatch(SeeOneAnimal({ params: id }))
    //eslint-disable-next-line
  }, [])

  return (
    <Layout className='layout-container'>
      <div className='main-container'>
        <MenuBar />
        <div className='leftContainer'>
          <AnimalCard props={animal.data} round={true} />
          <br />
          <div style={{ margin: '10px' }}>
            <Table
              columns={accountColumns}
              dataSource={accountings.data}
              loading={accountings.loading}
            />
          </div>
        </div>
      </div>
    </Layout>
  )
}
