import ConnectionInstance from "./connection-instance";

export const uploadFile = (file) => {
  return ConnectionInstance.post("/file/up_file", file, {
    headers: { "Content-Type": "multipart/form-data" },
  });
};
