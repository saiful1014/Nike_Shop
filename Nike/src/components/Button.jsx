const Button = ({lable,iconUrl}) => {
  return (
    <button className="flex justify-center items-center gap-2 py-4 px-7 bg-coral-red rounded-full font-montserrat  border leading-none text-white">
        {lable}
        <img src={iconUrl}
        alt="Arrow Right Icon"
        className="rounded-full ml-2 w-5 h-5"></img>
    </button>
  )
}

export default Button