import { faker } from "@faker-js/faker";

export async function signUpFactory() {
  const password = faker.random.alphaNumeric(10);
  return {
    email: faker.internet.email(),
    password: password,
    confirmPassword: password
  };
}

export async function signInFactory() {
  return {
    email: faker.internet.email(),
    password: faker.random.alphaNumeric(10)
  };
}




