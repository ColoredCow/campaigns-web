import Input from '@/components/Input';
import Button from '@/components/Button';
import Select from '@/components/Select';

const Subscriber = ({
  formik,
  senderidentityOptions,
  tagsOptions,
  btnName,
}: {
  formik: any;
  senderidentityOptions: any;
  tagsOptions: any;
  btnName: string;
}) => {
  return (
    <>
      <form onSubmit={formik.handleSubmit}>
        <div className="grid grid-cols-2 gap-2">
          <Select
            options={senderidentityOptions}
            value={formik.values.sender_identity_id}
            onChange={formik.handleChange}
            name="sender_identity_id"
            label="Sender Identity"
            required={formik.errors.email_subject}
          />
          <Select
            options={tagsOptions}
            value={formik.values.subscription_list_id}
            onChange={formik.handleChange}
            name="subscription_list_id"
            label="Select List"
            required={formik.errors.email_subject}
          />
        </div>
        <Input
          type="text"
          name="email_subject"
          label="Subject"
          placeholder="Enter Subject"
          value={formik.values.email_subject}
          onChange={formik.handleChange}
          required={formik.errors.email_subject}
        />
        <Button
          className="btn rounded-3 font-golas-600 fs-16 w-203 btn-curious-blue py-2 text-center text-white"
          type="submit"
        >
          {btnName}
        </Button>
      </form>
    </>
  );
};

export default Subscriber;
