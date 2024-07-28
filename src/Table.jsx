import React from "react";
import "./Table.css";

let Service = [
  {
    Sr: 1,
    country: "UAE",
    icon: "https://img.icons8.com/?size=100&id=NA7wq_gDd9d7&format=png&color=000000",
    point5GK: 699,
    oneKG: 805,
    one5KG: 935,
    twoKG: 1064,
  },
  {
    Sr: 2,
    country: "Singapore",
    icon: "https://img.icons8.com/?size=100&id=8H-8FMObN4vB&format=png&color=000000",
    point5GK: 887,
    oneKG: 1043,
    one5KG: 1193,
    twoKG: 1349,
  },
  {
    Sr: 3,
    country: "UK",
    icon: "https://img.icons8.com/?size=100&id=ShNNs7i8tXQF&format=png&color=000000",
    point5GK: 1069,
    oneKG: 1157,
    one5KG: 1334,
    twoKG: 1512,
  },
  {
    Sr: 4,
    country: "Germany",
    icon: "https://img.icons8.com/?size=100&id=hTMPE6ntTofO&format=png&color=000000",
    point5GK: 873,
    oneKG: 966,
    one5KG: 1207,
    twoKG: 1369,
  },
  {
    Sr: 5,
    country: "Italy",
    icon: "https://img.icons8.com/?size=100&id=WmOfu4e7Rvp7&format=png&color=000000",
    point5GK: 1161,
    oneKG: 1437.2,
    one5KG: 1655,
    twoKG: 1876,
  },
  {
    Sr: 6,
    country: "Canada",
    icon: "https://img.icons8.com/?size=100&id=cYRU7TBWwNVs&format=png&color=000000",
    point5GK: 1260,
    oneKG: 1527,
    one5KG: 1754,
    twoKG: 1983,
  },
  {
    Sr: 7,
    country: "USA",
    icon: "https://img.icons8.com/?size=100&id=fIgZUHgwc76e&format=png&color=000000",
    point5GK: 1273,
    oneKG: 1677,
    one5KG: 1905,
    twoKG: 2051,
  },
  {
    Sr: 8,
    country: "Australia",
    icon: "https://img.icons8.com/?size=100&id=P94rwJyovccu&format=png&color=000000",
    point5GK: 940,
    oneKG: 1118,
    one5KG: 1293,
    twoKG: 1467,
  },
  {
    Sr: 9,
    country: "NZ",
    icon: "https://img.icons8.com/?size=100&id=Q8RbES-9By0F&format=png&color=000000",
    point5GK: 1403,
    oneKG: 1713,
    one5KG: 1979,
    twoKG: 2246,
  },
];

let Service2 = [
  {
    Sr: 1,
    country: "UAE",
    icon: "https://img.icons8.com/?size=100&id=NA7wq_gDd9d7&format=png&color=000000",
    point5GK: 1478,
    oneKG: 1778,
    one5KG: 2081,
    twoKG: 2324,
  },
  {
    Sr: 2,
    country: "Singapore",
    icon: "https://img.icons8.com/?size=100&id=8H-8FMObN4vB&format=png&color=000000",
    point5GK: 1470,
    oneKG: 1750,
    one5KG: 2076,
    twoKG: 2394,
  },
  {
    Sr: 3,
    country: "UK",
    icon: "https://img.icons8.com/?size=100&id=ShNNs7i8tXQF&format=png&color=000000",
    point5GK: 1773,
    oneKG: 2043,
    one5KG: 2324,
    twoKG: 2601,
  },
  {
    Sr: 4,
    country: "Germany",
    icon: "https://img.icons8.com/?size=100&id=hTMPE6ntTofO&format=png&color=000000",
    point5GK: 1773,
    oneKG: 2043,
    one5KG: 2324,
    twoKG: 2601,
  },
  {
    Sr: 5,
    country: "Italy",
    icon: "https://img.icons8.com/?size=100&id=WmOfu4e7Rvp7&format=png&color=000000",
    point5GK: 1743,
    oneKG: 2043,
    one5KG: 2324,
    twoKG: 2601,
  },
  {
    Sr: 6,
    country: "Canada",
    icon: "https://img.icons8.com/?size=100&id=cYRU7TBWwNVs&format=png&color=000000",
    point5GK: 1930,
    oneKG: 2215,
    one5KG: 2361,
    twoKG: 2646,
  },
  {
    Sr: 7,
    country: "USA",
    icon: "https://img.icons8.com/?size=100&id=fIgZUHgwc76e&format=png&color=000000",
    point5GK: 1904,
    oneKG: 2161,
    one5KG: 2319,
    twoKG: 2535,
  },
  {
    Sr: 8,
    country: "Australia",
    icon: "https://img.icons8.com/?size=100&id=P94rwJyovccu&format=png&color=000000",
    point5GK: 1995,
    oneKG: 2056,
    one5KG: 2439,
    twoKG: 2806,
  },
  {
    Sr: 9,
    country: "NZ",
    icon: "https://img.icons8.com/?size=100&id=Q8RbES-9By0F&format=png&color=000000",
    point5GK: 2170,
    oneKG: 2582,
    one5KG: 2993,
    twoKG: 3406,
  },
]

