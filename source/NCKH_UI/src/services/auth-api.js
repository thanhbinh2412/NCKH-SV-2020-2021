import ConnectionInstance from "./connection-instance";

export const login = (body) => {
  return ConnectionInstance.post("/login", {
    NAME: body.username,
    PASSWORD: body.password,
  });
};
