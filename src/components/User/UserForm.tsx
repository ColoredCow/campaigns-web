import Input from '@/components/Input';
import Button from '@/components/Button';
import { Formik, Form } from 'formik';
import { userValidationSchema } from '@/validations/user';

const UserForm = ({
  onSubmit,
  user = {},
}: {
  onSubmit: (value: any) => void;
  user: object;
}) => {
  let initialValues = {
    email: '',
    name: '',
    password: '',
    confirmPassowrd: '',
  };

  if (Object.keys(user).length) {
    initialValues = { ...initialValues, ...user };
  }

  return (
    <>
      <Formik
        initialValues={initialValues}
        onSubmit={onSubmit}
        validationSchema={userValidationSchema}
        enableReinitialize={true}
      >
        {
          <Form>
            <div className="grid grid-cols-2 gap-2">
              <Input
                type="text"
                name="name"
                label="Name"
                placeholder="Enter Name"
              />
              <Input
                type="email"
                name="email"
                label="Email"
                placeholder="Enter Email"
              />
              <Input
                type="password"
                name="password"
                label="Password"
                placeholder="Enter Password"
              />
              <Input
                type="password"
                name="confirmPassowrd"
                label="Confirm Password"
                placeholder="Enter Confirm Password"
              />
            </div>
            <Button type="submit">{user ? 'Update' : 'Create'}</Button>
          </Form>
        }
      </Formik>
    </>
  );
};

export default UserForm;
