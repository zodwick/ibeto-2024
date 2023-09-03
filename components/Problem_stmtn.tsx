import React from "react";
import { useState } from "react";

// import {
//     Dialog,
//     DialogContent,
//     DialogDescription,
//     DialogHeader,
//     DialogTitle,
//     DialogTrigger,
//   } from "@/components/ui/dialog"




export default function Problem_stmnt() {


    

    const [activeModal, setActiveModal] = useState(null);

    const openModal = (modalId: any) => {
        setActiveModal(modalId);
        console.log(modalId);
    };

    const closeModal = () => {
        setActiveModal(null);
    };

    return (
        <>
            <section className="py-12 bg-[#EAE9FF] rounded-t-[60px] relative w-full -mt-14 sm:py-16 lg:py-20  sm:pb-16">
                <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <div className="max-w-md mx-auto text-left sm:text-center">
                        <h2 className="mt-4 font-body2 text-3xl text-black font-normal text-blcak sm:text-3xl lg:text-4xl">
                            Problem statement</h2>
                        {/* <p className="mt-4 text-base font-medium text-gray-500">In a creative workplace, employees responsibly try different solutions</p> */}
                    </div>

                    <div className="grid grid-cols-1 g gap-12 mt-12 sm:mt-16 sm:grid-cols-2 lg:grid-cols-3 lg:px-14 ">
                        <div>
                            <h3 className="text-lg font-bold text-gray-900 font-body2  transition ease-in-out delay-150 cursor-pointer  hover:text-indigo-900" onClick={() => openModal("Carbon")}>Towards Zero Carbon Emission</h3>
                            <hr className="mt-4 border-t-2 border-slate-800" />

                            <ul className="mt-6 space-y-6">
                                <li className="flex items-start">

                                    <img src="./carbon.svg" alt="co2 logo" className="  w-6 aspect-square" />


                                    <span className="ml-3 text-sm font-medium text-gray-500">How can we reduce transmission/distribution losses in the power grid? Wait, how is this related to Carbon Emissions? </span>
                                </li>

                                <li className="flex items-start">
                                    <img src="./carbon.svg" alt="co2 logo" className="  w-6 aspect-square" />

                                    <span className="ml-3 text-sm font-medium text-gray-500"> Is it possible for local bodies to go completely off-grid?
                                    </span>
                                </li>
                            </ul>
                        </div>

                        <div>
                            <h3 className="text-lg font-bold text-gray-900 transition ease-in-out delay-150 cursor-pointer  hover:text-indigo-900  font-body2" onClick={() => openModal("waste")}>Waste management</h3>
                            <hr className="mt-4 border-t-2 border-gray-900" />

                            <ul className="mt-6 space-y-6">
                                <li className="flex items-start">
                                    <img src="./waste.svg" alt="co2 logo" className="  w-5 aspect-square" />

                                    <span className="ml-3 text-sm font-medium text-gray-500">Can we easily segregate food waste from plastic waste? </span>
                                </li>

                                <li className="flex items-start">
                                    <img src="./waste.svg" alt="co2 logo" className="  w-5 aspect-square" />

                                    <span className="ml-3 text-sm font-medium text-gray-500">What products can be created from waste materials? </span>
                                </li>
                            </ul>
                        </div>

                        <div>
                            <h3 className="text-lg font-bold text-gray-900 font-body2 transition ease-in-out delay-150 cursor-pointer  hover:text-indigo-900 " onClick={() => openModal("disaster")}>Disaster Management</h3>
                            <hr className="mt-4 border-t-2 border-gray-900" />

                            <ul className="mt-6 space-y-6">
                                <li className="flex items-start">
                                    <img src="./disaster.svg" alt="co2 logo" className="  w-6 aspect-square" />

                                    <span className="ml-3 text-sm font-medium text-gray-500">
                                        What can be done to quickly establish a communication network in disaster-stricken areas?
                                    </span>
                                </li>

                                <li className="flex items-start">
                                    <img src="./disaster.svg" alt="co2 logo" className="  w-6 aspect-square" />

                                    <span className="ml-3 text-sm font-medium text-gray-500">
                                        How would we control large-scale fire outbreaks like forest fires?                                 </span>
                                </li>
                            </ul>
                        </div>

                        <div>
                            <h3 className="text-lg font-bold text-gray-900 transition ease-in-out delay-150 cursor-pointer  hover:text-indigo-900 " onClick={() => openModal("education")}>Education for all</h3>
                            <hr className="mt-4 border-t-2 border-gray-900" />

                            <ul className="mt-6 space-y-6">
                                <li className="flex items-start">
                                    <img src="./atom.svg" alt="co2 logo" className="  w-5 aspect-square" />

                                    <span className="ml-3 text-sm font-medium text-gray-500">
                                        What difficulty is faced by dyslexic students that we can solve with technology? What about students with ADD?

                                    </span>
                                </li>

                                <li className="flex items-start">
                                    <img src="./atom.svg" alt="co2 logo" className="  w-5 aspect-square" />

                                    <span className="ml-3 text-sm font-medium text-gray-500">
                                        What technologies could we build that will aid differently-abled students in learning?                                </span>
                                </li>
                            </ul>
                        </div>


                        <div>
                            <h3 className="text-lg font-bold text-gray-900 transition ease-in-out delay-150 cursor-pointer  hover:text-indigo-900 " onClick={() => openModal("finance")}>Transforming Finance</h3>
                            <hr className="mt-4 border-t-2 border-gray-900" />

                            <ul className="mt-6 space-y-6">
                                <li className="flex items-start">
                                    <img src="./coin.svg" alt="co2 logo" className="  w-5 aspect-square" />

                                    <span className="ml-3 text-sm font-medium text-gray-500">
                                        Can we calculate a more accurate CIBIL score?

                                    </span>
                                </li>

                                <li className="flex items-start">
                                    <img src="./coin.svg" alt="co2 logo" className="  w-5 aspect-square" />

                                    <span className="ml-3 text-sm font-medium text-gray-500">
                                        How can we make banking more secure?                                                                 </span>
                                </li>
                            </ul>
                        </div> <div>
                            <h3 className="text-lg font-bold text-gray-900 transition ease-in-out delay-150 cursor-pointer  hover:text-indigo-900 " onClick={() => openModal("open")}>Open Innovation</h3>
                            <hr className="mt-4 border-t-2 border-gray-900" />

                            <ul className="mt-6 space-y-6">
                                <li className="flex items-start">
                                    <img src="./bulb.svg" alt="co2 logo" className="  w-7 aspect-square" />

                                    <span className="ml-3 text-sm font-medium text-gray-500">
                                        What difficulty is faced by dyslexic students that we can solve with technology? What about students with ADD?

                                    </span>
                                </li>

                                <li className="flex items-start">
                                    <img src="./bulb.svg" alt="co2 logo" className="  w-7 aspect-square" />

                                    <span className="ml-3 text-sm font-medium text-gray-500">
                                        What technologies could we build that will aid differently-abled students in learning?                                </span>
                                </li>
                            </ul>
                        </div>


                    </div>
                </div>



            </section>

            {activeModal === "Carbon" && (
                <Modal title="Towards zero carbon emissions" 
                content=
                "Towards zero carbon emissions is a broad strategy intended to reduce or completely stop the atmospheric release of carbon dioxide and other greenhouse gases. It entails switching from fossil fuels to renewable energy sources, implementing energy-saving technology, promoting environmentally friendly business and transportation practices, and encouraging global cooperation. By reducing the effects of climate change and protecting the environment for future generations, the objective is to build a sustainable and resilient future."
                onClose={closeModal}>
                </Modal>
            )}


            {activeModal === "waste" && (
                <Modal title="Towards zero carbon emissions" 
                content=
                "Towards zero carbon emissions is a broad strategy intended to reduce or completely stop the atmospheric release of carbon dioxide and other greenhouse gases. It entails switching from fossil fuels to renewable energy sources, implementing energy-saving technology, promoting environmentally friendly business and transportation practices, and encouraging global cooperation. By reducing the effects of climate change and protecting the environment for future generations, the objective is to build a sustainable and resilient future."
                onClose={closeModal}>
                </Modal>



            )}
            
             {activeModal === "finance" && (
                <Modal title="Towards zero carbon emissions" 
                content=
                "Towards zero carbon emissions is a broad strategy intended to reduce or completely stop the atmospheric release of carbon dioxide and other greenhouse gases. It entails switching from fossil fuels to renewable energy sources, implementing energy-saving technology, promoting environmentally friendly business and transportation practices, and encouraging global cooperation. By reducing the effects of climate change and protecting the environment for future generations, the objective is to build a sustainable and resilient future."
                onClose={closeModal}>
                </Modal>
            )}


            {activeModal === "disaster" && (
                <Modal title="Towards zero carbon emissions" 
                content=
                "Towards zero carbon emissions is a broad strategy intended to reduce or completely stop the atmospheric release of carbon dioxide and other greenhouse gases. It entails switching from fossil fuels to renewable energy sources, implementing energy-saving technology, promoting environmentally friendly business and transportation practices, and encouraging global cooperation. By reducing the effects of climate change and protecting the environment for future generations, the objective is to build a sustainable and resilient future."
                onClose={closeModal}>
                </Modal>
            )}


            {activeModal === "education" && (
                <Modal title="Towards zero carbon emissions" 
                content=
                "Towards zero carbon emissions is a broad strategy intended to reduce or completely stop the atmospheric release of carbon dioxide and other greenhouse gases. It entails switching from fossil fuels to renewable energy sources, implementing energy-saving technology, promoting environmentally friendly business and transportation practices, and encouraging global cooperation. By reducing the effects of climate change and protecting the environment for future generations, the objective is to build a sustainable and resilient future."
                onClose={closeModal}>
                </Modal>
            )} {activeModal === "open" && (
                <Modal title="Towards zero carbon emissions" 
                content=
                "Towards zero carbon emissions is a broad strategy intended to reduce or completely stop the atmospheric release of carbon dioxide and other greenhouse gases. It entails switching from fossil fuels to renewable energy sources, implementing energy-saving technology, promoting environmentally friendly business and transportation practices, and encouraging global cooperation. By reducing the effects of climate change and protecting the environment for future generations, the objective is to build a sustainable and resilient future."
                onClose={closeModal}>
                </Modal>
            )}








        </>



    );
}





