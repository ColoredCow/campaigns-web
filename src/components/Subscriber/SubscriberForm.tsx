import Input from '@/components/Input';
import Button from '@/components/Button';
import { getTags } from '@/apis/tag';
import { useEffect, useState } from 'react';
import { Formik, Form, Field } from 'formik';
import { subscriberValidationSchema } from '@/validations/subscriber';
import { mapTagsToSelectOptions } from '@/utils/common';
import MultiSelect from '@/components/MultiSelect';
import { extractValuesFromOptions } from '@/utils/common';

const SubscriberForm = ({
  onSubmit,
  subscriber = {},
}: {
  onSubmit: (value: any) => void;
  subscriber: object;
}) => {
  const [tags, setTags] = useState([]);

  let initialValues = {
    email: '',
    name: '',
    phone: '',
    tags: [],
  };

  useEffect(() => {
    const fetchTagLists = async () => {
      setTags(await getTags());
    };

    fetchTagLists();
  }, []);

  const tagsList = mapTagsToSelectOptions(tags.data);

  if (Object.keys(subscriber).length) {
    initialValues = { ...initialValues, ...subscriber };
    initialValues.tags = mapTagsToSelectOptions(subscriber.tags);
  }

  const handleSubmit = (values: any) => {
    const tags = extractValuesFromOptions(values.tags);
    onSubmit({ ...values, tags });
  };

  return (
    <>
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={subscriberValidationSchema}
        enableReinitialize={true}
      >
        {
          <Form>
            <div className="grid grid-cols-2 gap-2">
              <Input
                type="email"
                name="email"
                label="Email"
                placeholder="Enter Email"
              />
              <Input
                type="text"
                name="name"
                label="Name"
                placeholder="Enter Name"
              />
              <Input
                type="tel"
                name="phone"
                label="Phone"
                placeholder="Enter Phone"
                optional={true}
              />
              <div>
                <Field
                  name="tags"
                  label="Select List"
                  placeholder="Select List"
                  component={MultiSelect}
                  options={tagsList}
                />
              </div>
            </div>
            <Button type="submit">
              {Object.keys(subscriber).length ? 'Update' : 'Create'}
            </Button>
          </Form>
        }
      </Formik>
    </>
  );
};

export default SubscriberForm;
