const Login = () => {
  return (
    <div className="flex min-h-screen">
      <div className="flex flex-1 flex-col justify-center bg-gray-800 px-20 text-white">
        <h2 className="mb-6 text-5xl">Campaigns</h2>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil
          delectus ea minus cumque tempore asperiores enim recusandae! Amet,
          perspiciatis dolores ullam minus aliquid voluptas esse doloremque
          fugiat ratione eveniet modi.
        </p>
      </div>
      <div className="flex flex-1 flex-col justify-center bg-slate-200 px-20">
        <h3 className="mb-6 text-2xl">Login</h3>
        <div className="flex flex-col">
          <label htmlFor="email">Email</label>
          <input type="email" name="email" />
        </div>
        <div className="flex flex-col">
          <label htmlFor="password">Password</label>
          <input type="password" name="password" />
        </div>
      </div>
    </div>
  );
};

export default Login;
