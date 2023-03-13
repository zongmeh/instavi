import {Switch} from '@headlessui/react'
import {Fragment, useState} from 'react'
function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}
export default function About()  {
    const [enabled, setEnabled] = useState(false)
    const [edited, setEdited] = useState(false)
    const [invoice, setInvoice] = useState(false)
    const [refund, setRefund] = useState(false)
    const [error, setError] = useState(false)
    const [missedDelivered, setMissedDelivered] = useState(false)
    const [delivered, setDelivered] = useState(false)
    const [outForDelivery, setOutForDelivery] = useState(false)
    const [fulfilment, setFulfilment] = useState(false)
    const [shippingUpdate, setShippingUpdate] = useState(false)
    const [confirmation, setConfirmation] = useState(false)
    const [shippingConfirmation, setShippingConfirmation] = useState(false)


    return (
        <>
            <div className={"container mx-auto max-w-4xl px-6 md:px-5"}>
                <div className={"border bg-white rounded w-full h-fit mt-16 px-8 py-8 "}>
                    <div>
                        <h6 className={"font-bold text-xl"}>Orders</h6>
                        <div className={"mt-10"}>
                            <h6 className={"font-bold text-xs"}>Order Confirmation</h6>
                            <span className={"text-sm text-gray-600"}> Sent automatically to the customer after they place their order. </span>
                            <div className={"w-full justify-end flex mb-10"}>
                                <Switch
                                checked={confirmation}
                                onChange={setConfirmation}
                                className={classNames(
                                    confirmation ? 'bg-green-400' : 'bg-gray-200',
                                    'relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:ring-offset-2'
                                )}
                            >
                                <span className="sr-only">Use setting</span>
                                <span
                                    aria-hidden="true"
                                    className={classNames(
                                        confirmation ? 'translate-x-5' : 'translate-x-0',
                                        'pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out'
                                    )}
                                />


                            </Switch>
                            </div>

                        </div>
                    </div>

                    <div>
                        <div className={"mt-2"}>
                            <h6 className={"font-bold text-xs"}>Order Edited</h6>
                            <span className={"text-sm text-gray-600"}> Sent to the customer after their order is edited (if you select this option). </span>
                            <div className={"w-full justify-end flex mb-10"}><Switch
                                checked={edited}
                                onChange={setEdited}
                                className={classNames(
                                    edited ? 'bg-green-400' : 'bg-gray-200',
                                    'relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:ring-offset-2'
                                )}
                            >
                                <span className="sr-only">Use setting</span>
                                <span
                                    aria-hidden="true"
                                    className={classNames(
                                        edited ? 'translate-x-5' : 'translate-x-0',
                                        'pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out'
                                    )}
                                />
                            </Switch>
                            </div>

                        </div>
                    </div>

                    <div>
                        <div className={"mt-2"}>
                            <h6 className={"font-bold text-xs"}>Order Invoice</h6>
                            <span className={"text-sm text-gray-600"}> Sent to the customer when the order has an outstanding balance. </span>
                            <div className={"w-full justify-end flex mb-10"}><Switch
                                checked={invoice}
                                onChange={setInvoice}refund
                                className={classNames(
                                    invoice ? 'bg-green-400' : 'bg-gray-200',
                                    'relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:ring-offset-2'
                                )}
                            >
                                <span className="sr-only">Use setting</span>
                                <span
                                    aria-hidden="true"
                                    className={classNames(
                                        invoice ? 'translate-x-5' : 'translate-x-0',
                                        'pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out'
                                    )}
                                />
                            </Switch>
                            </div>

                        </div>
                    </div>

                    <div>
                        <div className={"mt-2"}>
                            <h6 className={"font-bold text-xs"}>Order Refund</h6>
                            <span className={"text-sm text-gray-600"}> Sent automatically to the customer if their order is refunded (if you select this option). </span>
                            <div className={"w-full justify-end flex mb-10"}><Switch
                                checked={refund}
                                onChange={setRefund}
                                className={classNames(
                                    refund ? 'bg-green-400' : 'bg-gray-200',
                             'relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:ring-offset-2'
                                )}
                            >
                                <span className="sr-only">Use setting</span>
                                <span
                                    aria-hidden="true"
                                    className={classNames(
                                        refund ? 'translate-x-5' : 'translate-x-0',
                                        'pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out'
                                    )}
                                />
                            </Switch>
                            </div>

                        </div>
                    </div>


                    <div>
                        <div className={"mt-2"}>
                            <h6 className={"font-bold text-xs"}>Payment Error</h6>
                            <span className={"text-sm text-gray-600"}> Sent automatically to the customer if their payment can’t be processed during checkout.</span>
                            <div className={"w-full justify-end flex mb-10"}><Switch
                                checked={error}
                                onChange={setError}
                                className={classNames(
                                    error ? 'bg-green-400' : 'bg-gray-200',
                                    'relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:ring-offset-2'
                                )}
                            >
                                <span className="sr-only">Use setting</span>
                                <span
                                    aria-hidden="true"
                                    className={classNames(
                                        error ? 'translate-x-5' : 'translate-x-0',
                                        'pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out'
                                    )}
                                />
                            </Switch>
                            </div>

                        </div>
                    </div>


                    <div>

                    </div>

                </div>
            </div>


            <div className={"container mx-auto max-w-4xl px-6 md:px-5"}>
                <div className={"border bg-white rounded w-full h-fit mt-16 px-8 py-8 "}>
                    <div>
                        <h6 className={"font-bold text-xl"}>Shipping</h6>
                        <div className={"mt-10"}>
                            <h6 className={"font-bold text-xs"}>Fulfilment Request</h6>
                            <span className={"text-sm text-gray-600"}> Sent automatically to a third-party fulfillment service provider when order items are fulfilled. </span>
                            <div className={"w-full justify-end flex mb-10"}><Switch
                                checked={fulfilment}
                                onChange={setFulfilment}
                                className={classNames(
                                    fulfilment ? 'bg-green-400' : 'bg-gray-200',
                                    'relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:ring-offset-2'
                                )}
                            >
                                <span className="sr-only">Use setting</span>
                                <span
                                    aria-hidden="true"
                                    className={classNames(
                                        fulfilment ? 'translate-x-5' : 'translate-x-0',
                                        'pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out'
                                    )}
                                />
                            </Switch>
                            </div>

                        </div>
                    </div>

                    <div>
                        <div className={"mt-2"}>
                            <h6 className={"font-bold text-xs"}>Shipping Confirmation</h6>
                            <span className={"text-sm text-gray-600"}> Sent automatically to the customer when their order is fulfilled (if you select this option).</span>
                            <div className={"w-full justify-end flex mb-10"}><Switch
                                checked={shippingConfirmation}
                                onChange={setShippingConfirmation}
                                className={classNames(
                                    shippingConfirmation ? 'bg-green-400' : 'bg-gray-200',
                                    'relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:ring-offset-2'
                                )}
                            >
                                <span className="sr-only">Use setting</span>
                                <span
                                    aria-hidden="true"
                                    className={classNames(
                                        shippingConfirmation ? 'translate-x-5' : 'translate-x-0',
                                        'pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out'
                                    )}
                                />
                            </Switch>
                            </div>

                        </div>
                    </div>

                    <div>
                        <div className={"mt-2"}>
                            <h6 className={"font-bold text-xs"}>Shipping Update</h6>
                            <span className={"text-sm text-gray-600"}> Sent automatically to the customer if their fulfilled order’s tracking number is updated.</span>
                            <div className={"w-full justify-end flex mb-10"}><Switch
                                checked={shippingUpdate}
                                onChange={setShippingUpdate}shippingUpdate
                                className={classNames(
                                    shippingUpdate ? 'bg-green-400' : 'bg-gray-200',
                                    'relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:ring-offset-2'
                                )}
                            >
                                <span className="sr-only">Use setting</span>
                                <span
                                    aria-hidden="true"
                                    className={classNames(
                                        shippingUpdate ? 'translate-x-5' : 'translate-x-0',
                                        'pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out'
                                    )}
                                />
                            </Switch>
                            </div>

                        </div>
                    </div>

                    <div>

                    </div>

                </div>
            </div>


            <div className={"container mx-auto max-w-4xl px-6 md:px-5"}>
                <div className={"border bg-white rounded w-full h-fit mt-16 px-8 py-8 "}>
                    <div>
                        <h6 className={"font-bold text-xl"}>Local Delivering</h6>
                        <div className={"mt-10"}>
                            <h6 className={"font-bold text-xs"}>Local Order Out for Deliver</h6>
                            <span className={"text-sm text-gray-600"}> Sent to the customer when their local order is out for delivery. </span>
                            <div className={"w-full justify-end flex mb-10"}><Switch
                                checked={outForDelivery}
                                onChange={setOutForDelivery}
                                className={classNames(
                                    outForDelivery ? 'bg-green-400' : 'bg-gray-200',
                                    'relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:ring-offset-2'
                                )}
                            >
                                <span className="sr-only">Use setting</span>
                                <span
                                    aria-hidden="true"
                                    className={classNames(
                                        outForDelivery ? 'translate-x-5' : 'translate-x-0',
                                        'pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out'
                                    )}
                                />
                            </Switch>
                            </div>

                        </div>
                    </div>

                    <div>
                        <div className={"mt-2"}>
                            <h6 className={"font-bold text-xs"}>Local Order Delivered</h6>
                            <span className={"text-sm text-gray-600"}> Sent to the customer when their local order is delivered. </span>
                            <div className={"w-full justify-end flex mb-10"}><Switch
                                checked={delivered}
                                onChange={setDelivered}
                                className={classNames(
                                    delivered ? 'bg-green-400' : 'bg-gray-200',
                                    'relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:ring-offset-2'
                                )}
                            >
                                <span className="sr-only">Use setting</span>
                                <span
                                    aria-hidden="true"
                                    className={classNames(
                                        delivered ? 'translate-x-5' : 'translate-x-0',
                                        'pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out'
                                    )}
                                />
                            </Switch>
                            </div>

                        </div>
                    </div>

                    <div>
                        <div className={"mt-2"}>
                            <h6 className={"font-bold text-xs"}>Local Order Missed Delivered</h6>
                            <span className={"text-sm text-gray-600"}> Sent to the customer when they miss a local delivery. </span>
                            <div className={"w-full justify-end flex mb-10"}><Switch
                                checked={missedDelivered}
                                onChange={setMissedDelivered}
                                className={classNames(
                                    missedDelivered ? 'bg-green-400' : 'bg-gray-200',
                                    'relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:ring-offset-2'
                                )}
                            >
                                <span className="sr-only">Use setting</span>
                                <span
                                    aria-hidden="true"
                                    className={classNames(
                                        missedDelivered ? 'translate-x-5' : 'translate-x-0',
                                        'pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out'
                                    )}
                                />
                            </Switch>
                            </div>

                        </div>
                    </div>


                    <div>

                    </div>

                </div>
            </div>


        </>
    )
}