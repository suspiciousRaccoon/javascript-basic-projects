const url = 'https://randomuser.me/api/';

const getUser = async () => {
  try {
    const request = await fetch(url);
    const data = await request.json();
    // destructure
    const person = data.results[0];
    const { phone, email } = person;
    const { large: image } = person.picture;
    const { password } = person.login;
    const { first, last } = person.name;
    const {
      dob: { age },
    } = person;
    const {
      street: { number, name },
    } = person.location;

    // phone: phone <--- same as phone in ES&
    return {
      phone,
      email,
      image,
      password,
      age,
      street: `${number} ${name}`,
      name: `${first} ${last}`,
    };
  } catch (error) {
    alert('there was an error');
    console.log(error);
  }
};

export default getUser;
