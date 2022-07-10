const DashCard = ({title,subtitle,number}) => {
    return (
        <section className=" w-[250px] shadow-sm h-[150px] p-5 rounded-md bg-blue flex flex-col items-center">
            <h2 className="font-sans text-lg text-white flex items-center  text-wrap">{title}<span className="text-slate-200 text-sm ml-2 mt-1">{subtitle}</span></h2>
            <h5 className="font-sans text-lg text-white">{number}</h5>
        </section>
    );
}
export default DashCard;