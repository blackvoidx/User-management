interface fieldType {
  name: string;
  type: string;
  label: string;
}

const fieldsData: fieldType[] = [
  {
    name: "firstName",
    type: "text",
    label: "First name",
  },
  {
    name: "lastName",
    type: "text",
    label: "Last name",
  },
  {
    name: "email",
    type: "email",
    label: "Email",
  },
  {
    name: "birthdayDate",
    type: "date",
    label: "Birthday date",
  },
  {
    name: "salary",
    type: "text",
    label: "Salary",
  },
];

export default fieldsData;
