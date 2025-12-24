import { getProdApiHook } from "../customHooks/useProdApiHook"

const Home = () => {
    
    const {data: prodData, isPending} = getProdApiHook()

    if(isPending){
        return <h1 className="h-screen flex mt-10 justify-center text-2xl">Loading...</h1>
    }

  return (
    <div className='px-8 py-4'>
      <div>
        {prodData?.map((elem) => {
            return <h1 key={elem.id}>{elem.title}</h1>
        })}
      </div>
    </div>
  )
}

export default Home
