

export default function Home() {
  return (
    <>
      {/*Change password*/}

    <div className={"container mx-auto max-w-4xl px-6 md:px-5"}>
      <div className={"border bg-white rounded w-full h-fit mt-16 px-8 py-8 "}>
        <h6 className={"font-bold text-xl"}>Password</h6>
        <span className={"text-md text-gray-700"}> Change or view your your password</span>
         <div>
      <label htmlFor="password" className="block text-md  leading-6 text-gray-700 mt-5">
        Old Password
      </label>
      <div className="mt-2">
        <input
          type="password"
          name="password"
          id="password"
          className="block w-full rounded pl-2 border-0 py-2.5 text-gray-900 outline-none border "
        />
      </div>
    </div> <div>
      <label htmlFor="password" className="block text-md  leading-6 text-gray-700 mt-5">
        Old Password
      </label>
      <div className="mt-2">
        <input
          type="password"
          name="password"
          id="password"
          className="block w-full rounded pl-2 border-0 py-2.5 text-gray-900 outline-none border "

        />
      </div>
    </div>

        <br />
         <span className={"text-md text-gray-700"}> Minimum 6 characters</span>
         <div className={"w-full mt-10 flex justify-end"}>
         <button
            type="submit"
            className="inline-flex justify-center rounded-md bg-black py-2.5 px-5 text-white " >

            Save
         </button>
         </div>
      </div>

    </div>
   </>


  )
}
