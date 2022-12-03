export default function Card({ children, title }) {
  return (
    <>
      <div className="bg-sky-800 flex-col flex max-w-3xl shadow-celeste/40 shadow-xl rounded border-celeste border-4 md:mx-auto mx-8 my-16">
        <div className="text-giallo text-3xl mx-auto my-2">{title}</div>
        <div>{children}</div>
      </div>
    </>

  )
};
