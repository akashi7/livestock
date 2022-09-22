import { Layout, Table } from 'antd';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllAnimalsGroup, getAnimals } from '../../../state/slices/animal.slice';
import { AnimalsGroupcolumns, columns } from './helper';

function ListAnimalsGroup() {
  const dispatch = useDispatch();
  const { createAnimalGroup } = useSelector((state) => state.animal);
  useEffect(() => {
    dispatch(getAllAnimalsGroup());
    /* eslint-disable-next-line */
  }, []);
  return (
    <Layout className="h-[100vh] w-full">
      <Table columns={AnimalsGroupcolumns} dataSource={createAnimalGroup.data} loading={createAnimalGroup.loading} />
    </Layout>
  );
}
export default ListAnimalsGroup;
