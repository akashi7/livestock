import { Layout, Table } from 'antd';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllFarms } from '../../../state/slices/farm.slice';
import { columns } from './helper';

function ListFarms() {
  const dispatch = useDispatch();
  const { get } = useSelector((state) => state.farm);
  useEffect(() => {
    dispatch(getAllFarms());
    /* eslint-disable-next-line */
  }, []);
  return (
    <Layout className="h-[100vh] w-full">
      <Table columns={columns} dataSource={get.data} loading={get.loading} />
    </Layout>
  );
}
export default ListFarms;
