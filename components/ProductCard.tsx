import Image from "next/image";
import { Button } from "@nextui-org/button";

export default function ProductCard() {
  return (
    <div className="w-[14rem] h-[345px] rounded flex flex-col justify-between pb-2 bg-[#fff] overflow-hidden shadow-[0px_1px_2px_#888]">
      <div className="h-[228px] w-full  relative">
        <Image
          src="/basil.jpg"
          alt="Picture of the product"
          fill={true}
          className="object-cover"
        />
      </div>
      <div className="flex justify-between px-3 align-center">
        <h1 className="text-2xl font-[500] pb-1">Yani</h1>
        <p className=" place-self-center">180 DZD</p>
      </div>
      <Button
        size="sm"
        className="mx-3 text-base bg-[rgba(153,205,50,0.1)] text-[rgba(11,158,3,0.8)] h-9"
      >
        AJOUTER AU PANIER
      </Button>
    </div>
  );
}
