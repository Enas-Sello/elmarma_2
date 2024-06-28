'use client';

// import { useMutation } from '@tanstack/react-query';
const ContactForm = () => {
  // const createUser = async (userData: any) => {
  //   const response = await fetch(
  //     'https://admin.elmarma.com/api/v1/contact-us',
  //     {
  //       method: 'POST',
  //       headers: {
  //         'Content-Type': 'application/json'
  //       },
  //       body: JSON.stringify(userData)
  //     }
  //   );

  //   if (!response.ok) {
  //     console.log(response);
  //   }
  //   return response.json();
  // };

  // const createUserMutation = useMutation(createUser);

  const handleSubmit = (event: any) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const userData = Object.fromEntries(formData);
    console.log(userData);
    // createUserMutation.mutate(userData);
  };

  return (
    <form action="" onSubmit={handleSubmit}>
      <label htmlFor="">input</label>
      <input
        type="text"
        className="p-2 rounded-2 border"
        name="first_name"
        placeholder="first name"
      />
      <button> submit</button>
    </form>
  );
};

export default ContactForm;
