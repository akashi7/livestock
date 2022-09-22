import { Layout, Table } from 'antd';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllAnimalsSickbay, getAnimals } from '../../../state/slices/animal.slice';
import { AnimalsSickbaycolumns} from './helper';

function ListAnimalsSickBay() {
  const dispatch = useDispatch();
  const { animalsSickBayData } = useSelector((state) => state.animal);
  console.log()
  useEffect(() => {
    dispatch(getAllAnimalsSickbay());
    /* eslint-disable-next-line */
  }, []);
  return (
    <Layout className="h-[100vh] w-full">
      <Table columns={AnimalsSickbaycolumns} dataSource={animalsSickBayData.data} loading={animalsSickBayData.loading} />
    </Layout>
  );
}
export default ListAnimalsSickBay;
