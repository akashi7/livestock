import { Cascader, Input } from 'antd'
import { useField } from 'formik'
import './input.css'

export const InputFloatingLabel = ({ label, ...props }) => {
  const [field, meta] = useField(props)
  return (
    <div className=''>
      <div className='relative z-0'>
        <input
          type='text'
          id='floating_standard'
          className='block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer'
          placeholder=' '
          {...field}
          {...props}
        />
        <label
          htmlFor='floating_standard'
          className='absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6'
        >
          {label}
        </label>
      </div>
      {meta.touched && meta.error ? (
        <span className='error'>{meta.error}</span>
      ) : null}
    </div>
  )
}
export const InputText = ({ label, height, ...props }) => {
  const [field, meta] = useField(props)
  return (
    <>
      <div className='relative z-0'>
        <label className='font-small'>{label}</label>
        <Input
          type='text'
          placeholder=' '
          {...field}
          {...props}
          style={{ height: height ? height : '50px' }}
        />
      </div>
      {meta.touched && meta.error ? (
        <span className='error'>{meta.error}</span>
      ) : null}
    </>
  )
}

export const InputTextArea = ({ label, height, ...props }) => {
  const [field, meta] = useField(props)
  return (
    <>
      <div className='relative z-0'>
        <label className='font-small'>{label}</label>
        <textarea
          className='p-2 h-[100px] appearance-none border border-white-500 rounded w-full  text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline'
          {...field}
          {...props}
        />
      </div>
      {meta.touched && meta.error ? (
        <span className='error'>{meta.error}</span>
      ) : null}
    </>
  )
}

export const SelectInput = ({ label, options, height, ...props }) => {
  // const [field, meta] = useField(props)
  return (
    <div className=''>
      <div className='relative z-0 '>
        <label className='font-small'>{label}</label>
        <select
          className={`h-[${
            height ? height : '50px'
          }] p-2 appearance-none border border-white-500 rounded w-full  text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline`}
          placeholder=''
          // {...field}
          {...props}
        >
          {/* {enable && options.length === 0 ? (
            <option value='' onClick={() => ToogleModal()}>
              --Add new--
            </option>
          ) : (
            <option value=''>Select Option</option>
          )} */}

          <option value=''>Select Option</option>

          {options.map((item, index) => (
            <option value={item.value} key={index}>
              {item.label}
            </option>
          ))}
        </select>
      </div>
      {/* {meta.touched && meta.error ? (
        <span className='error'>{meta.error}</span>
      ) : null} */}
    </div>
  )
}

export const InputSelect = ({ label, options, height, enable, ...props }) => {
  const [field, meta] = useField(props)
  return (
    <div className=''>
      <div className='relative z-0 '>
        <label className='font-small'>{label}</label>
        <select
          className={`h-[${
            height ? height : '50px'
          }] p-2 appearance-none border border-white-500 rounded w-full  text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline`}
          placeholder=''
          {...field}
          {...props}
        >
          {/* {enable && options.length === 0 ? (
            <option value='' onClick={() => ToogleModal()}>
              --Add new--
            </option>
          ) : (
            <option value=''>Select Option</option>
          )} */}

          <option value=''>Select Option</option>

          {options.map((item, index) => (
            <option value={item.value} key={index}>
              {item.label}
            </option>
          ))}
        </select>
      </div>
      {meta.touched && meta.error ? (
        <span className='error'>{meta.error}</span>
      ) : null}
    </div>
  )
}
export const CascadeSelect = ({
  width = '100%',
  onChange,
  label,
  options,
  ...props
}) => {
  const [meta] = useField(props)
  return (
    <div className=''>
      <label className='font-small'>{label}</label>
      <div class='relative z-0 flex'>
        <Cascader
          style={{ width: width }}
          onChange={onChange}
          options={options}
        />
      </div>
      {meta.touched && meta.error ? (
        <span className='error'>{meta.error}</span>
      ) : null}
    </div>
  )
}
