"use client";
import { useEffect, useState } from "react";
import { Spinner } from "@nextui-org/react";
import HouseCard from "./components/HouseCard";

export default function Home() {
  const [data, setData] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  useEffect(() => {
    fetch("http://localhost:5000/houses")
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        setIsLoading(false);
      });
  }, []);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 font-verdana">
      {isLoading ? (
        <Spinner label="Loading..." size="lg" color="primary" />
      ) : (
        <div>
          {data.map((item, index) => {
            const colours: string = item["houseColours"];
            var colour1: string = colours.split(" ")[0].toLowerCase();
            var colour2: string = colours.split(" ")[2].toLowerCase();
            var s1 = new Option().style;
            var s2 = new Option().style;
            s1.color = colour1;
            s2.color = colour2;
            if (s1.color === "" || s2.color === "") {
              colour1 = "white";
              colour2 = "black";
            }

            return (
              <HouseCard
                key={index}
                name={item["name"]}
                animal={item["animal"]}
                colour1={colour1}
                colour2={colour2}
                founder={item["founder"]}
              />
            );
          })}
        </div>
      )}
    </main>
  );
}