function Modal({ title, content, onClose }: any) {
    return (
        <>
            <div className="fixed inset-0 z-50 my-5 flex h-full min-w-[50%] items-start justify-start overflow-x-hidden outline-none focus:outline-none">
                <div className="relative mx-auto my-6 w-auto max-w-3xl">
                    {/*content*/}
                    <div className="relative flex w-full flex-col rounded-lg border-0 bg-white shadow-lg outline-none focus:outline-none">
                        {/*header*/}
                        <div className="flex items-start justify-between  border-b border-solid border-slate-200 p-5">
                            <h3 className="text-3xl f font-body2">{title}</h3>
                            <button
                                className=" ml-auto my-auto   border-0p-2 px-3  text-center  text-xl font-semibold leading-none text-white outline-none focus:outline-none"
                                onClick={onClose}
                            >
                                <div className="w-4 h-4 bg-red-500 rounded-full hover:bg-red-600 text-sm text-gray-300 text-centre">

                                </div>
                            </button>
                        </div>
                        {/*body*/}
                        <div className="relative flex flex-auto flex-col gap-2 p-6">
                            <p className=" font-normal text-md f ">
                                {content}
                            </p>

                        </div>
                        {/*footer*/}
                        <div className="flex items-center justify-end rounded-b border-t border-solid border-slate-200 p-6">

                        </div>
                    </div>
                </div>
            </div>
            <div className="fixed inset-0 z-40 bg-black opacity-25"></div>
        </>
    );
}