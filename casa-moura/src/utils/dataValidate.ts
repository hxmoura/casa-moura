export default function dataValidate(data: { [key: string]: any }) {
  for (let key in data) {
    if (data[key] === "" || data[key] === null) {
      return false;
    }
  }
  return true;
}
