import Input from '@/components/Input';
import MultiSelect from '@/components/MultiSelect';
import Button from '@/components/Button';

const User = ({ formik, btnName }: { formik: any; btnName: string }) => {
  return (
    <>
      <form onSubmit={formik.handleSubmit}>
        <div className="grid grid-cols-2 gap-2">
          <Input
            type="text"
            name="name"
            label="Name"
            placeholder="Enter Name"
            onChange={formik.handleChange}
            value={formik.values.name}
            required={formik.errors.name}
          />
          <Input
            type="email"
            name="email"
            label="Email"
            placeholder="Enter Email"
            onChange={formik.handleChange}
            value={formik.values.email}
            required={formik.errors.email}
          />
          <Input
            type="password"
            name="password"
            label="Password"
            placeholder="Enter Password"
            onChange={formik.handleChange}
            value={formik.values.password}
            required={formik.errors.password}
          />
          <Input
            type="password"
            name="confirmPassowrd"
            label="Confirm Password"
            placeholder="Enter Confirm Password"
            onChange={formik.handleChange}
            value={formik.values.confirmPassowrd}
            required={formik.errors.confirmPassowrd}
          />
        </div>
        <Button type="submit">{btnName}</Button>
      </form>
    </>
  );
};

export default User;
