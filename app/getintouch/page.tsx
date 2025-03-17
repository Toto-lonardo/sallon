
"use client";
import { ChangeEvent, FormEvent, useState } from "react";
import { ContactEmailProps } from "./../api/utils/mailInterface";

import Tiles from "../tiles";

const GetInTouch = () => {
  const [isSending, setIsSending] = useState(false);
  const [sent, setSent] = useState(false);
  const [errore, setErrore] = useState<string | null>(null);

  const [formData, setFormData] = useState<ContactEmailProps>({
    firstName: "",
    lastName: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev: ContactEmailProps) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      setIsSending(true);
      const response = await fetch("/api/send", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          firstName: formData.firstName,
          lastName: formData.lastName,
          subject: formData.subject,
          email: formData.email,
          message: formData.message,
        }),
      });

      // handle success
      if (response.ok) {
        setFormData({
          firstName: "",
          lastName: "",
          subject: "",
          email: "",
          message: "",
        });
        setSent(true);
      } else {
        setErrore("Error, please try again");
      }
    } catch (error) {
      setErrore("Failed to send email");
      console.log("Error sending email:", error);
    } finally {
      setIsSending(false);
    }
  };
  return (
    // TODO: FIX Grid 
    <Tiles>
    <div  className=" flex flex-col mx-auto gap-4 m-4">
      <h2 className="text-base/7 font-semibold text-arancione">
        Use this form for
      </h2>
      <form onSubmit={handleSubmit} className="gap-4 grid-flow-row-dense grid-cols-2 grid-rows-4">
          <label className=" col-span-4 text-white ">Name</label>
          <input
            name="firstName"
            type="text"
            placeholder=""
            value={formData.firstName}
            onChange={handleChange}
            className=" col-span-4 rounded outline outline-1 outline-arancione focus:outline-4 text-zinc-700 bg-white "
            required
          />
          <label className="m2 col-span-3 text-white ">Surname</label>
          <input
            name="lastName"
            type="text"
            placeholder=""
            value={formData.lastName}
            onChange={handleChange}
            className=" col-span-2 rounded outline outline-1 outline-arancione focus:outline-4 text-zinc-700 bg-white "
            required
          />
          <label className="m-2 text-white ">Email</label>
          <input
            name="email"
            type="email"
            placeholder="youremail@mail.com"
            value={formData.email}
            onChange={handleChange}
            className="rounded outline outline-1 outline-arancione focus:outline-4 text-zinc-700 bg-white"
            required
          />
          <label className="m-2 text-white ">Subject</label>
          <input
            name="subject"
            type="text"
            placeholder=""
            value={formData.subject}
            onChange={handleChange}
            className="rounded outline outline-1 outline-arancione focus:outline-4 text-zinc-700 bg-white "
            required
          />
        <div className="flex flex-col space-y-6 pb-12 col-span-2 ">
          <label className="p-2 text-white ">Message</label>
          <textarea
            name="message"
            cols={30}
            rows={5}
            placeholder="Type your message ..."
            value={formData.message}
            onChange={handleChange}
            className="m-2 rounded outline outline-1 outline-arancione focus:outline-4 text-zinc-700 bg-white "
            required
          />
          <button
            type="submit"
            className="text-white bg-arancione hover:bg-amber-600 font-bold py-2 px-4 rounded-full w-40 self-center "
            disabled={isSending}
          >
            Send Message
          </button>
          {errore && <div className="text-red-500 text-center">{errore}</div>}
          {sent && (
            <div className="text-arancione text-center">
              Your message has been sent successfully! 🎉{" "}
            </div>
          )}
        </div>
      </form>
    </div>
    </Tiles>
  );
};

export default GetInTouch; 
