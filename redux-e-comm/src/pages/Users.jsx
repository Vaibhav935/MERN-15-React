import { useUserApiHook } from '../customHooks/useUserApiHook'

const Users = () => {
    
    const {data: usersData, isPending} = useUserApiHook()

    if(isPending){
        return <h1 className="h-screen flex mt-10 justify-center text-2xl">Loading...</h1>
    }

  return (
    <div className='px-8 py-4'>
      {
        usersData?.map((elem) => {
            return <h1 key={elem.id}>{elem.username}</h1>
        })
      }
    </div>
  )
}

export default Users
