"use server";

import axios from "axios";

export async function createUser(formData: FormData) {
  console.log("in actions");

  const rawFormData = {
    name: formData.get("name"),
    email: formData.get("email"),
  };

  // const response = await fetch("http://localhost:8080/api/v1/users", {
  //   method: "GET",
  //   headers: { "Content-Type": "application/json" },
  // });

  // const response = await fetch("http://localhost:8080/api/v1/users", {
  //   method: "POST",
  //   headers: { "Content-Type": "application/json" },
  //   body: JSON.stringify({data: rawFormData}),
  // });

  const response = await axios.post(
    "http://localhost:8080/api/v1/users",
    rawFormData
  );

  console.log(rawFormData);

  //   return response.json();
}
