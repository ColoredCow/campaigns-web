import Input from '@/components/Input';
import MultiSelect from '@/components/MultiSelect';
import Button from '@/components/Button';
import { getTags } from '@/apis/subscriber';
import { useEffect, useState } from 'react';
import { useFormik } from 'formik';
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
  subscriber?: any;
}) => {
  const [tags, setTags] = useState([]);

  let initialValues = {
    email: subscriber?.email ? subscriber.email : '',
    name: subscriber?.name ? subscriber.name : '',
    phone: subscriber?.phone ? subscriber.phone : '',
  };

  useEffect(() => {
    const fetchTagLists = async () => {
      setTags(await getTags());
    };

    const fetchInitialValues = async () => {
      if (subscriber) {
        const fetchedInitialValues = {
          email: subscriber.email,
          name: subscriber.name,
          phone: subscriber.phone,
        };

        formik.setValues(fetchedInitialValues);
      }
    };

    fetchTagLists();
    fetchInitialValues();
  }, []);

  const formik = useFormik({
    initialValues: initialValues,
    onSubmit: onSubmit,
    validationSchema: subscriberValidationSchema,
    enableReinitialize: true,
  });

  const tagsList =
    Array.isArray(tags.data) && tags.data.length > 0
      ? tags.data.map((tag: any) => ({
          value: tag.id,
          label: tag.name,
        }))
      : [];

  function handleTagSelection(data: any) {
    if (data.length > 0) {
      setSelectedOptions(data);
    } else {
      setSelectedOptions([]);
    }
  }

  return (
    <>
      <form onSubmit={formik.handleSubmit}>
        <div className="grid grid-cols-2 gap-2">
          <Input
            type="email"
            name="email"
            label="Email"
            placeholder="Enter Email"
            value={formik.values.email}
            onChange={formik.handleChange}
            required={formik.errors.email}
          />
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
            type="tel"
            name="phone"
            label="Phone"
            placeholder="Enter Phone"
            value={formik.values.phone}
            onChange={formik.handleChange}
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
        <Button type="submit">Create</Button>
      </form>
    </>
  );
};

export default Subscriber;
