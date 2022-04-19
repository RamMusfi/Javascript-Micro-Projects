const URL = 'https://randomuser.me/api/';

const getUser = async () => {
  const resp = await fetch(URL);
  const data = await resp.json();
  // Destructuring
  const person = data.results[0];
  const { phone, email } = person;
  const { large: img } = person.picture;
  const { password } = person.login;
  const { first, last } = person.name;
  const {
    dob: { age },
  } = person;
  const {
    street: { number, name },
  } = person.location;
  return {
    phone,
    email,
    img,
    password,
    age,
    street: `${number} ${name}`,
    name: `${first} ${last}`,
  };
};

export default getUser;
