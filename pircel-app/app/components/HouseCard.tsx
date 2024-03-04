"use client";
import { Card, CardBody, CardHeader, CardFooter } from "@nextui-org/react";

export default function HouseCard(props: any) {
  return (
    <Card className="flex gap-3 w-[400px] shadow-xl p-5 border-2 border-gray-200 rounded-xl mb-5">
      <CardHeader className="flex p-0">
        <div className="flex justify-between w-[100%]">
          <p className="text-2xl font-extrabold">{props.name}</p>
          <p className="font-medium pt-2">{props.animal}</p>
        </div>
      </CardHeader>
      <CardBody
        className={`h-5 bg-gradient-to-r rounded-md`}
        style={{
          background: `linear-gradient(to right, ${props.colour1}, ${props.colour2})`,
        }}
      ></CardBody>
      <CardFooter className="p-0">
        <p className="font-medium">
          Founder:
          <span className="font-extrabold">{props.founder}</span>
        </p>
      </CardFooter>
    </Card>
  );
}
