export const roles = ["USER", "ADMIN"];
export const tabNames = [
  { status: "enable", name: "사용가능" },
  { status: "disable", name: "사용완료 · 기간만료" },
  { status: "all", name: "전체" },
];
export const DefaultUser = {
  username: "",
  role: roles[0],
};
