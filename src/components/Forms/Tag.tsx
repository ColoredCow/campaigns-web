import Input from '@/components/Input';
import Button from '@/components/Button';

const User = ({ formik, btnName }: { formik: any; btnName: string }) => {
  return (
    <>
      <form onSubmit={formik.handleSubmit}>
        <div className="grid grid-cols-2 gap-5">
          <Input
            type="text"
            name="name"
            label="Name"
            placeholder="Enter Name"
            onChange={formik.handleChange}
            value={formik.values.name}
            required={formik.errors.name}
          />
        </div>
        <Button type="submit">{btnName}</Button>
      </form>
    </>
  );
};

export default User;
