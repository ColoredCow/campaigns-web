import Input from '@/components/Input';
import MultiSelect from '@/components/MultiSelect';
import Button from '@/components/Button';
import { getTags } from '@/apis/tag';
import { useEffect, useState } from 'react';
import { Formik, Form } from 'formik';
import { subscriberValidationSchema } from '@/validations/subscriber';
import { mapTagsToSelectOptions } from '@/utils/common';

const SubscriberForm = ({
  onSubmit,
  selectedOptions,
  setSelectedOptions,
  subscriber = {},
}: {
  onSubmit: (value: any) => void;
  selectedOptions: Array<any>;
  setSelectedOptions: (value: any) => void;
  subscriber: object;
}) => {
  const [tags, setTags] = useState([]);

  let initialValues = {
    email: '',
    name: '',
    phone: '',
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
  }

  return (
    <>
      <Formik
        initialValues={initialValues}
        onSubmit={onSubmit}
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
                <MultiSelect
                  options={tagsList}
                  placeholder="Select Tags"
                  value={selectedOptions}
                  onChange={(data) => setSelectedOptions(data)}
                  isSearchable={true}
                  label="Select List"
                />
              </div>
            </div>
            <Button type="submit">{subscriber ? 'Update' : 'Create'}</Button>
          </Form>
        }
      </Formik>
    </>
  );
};

export default SubscriberForm;
