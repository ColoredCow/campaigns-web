import Input from '@/components/Input';
import MultiSelect from '@/components/MultiSelect';
import Button from '@/components/Button';
import { getTags } from '@/apis/subscriber';
import { useEffect, useState } from 'react';
import { Formik, Form } from 'formik';
import { subscriberValidationSchema } from '@/validations/subscriber';

const Subscriber = ({
  onSubmit,
  selectedOptions,
  setSelectedOptions,
  subscriber = null,
}: {
  onSubmit: any;
  selectedOptions: any;
  setSelectedOptions: any;
  subscriber: any;
}) => {
  const [tags, setTags] = useState([]);

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

  const initialValues = {
    email: subscriber?.email ? subscriber.email : '',
    name: subscriber?.name ? subscriber.name : '',
    phone: subscriber?.phone ? subscriber.phone : '',
  };

  function handleTagSelection(data: any) {
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

export default Subscriber;
