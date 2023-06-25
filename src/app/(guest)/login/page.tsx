'use client';

import Button from '@/components/Button';
import Input from '@/components/Input';

const Page = () => {
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
      <div className="flex flex-1 flex-col justify-center bg-slate-100 px-20">
        <h3 className="mb-6 text-2xl">Sign in</h3>
        <Input
          name="email"
          type="email"
          label="Email"
          placeholder="Enter your email"
        />
        <Input
          name="password"
          type="password"
          label="Password"
          placeholder="Enter your password"
        />
        <Button onClick={() => console.log('hello')}>Sign in</Button>
      </div>
    </div>
  );
};

export default Page;
