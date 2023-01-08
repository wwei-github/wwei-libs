import { Fragment, useState, useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import Select, { DataType } from "../Select/Select";

const Data: DataType[] = [
  { id: 1, name: "Wade Cooper" },
  { id: 2, name: "Arlene Mccoy" },
  { id: 3, name: "Devon Webb" },
  { id: 4, name: "Tom Cook" },
  { id: 5, name: "Tanya Fox" },
  { id: 6, name: "Hellen Schmidt" },
];

export default function PersonSelect() {
  const result = useQuery(["person-key"], () => axios.get("/selectData"), {
    select: (res) => res.data.data,
  });
  console.log(result);
  // useEffect(() => {
  //   axios.get("/selectData").then(({ data }) => {
  //     console.log(data);
  //   });
  // }, []);

  return (
    <>
      <Select
        {...{
          data: result.data||[],
          selected: Data[0],
          onChange: (e: DataType) => console.log(e),
        }}
      />
    </>
  );
}
