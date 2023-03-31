const Card = ({ title, value, type, logo }) => {
  return (
    <div className="flex flex-col gap-1 hover:border-solid hover:border-[1px] hover:border-gray-400 p-7 rounded-md">
      <div>
        <img src={logo} alt="Clock" className="w-[200px] h-[200px]" />
      </div>
      <p className="sm:text-[12px] text-[10px] w-[200px] text-center text-gray-400">
        {title}
      </p>
    </div>
  );
};

export default Card;
