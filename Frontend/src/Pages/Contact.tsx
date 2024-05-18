import { useForm, Resolver } from "react-hook-form";

type FormValues = {
  Name: string;
  Email: string;
  Message: string;
};

const resolver: Resolver<FormValues> = async (values) => {
  const errors = {
    Name: values.Name ? undefined : { type: "required", message: "Name is required" },
    Email: values.Email ? undefined : { type: "required", message: "Email is required" },
    Message: values.Message ? undefined : { type: "required", message: "Message is required" },
  };

  const isValid = !errors.Name && !errors.Email && !errors.Message;

  return {
    values: isValid ? values : {},
    errors: isValid ? {} : errors,
  };
};
export const Contact = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({ resolver });
  const onSubmit = handleSubmit((data) => console.log(data));

  return (
    <section className="w-[100%] min-h-[100vh] z-[20] bg-[#222222] relative pt-5" id="contact">
      <div className="w-[100%] z-50 relative pt-5 md:pl-16 pl-6">
        <h1 className="text-[50px] font-bold text-gray-200">
          <span className="bg-purple-600 p-[7px] rounded-md">Contact</span>
        </h1>
        <div className="text-gray-100 text-[17px] mt-5 leading-8">
          <p>
            Email me: <span className="rounded-md bg-purple-700 p-[5px]">m.kroplewski.contact@gmail.com</span>
          </p>
          <p>
            Or send me a message on{" "}
            <a className="text-purple-700" href="https://www.linkedin.com/in/mateusz-kroplewski-732239176/" target="_blank">
              Linkedin
            </a>
          </p>
          <p>Or you can fill out the form below!</p>
        </div>
        <div className="mt-6">
          <p className="font-dancing text-purple-500 opacity-50 text-[17px]">&lt;form &gt;</p>
          <form onSubmit={onSubmit}>
            <div className="flex flex-col">
              <label className="text-gray-400 font-bold text-[30px] ">Name:</label>
              <input
                {...register("Name")}
                className="w-[80%] md:w-[300px] h-[35px] rounded-md bg-[#333333] border-b-2 border-b-purple-700 pl-[10px] font-semibold text-purple-500 focus:outline-none"
                placeholder="John Doe"
              />
              {errors?.Name && <p className="text-red-600">{errors.Name.message}</p>}
            </div>
            <div className="flex flex-col mt-[10px]">
              <label className="text-gray-400 font-bold text-[30px] ">Email:</label>
              <input
                type="email"
                {...register("Email")}
                className="w-[80%] md:w-[300px] h-[35px] rounded-md bg-[#333333] border-b-2 border-b-purple-700 pl-[10px] font-semibold text-purple-500 focus:outline-none"
                placeholder="JohnDoe@gmail.com"
              />
              {errors?.Email && <p className="text-red-600">{errors.Email.message}</p>}
            </div>
            <div className="flex flex-col mt-[10px]">
              <label className="text-gray-400 font-bold text-[30px] ">Message:</label>
              <textarea
                {...register("Message")}
                placeholder="hey..."
                className="w-[80%] md:w-[300px] h-[100px] rounded-md bg-[#333333] border-b-2 border-b-purple-700 pl-[10px] font-semibold text-purple-500 focus:outline-none"
              />
              {errors?.Message && <p className="text-red-600">{errors.Message.message}</p>}
            </div>
            <div className="w-[200px] h-[35px] mt-5">
              <button className="w-[100%] h-[100%] rounded-md bg-purple-500 font-bold text-gray-200 hover:cursor-pointer hover:bg-purple-700">Send</button>
            </div>
            <p className="font-dancing text-purple-500 opacity-50 text-[17px] mt-[10px]">&lt;form /&gt;</p>
          </form>
        </div>
      </div>
    </section>
  );
};
