const Authentication = () => {
  return (
    <div className="capitalize font-Epilogue flex flex-col gap-y-4 pt-6 px-5 items-center text-sm text-medium-gray mt-2 mb-24 lg:m-0 lg:p-0 lg:ml-auto lg:flex-row lg:gap-x-10">
      <a
        href="#"
        className="-mt-3 hover:text-black  transition-all duration-700"
      >
        login
      </a>
      <a
        href="#"
        className="flex w-full items-center justify-center h-10 border rounded-2xl border-medium-gray hover:text-black hover:border-black lg:-mt-3 lg:h-11 lg:w-[6.5rem]  transition-all duration-700"
      >
        register
      </a>
    </div>
  );
};

export default Authentication;
