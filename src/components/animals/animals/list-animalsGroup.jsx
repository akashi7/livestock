import { Layout, Table } from 'antd';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllAnimalsGroup } from '../../../state/slices/animal.slice';
import { AnimalsGroupcolumns } from './helper';

function ListAnimalsGroup() {
  const dispatch = useDispatch();
  const { animalsGroupData } = useSelector((state) => state.animal);
  useEffect(() => {
    dispatch(getAllAnimalsGroup());
    /* eslint-disable-next-line */
  }, []);
  return (
    <Layout className="h-[100vh] w-full">
      <Table
        columns={AnimalsGroupcolumns}
        dataSource={animalsGroupData.data}
        loading={animalsGroupData.loading}
      />
    </Layout>
  );
}
export default ListAnimalsGroup;
