import Input from '@/components/Input';
import Button from '@/components/Button';

const SenderIdentity = ({
  formik,
  btnName,
}: {
  formik: any;
  btnName: string;
}) => {
  return (
    <>
      <form onSubmit={formik.handleSubmit}>
        <div className="grid grid-cols-2 gap-2">
          <Input
            type="text"
            name="name"
            label="Name"
            placeholder="Enter Name"
            value={formik.values.name}
            onChange={formik.handleChange}
            required={formik.errors.name}
          />
          <Input
            type="email"
            name="email"
            label="Email"
            placeholder="Enter Email"
            value={formik.values.email}
            onChange={formik.handleChange}
            required={formik.errors.email}
          />
        </div>
        <Button type="submit">{btnName}</Button>
      </form>
    </>
  );
};

export default SenderIdentity;
