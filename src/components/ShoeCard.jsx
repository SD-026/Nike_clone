const ShoeCard = ({ChangeBigShoe,imgURL,bigShoeImg}) => {
  const handleChange =()=>{
    if(bigShoeImg !== imgURL.thumbnail){
        ChangeBigShoe(imgURL.thumbnail)
    }
  }
    return (
    <div className={`rounded-xl border-2 
    ${bigShoeImg===imgURL ? 'border-coral-red' : 'border-transparent'}
    cusror-pointer max-sm:flex-1
    `}
    onClick={handleChange}
    >
    <div className="flex justify-center items-center bg-card bg-cover bg-center sm:w-40 sm:h-40 rounded-xl max-sm:p-4">
     
    <img
   src={imgURL.thumbnail}
   alt="hello world"
   width={127}
   height={103}
   className="object-contain"
    />
    </div>
      
    </div>
  )
}

export default ShoeCard
