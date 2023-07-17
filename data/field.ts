interface FieldType {
  name: string;
  type: string;
  label: string;
  placeholder?: string;
}

const fieldsData: FieldType[] = [
  {
    name: "firstName",
    type: "text",
    label: "First Name",
    placeholder: "example: Mohammad",
  },
  {
    name: "lastName",
    type: "text",
    label: "Last Name",
    placeholder: "example: Mohammad zadeh",
  },
  {
    name: "email",
    type: "email",
    label: "Email",
    placeholder: "example: moh@gmail.com",
  },
  {
    name: "birthdayDate",
    type: "date",
    label: "Birthday Date",
  },
  {
    name: "salary",
    type: "number",
    label: "Salary",
    placeholder: "example: 15000",
  },
];

export default fieldsData;
