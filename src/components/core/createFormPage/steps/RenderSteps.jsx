import React from "react";
import { useSelector } from "react-redux";

// required icons
import { FaCheck } from 'react-icons/fa';

// required Components
import SelectInputs from "./step1/SelectInputs";
import FormStyler from "./step2/FormStyler";


function RenderSteps() {
    const { step } = useSelector((state) => state.formSlice);

    // STEP's which will be rendered while Creating Form
    const steps = [
        {
            id: 1,
            title: "Add Items & Data",
        },
        {
            id: 2,
            title: "Style Form",
        },
        {
            id: 3,
            title: "Publish Form",
        }
    ]

    return (
        <div>
            <div className="relative mb-2 flex w-full justify-center">
                {steps.map((item) => (
                    <>
                        <div key={item.id}
                            className="flex flex-col items-center "

                        >
                            <button
                                className={`grid cursor-default aspect-square w-[34px] place-items-center rounded-full border-[1px] ${step === item.id
                                    ? "border-yellow-50 bg-yellow-900 text-yellow-50"
                                    : "border-richblack-700 bg-richblack-800 text-richblack-300"
                                    } ${step > item.id && "bg-yellow-50 text-yellow-50"}} `}
                            >
                                {step > item.id ? (
                                    <FaCheck className="font-bold text-richblack-900" />
                                ) : (
                                    item.id
                                )}
                            </button>


                            <p
                                className={`text-sm ${step >= item.id ? "text-richblack-5" : "text-richblack-500"
                                    }`}
                            >
                                {item.title}
                            </p>

                        </div>
                        {item.id !== steps.length && (
                            <>
                                <div
                                    className={`h-[calc(34px/2)] w-[33%] border-dashed border-b-2 ${step > item.id ? "border-yellow-50" : "border-richblack-500"
                                        } `}
                                ></div>
                            </>
                        )}
                    </>
                ))}
            </div>
            {/* Render specific component based on current step */}
            {step === 1 &&  <SelectInputs /> }
            {step === 2 && <FormStyler />}  
            {/* {step === 3 && <PublishCourse />}  */}
        </div>
    )
}

export default RenderSteps;