const people = [
    {
        name: 'Lindsay Walton',
        airtime: '12:00 - 17:30',
        numberOfTimes: '3x',
        email: 'lindsay.walton@example.com',
        Duration: '1hr',
        cost: 20000,
        image:
            'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
    // More people...
]

export default function Pricing() {
    return (
        <>
            <div className={"container mx-auto max-w-4xl px-6 md:px-5"}>
                <div className={"border  bg-white rounded w-full h-fit mt-16  py-8 "}>
                    <div>
                        <div className={"flex justify-center mt-3 border-b border-gray-200 p-b-3  w-full p-3"}><h6
                            className={"font-bold text-xl"}>Price Plans</h6></div>


                        <div className="px-4 sm:px-6 lg:px-8">
                            <div className="sm:flex sm:items-center p-4 mt-6">
                                <div className="sm:flex-auto">
                                    <div>
                                        <div className="relative mt-2 rounded-md shadow-sm">
                                            <div
                                                className="pointer-events-none absolute inset-y-0 left-0 mb-2 flex items-center pl-3">
                                                <i className="ri-search-line h-5 w-5 text-black text-xl"></i>

                                            </div>
                                            <input
                                                type="search"
                                                className="block w-full rounded-md border-0 py-1.5 pl-10 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                                placeholder="Search prices"
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className="mt-4 sm:mt-0 sm:ml-16 sm:flex-none px-2 ">
                                    <button
                                        type="button"
                                        className="block rounded-md p-8 py-3 flex bg-black py-2 px-12 text-center text-semibold font-bold text-white shadow-sm "
                                    >
                                        <i className="ri-add-line px-4 text-xl"></i>
                                        New Plan
                                    </button>
                                </div>
                            </div>
                            <div className="mt-8 flow-root p-4">
                                <div className="-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8">
                                    <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
                                        <table className="min-w-full divide-y divide-gray-300">
                                            <thead>
                                            <tr>
                                                <th scope="col"
                                                    className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-0">
                                                    Name
                                                </th>
                                                <th scope="col"
                                                    className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                                                    Duration
                                                </th>
                                                <th scope="col"
                                                    className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                                                    Air Time
                                                </th>


                                                <th scope="col"
                                                    className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                                                    Cost
                                                </th>
                                                <th scope="col"
                                                    className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                                                    Status
                                                </th>
                                                <th scope="col" className="relative py-3.5 pl-3 pr-4 sm:pr-0">
                                                    <span className="sr-only">Edit</span>
                                                </th>
                                            </tr>
                                            </thead>
                                            <tbody className="divide-y divide-gray-200 bg-white">
                                            {people.map((person) => (
                                                <tr key={person.email}>
                                                    <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm sm:pl-0">
                                                        <div className="flex items-center">
                                                            <div className="h-10 w-10 flex-shrink-0">
                                                                <img className="h-10 w-10 rounded-full"
                                                                     src={person.image} alt=""/>
                                                            </div>
                                                            <div className="ml-4">
                                                                <div
                                                                    className="font-medium text-gray-900">{person.name}</div>
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                                                        <div className="text-gray-900">{person.Duration}</div>
                                                        {/*<div className="text-gray-500">{person.numberOfTimes}</div>*/}
                                                    </td>

                                                    <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{person.airtime}</td>
                                                    <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{person.cost}</td>
                                                    <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                                                      <span
                                                          className="inline-flex rounded-full bg-green-100 px-2 text-xs font-semibold leading-5 text-green-800">
                                                        Active
                                                      </span>
                                                    </td>
                                                    <td className="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-0">
                                                        <a href="#" className="text-indigo-600 hover:text-indigo-900">
                                                            <i className="ri-more-2-fill text-black"></i><span className="sr-only">, {person.name}</span>
                                                        </a>
                                                    </td>
                                                </tr>
                                            ))}
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>


        </>
    )
}