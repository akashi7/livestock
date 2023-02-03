import moment from 'moment'

export const TreatmentReportColumn = [
  {
    title: 'Animal Name',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: 'Animal Breed',
    dataIndex: 'breed',
    key: 'breed',
  },
  {
    title: 'Type',
    dataIndex: 'treatment_type',
    key: 'treatment_type',
  },
  {
    title: 'Mode',
    dataIndex: 'mode',
    key: 'mode',
  },
  {
    title: 'Description',
    dataIndex: 'Description',
    key: 'Description',
  },
  {
    title: 'Site',
    dataIndex: 'site',
    key: 'site',
  },
  {
    title: 'Batch',
    dataIndex: 'Batch',
    key: 'Batch',
  },
  {
    title: 'Date',
    dataIndex: 'date',
    key: 'date',
    render: (text) => moment(text).format('MM/DD/YYYY'),
  },
]
