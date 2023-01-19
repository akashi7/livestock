import { Layout, Table } from 'antd';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAnimalCatgories } from '../../../state/slices/animal.slice';
import { AnimalCategoryColums } from './helper';

function ListAnimalsCategory() {
  const dispatch = useDispatch();
  const animalCatgories = useSelector((state) => state.animal.categories);
  useEffect(() => {
    dispatch(getAnimalCatgories());
    /* eslint-disable-next-line */
  }, []);
  return (
    <Layout className="h-[100vh] w-full">
      <Table
        columns={AnimalCategoryColums}
        dataSource={animalCatgories.data}
        loading={animalCatgories.loading}
      />
    </Layout>
  );
}
export default ListAnimalsCategory;
