import { Layout, Table } from 'antd';
import { columns } from './helper';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllAnimalExpense } from '../../../state/slices/animalExp.slice';

function AnimalExpensesLists() {
  const dispatch = useDispatch();
  const { get } = useSelector((state) => state.animalExpenses);

  useEffect(() => {
    dispatch(getAllAnimalExpense());
    /* eslint-disable-next-line */
  }, []);

  return (
    <Layout className="h-[100vh] w-full">
      <Table columns={columns} dataSource={get.data} loading={get.loading} />
    </Layout>
  );
}

export default AnimalExpensesLists;
