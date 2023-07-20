import Input from '@/components/Input';
import MultiSelect from '@/components/MultiSelect';
import Button from '@/components/Button';
import { getTags } from '@/apis/tag';
import { useEffect, useState } from 'react';
import { Formik, Form } from 'formik';
import { subscriberValidationSchema } from '@/validations/subscriber';

const SubscriberForm = ({
  onSubmit,
  selectedOptions,
  setSelectedOptions,
  subscriber = null,
}: {
  onSubmit: any;
  selectedOptions: Array<any>;
  setSelectedOptions: any;
  subscriber: any;
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

  const tagsList =
    Array.isArray(tags.data) && tags.data.length > 0
      ? tags.data.map((tag: any) => ({
          value: tag.id,
          label: tag.name,
        }))
      : [];

  if (subscriber) {
    initialValues = { ...initialValues, ...subscriber };
  }

  function handleTagSelection(data: Array<any>) {
    if (data.length > 0) {
      setSelectedOptions(data);
    } else {
      setSelectedOptions([]);
    }
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
                  onChange={handleTagSelection}
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