function Table() {
  return (
    <>
    <div className="heads">Express - U (Pan India)</div>
      <div className="body">
        <table>
          <thead>
            <tr>
              <th>SR</th>
              <th>Country</th>
              <th>0.5 KG</th>
              <th>1 KG</th>
              <th>1.5 KG</th>
              <th>2 KG</th>
            </tr>
          </thead>
          <tbody class="price">
            {Service.map((data, Idx) => (
              <tr key={Idx}>
                <td data-label="SR">{data.Sr}</td>
                <td data-label="Country">{data.country} <img src={data.icon} alt="" /> </td>
                <td data-label="0.5 KG">&#8377;{data.point5GK + data.point5GK*.2}&nbsp;&nbsp;<span className="lineThrow">{data.point5GK + data.point5GK*.4}</span></td>
                <td data-label="1 KG">&#8377;{data.oneKG + data.oneKG*.2}&nbsp;&nbsp;<span className="lineThrow">{data.oneKG + data.oneKG*.4}</span></td>
                <td data-label="1.5 KG">&#8377;{data.one5KG + data.one5KG*.2}&nbsp;&nbsp;<span className="lineThrow">{data.one5KG + data.one5KG*.4}</span></td>
                <td data-label="2 KG">&#8377;{data.twoKG + data.twoKG*.2}&nbsp;&nbsp;<span className="lineThrow">{data.one5KG + data.one5KG*.4}</span></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <hr />
      <div className="heads">Express - D (MUM)</div>
      <div className="body">
        <table>
          <thead>
            <tr>
              <th>SR</th>
              <th>Country</th>
              <th>0.5 KG</th>
              <th>1 KG</th>
              <th>1.5 KG</th>
              <th>2 KG</th>
            </tr>
          </thead>
          <tbody class="price">
            {Service2.map((data, Idx) => (
              <tr key={Idx}>
                <td data-label="SR">{data.Sr}</td>
                <td data-label="Country">{data.country} <img src={data.icon} alt="" /> </td>
                <td data-label="0.5 KG">&#8377;{data.point5GK + data.point5GK*.2}&nbsp;&nbsp;<span className="lineThrow">{data.point5GK + data.point5GK*.4}</span></td>
                <td data-label="1 KG">&#8377;{data.oneKG + data.oneKG*.2}&nbsp;&nbsp;<span className="lineThrow">{data.oneKG + data.oneKG*.4}</span></td>
                <td data-label="1.5 KG">&#8377;{data.one5KG + data.one5KG*.2}&nbsp;&nbsp;<span className="lineThrow">{data.one5KG + data.one5KG*.4}</span></td>
                <td data-label="2 KG">&#8377;{data.twoKG + data.twoKG*.2}&nbsp;&nbsp;<span className="lineThrow">{data.one5KG + data.one5KG*.4}</span></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default Table;
