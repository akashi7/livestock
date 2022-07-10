import { useField } from "formik";
import { Cascader, Input } from "antd";
export const InputFloatingLabel = ({ label, ...props }) => {
    const [field, meta] = useField(props);
    return (
        <div className="">
            <div className="relative z-0">
                <input
                    type="text"
                    id="floating_standard"
                    className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                    placeholder=" "
                    {...field}
                    {...props}
                />
                <label
                    htmlFor="floating_standard"
                    className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >
                    {label}
                </label>
            </div>
            {meta.touched && meta.error ? (
                <span className="font-small text-red-700 mt-[4px]">
                    {meta.error}
                </span>
            ) : null}
        </div>
    );
};
export const InputText = ({ label, ...props }) => {
    const [field, meta] = useField(props);
    return (
        <div>
            <div className="relative z-0">
                <label className="font-small">{label}</label>
                <Input
                    type="text"
                    placeholder=" "
                    {...field}
                    {...props}
                    style={{ height: "50px" }}
                />
            </div>
            {meta.touched && meta.error ? (
                <span className="font-small text-red-700 mt-[4px]">
                    {meta.error}
                </span>
            ) : null}
        </div>
    );
};
export const InputSelect = ({ label, options, ...props }) => {
    const [field, meta] = useField(props);
    return (
        <div className="">
            <div className="relative z-0">
                <label className="font-small">{label}</label>
                <select
                    className="h-[50px] p-2 appearance-none border border-white-500 rounded w-full  text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                    placeholder=" "
                    {...field}
                    {...props}
                >
                    <option value=''>Select Option</option>
                    {options.map((item) => (
                        <option value={item.value}>{item.label}</option>
                    ))}
                </select>
            </div>
            {meta.touched && meta.error ? (
                <span className="font-small text-red-700 mt-[4px]">
                    {meta.error}
                </span>
            ) : null}
        </div>
    );
};
export const CascadeSelect = ({
    width = "100%",
    onChange,
    label,
    options,
    ...props
}) => {
    const [field, meta] = useField(props);
    return (
        <div className="">
            <label className="font-small">{label}</label>
            <div class="relative z-0 flex">
                <Cascader
                    style={{ width: width }}
                    onChange={onChange}
                    options={options}
                />
            </div>
            {meta.touched && meta.error ? (
                <span className="font-small text-red-700 mt-[4px]">
                    {meta.error}
                </span>
            ) : null}
        </div>
    );
};
