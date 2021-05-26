import ConnectionInstance from "./connection-instance";

export const getPackages = (body) => {
  if (!body.MA_DU_AN) return;
  return ConnectionInstance.post("/moi_thau/danh_sach_goi_thau", body);
};

export const addPackage = (body) => {
  return ConnectionInstance.post("moi_thau/them_moi_goi_thau", {
    MA_DINH_DANH: body.packageId,
    TEN_GOI_THAU: body.packageName,
    NGAY_CONG_BO: body.releaseDate,
    NGAY_DONG_THAU: body.closeDate,
  });
};

export const inviteList = () => {
  return ConnectionInstance.post("moi_thau/danh_sach_goi_thau");
};
