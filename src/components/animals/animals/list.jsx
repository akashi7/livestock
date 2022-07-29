import { Layout, Table } from 'antd';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAnimals } from '../../../state/slices/animal.slice';
import { columns } from './helper';

function ListAnimals() {
  const dispatch = useDispatch();
  const { get } = useSelector((state) => state.animal);
  useEffect(() => {
    dispatch(getAnimals());
    /* eslint-disable-next-line */
  }, []);
  return (
    <Layout className="h-[100vh] w-full">
      <Table columns={columns} dataSource={get.data} loading={get.loading} />
    </Layout>
  );
}
export default ListAnimals;
