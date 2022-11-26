import React from "react";
import { MapPinIcon, EnvelopeIcon } from "@heroicons/react/24/solid";
import { useForm, SubmitHandler } from "react-hook-form";

type Inputs = {
  name: string;
  email: string;
  subject: string;
  message: string;
};
type Props = {};

const ContactMe = ({}: Props) => {
  const { register, handleSubmit } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = (formData) =>
    (window.location.href = `mailto:inkantator@o2.pl?subject=${formData.subject}&body=Hi, my name is ${formData.name}. ${formData.name} ${formData.message} (${formData.email})
    
    `);

  return (
    <>
      <h3 className="sectionHeader mt-24">Contact</h3>
      <div className="h-screen  relative flex flex-col text-center md:text-left md:flex-row max-w-7xl justify-evenly mx-auto items-center">
        <div className="flex w-screen  p-4 flex-col space-y-10">
          <h4 className="text-3xl md:text-4xl font-semibold text-center">
            Wanna know something more?{" "}
            <span className="decoration-[#bf665f] underline">Let's talk</span>
          </h4>

          <div className="space-y-10">
            <div className="flex items-center space-x-5 justify-center">
              <EnvelopeIcon className="text-[#bf665f] h-7 w-7 animate-pulse" />
              <p className="text-2xl">bobkoalicja@gmail.com</p>
            </div>

            <div className="flex items-center space-x-5 justify-center">
              <MapPinIcon className="text-[#bf665f] h-7 w-7 animate-pulse" />
              <p className="text-2xl">Warsaw, Poland</p>
            </div>
          </div>

          <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col space-y-2 w-full md:w-fit mx-auto"
          >
            <div className="flex space-y-2 md:space-y-0  md:space-x-2 flex-col md:flex-row">
              <input
                {...register("name")}
                className="contactInput w-full"
                type="text"
                placeholder="Name"
              />
              <input
                {...register("email")}
                className="contactInput w-full"
                type="email"
                placeholder="Email"
              />
            </div>
            <input
              {...register("subject")}
              className="contactInput"
              type="text"
              placeholder="Subject"
            />
            <textarea
              {...register("message")}
              className="contactInput"
              placeholder="Message"
            />
            <button
              type="submit"
              className="bg-[#bf665f] py-5 px-10 rounded-md text-black font-bold text-lg hover:bg-[#bf665f]/80 ease-out transition-colors"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default ContactMe;
