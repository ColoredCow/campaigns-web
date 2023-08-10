import Input from '@/components/Input';
import Button from '@/components/Button';
import { Formik, Form } from 'formik';
import { tagValidationSchema } from '@/validations/tag';

const TagForm = ({
  onSubmit,
  tag = {},
}: {
  onSubmit: (value: any) => void;
  tag: object;
}) => {
  let initialValues = {
    name: '',
  };
  if (Object.keys(tag).length) {
    initialValues = { ...initialValues, ...tag };
  }

  return (
    <>
      <Formik
        initialValues={initialValues}
        onSubmit={onSubmit}
        validationSchema={tagValidationSchema}
        enableReinitialize={true}
      >
        {
          <Form>
            <div className="grid grid-cols-2 gap-2">
              <Input
                type="text"
                name="name"
                label="Name"
                placeholder="Enter Tag Name"
              />
            </div>
            <Button type="submit">
              {Object.keys(tag).length ? 'Update' : 'Create'}
            </Button>
          </Form>
        }
      </Formik>
    </>
  );
};

export default TagForm;
