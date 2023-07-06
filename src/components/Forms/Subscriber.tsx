import Input from '@/components/Input';
import MultiSelect from '@/components/MultiSelect';
import Button from '@/components/Button';

const Subscriber = ({
  formik,
  MultiSelectedOptions,
  handleTagSelection,
  tagsList,
  btnName,
}: {
  formik: any;
  MultiSelectedOptions: any;
  handleTagSelection: any;
  tagsList: any;
  btnName: string;
}) => {
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
              value={MultiSelectedOptions}
              onChange={handleTagSelection}
              isSearchable={true}
              label="Select List"
            />
          </div>
        </div>
        <Button type="submit">{btnName}</Button>
      </form>
    </>
  );
};

export default Subscriber;
