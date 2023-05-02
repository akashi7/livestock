import moment from 'moment'

export const onHeaderRow = (columns, index) => {
  return {
    style: { backgroundColor: 'blueviolet' }, // set the background color for the header row
  }
}

export const TreatmentReportColumn = [
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: 'Breed',
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
