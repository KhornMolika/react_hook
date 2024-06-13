import { Button } from "flowbite-react";

export default function ButtonComponent({title, onClick}) {
  return (
    <>
      <Button onClick={onClick} gradientDuoTone="purpleToBlue">{title}</Button>
    </>
  );
}
