import { ChangeEvent, FormEvent, useState } from "react";
import { ContactEmailProps } from "./api/utils/mailInterface";

const GetInTouch = () => {
  const [isSending, setIsSending] = useState(false);
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
      } else {
        // TODO:
      }
    } catch (error) {
      console.log("Error sending email:", error);
    } finally {
      setIsSending(false);
    }
  };
  const [formData, setFormData] = useState<ContactEmailProps>({
    firstName: "",
    lastName: "",
    email: "",
    subject: "",
    message: "",
  });
  return (
    <div id="getintouch">
      <form onSubmit={handleSubmit} className="">
        <input
          name="firstName"
          type="text"
          placeholder="Your name"
          value={formData.firstName}
          onChange={handleChange}
          className=""
          required
        />
        <input
          name="lastName"
          type="text"
          placeholder="Your surname"
          value={formData.lastName}
          onChange={handleChange}
          className=""
          required
        />
        <input
          name="email"
          type="email"
          placeholder="youremail@mail.com"
          value={formData.email}
          onChange={handleChange}
          className=""
          required
        />
        <input
          name="subject"
          type="text"
          placeholder="Subject"
          value={formData.subject}
          onChange={handleChange}
          className=""
          required
        />
        <textarea
          name="firstName"
          cols={30}
          rows={5}
          placeholder="Type your message ..."
          value={formData.message}
          onChange={handleChange}
          className=""
          required
        />
        <button type="submit" className="" disabled={isSending}>
          Send Message
        </button>
      </form>
    </div>
  );
};

export default GetInTouch;
