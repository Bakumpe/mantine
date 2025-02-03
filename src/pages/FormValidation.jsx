import React from "react";
import Header from "../components/Header";
import { TextInput } from "@mantine/core";
import { useForm } from "@mantine/form";

function FormValidation() {
  let users = [
    {
      name: "admin",
      email: "admin@gmail.com",
      password: "admin",
    },
    {
      name: "bakumpe",
      email: "bakumpe@gmail.com",
      password: "bakumpe",
    },
    {
      name: "joseph",
      email: "joseph@gmail.com",
      password: "joseph",
    },
  ];

  const form = useForm({
    initialValues: {
      name: "",
      email: "",
      password: "",
    },

    validate: {
      name: (value, values) => {
        const isValidUser = users.some(
          (user) =>
            user.name === value &&
            user.email === values.email &&
            user.password === values.password
        );
        return isValidUser ? null : "Invalid Name";
      },
      email: (value, values) => {
        const isValidUser = users.some(
          (user) =>
            user.email === value &&
            user.name === values.name &&
            user.password === values.password
        );
        return isValidUser ? null : "Invalid Email";
      },
      password: (value, values) => {
        const isValidUser = users.some(
          (user) =>
            user.password === value &&
            user.name === values.name &&
            user.email === values.email
        );
        return isValidUser ? null : "Invalid Password";
      },
    },
  });

  return (
    <>
      <Header />
      <div className="myForm">
        

        <form
          onSubmit={form.onSubmit((values) => {
            console.log(values), form.reset(); // Log form values
          })}
        >
          <h1>My Form for Validation</h1>

          <TextInput
            type="text"
            label="Name"
            placeholder="Enter Your Name"
            {...form.getInputProps("name")}
          />
          <TextInput
            type="email"
            label="Email"
            placeholder="Enter Your Email"
            {...form.getInputProps("email")}
          />
          <TextInput
            type="password"
            label="Password"
            placeholder="Enter Your Password"
            {...form.getInputProps("password")}
          />

          <button type="submit">Submit</button>
        </form>
      </div>
    </>
  );
}

export default FormValidation;
