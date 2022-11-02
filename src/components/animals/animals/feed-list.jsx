import { Layout, Table } from 'antd';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { GetAllFeeds } from '../../../state/slices/animal.slice';
import { AnimalFeedColmns } from './helper';

function ListAnimalFeeds() {
  const dispatch = useDispatch();
  const { allFeeds } = useSelector((state) => state.animal);
  useEffect(() => {
    dispatch(GetAllFeeds());
    /* eslint-disable-next-line */
  }, []);
  return (
    <Layout className="h-[100vh] w-full">
      <Table
        columns={AnimalFeedColmns}
        dataSource={allFeeds.data}
        loading={allFeeds.loading}
      />
    </Layout>
  );
}
export default ListAnimalFeeds;
