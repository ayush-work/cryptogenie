import React, { useState, useEffect } from "react";
import axios from "../axios";
import requests from "../requests";
import { selectCurrency } from "../store/currencySlice";
import { useSelector } from "react-redux";
import "boxicons";
const Table = () => {
  const pages = [1, 2, 3, 4, 5, 6, 7, 8];
  const currency = useSelector(selectCurrency);
  const [currentPage, setCurrentPage] = useState(1);
  const [data, setData] = useState([]);
  const fetchData = async () => {
    try {
      const res = await axios.get(
        `${requests.marketOverview}?vs_currency=${currency}&order=market_cap_desc&per_page=50&page=${currentPage}&sparkline=false&price_change_percentage=7d`
      );
      setData(res.data);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    fetchData();
  }, [currency, currentPage, data]);

  return (
    <>
      <div className="table__heading">Cryptocurrency prices by Market Cap</div>
      <div className="table">
        <table>
          <thead>
            <tr>
              <th>Rank</th>
              <th>Name</th>
              <th>Price</th>
              <th>24h %</th>
              <th>7D %</th>
              <th>Market Cap</th>
              <th>Total Volume</th>
            </tr>
          </thead>

          {data?.map((item) => {
            return (
              <tbody key={item?.id}>
                <tr>
                  <td>{item?.market_cap_rank}</td>
                  <td className="table__coininfo">
                    <img src={item?.image} alt="" />
                    <p>
                      {item?.name} <span>{item?.symbol.toUpperCase()}</span>
                    </p>
                  </td>
                  <td>
                    {item?.current_price.toLocaleString()}{" "}
                    {currency.toUpperCase()}
                  </td>
                  <td
                    className={`${
                      item?.price_change_percentage_24h < 0
                        ? "table__pricechange--red"
                        : "table__pricechange--green"
                    }`}
                  >
                    {item?.price_change_percentage_24h < 0 ? (
                      <box-icon
                        type="solid"
                        name="down-arrow"
                        color="#ea3943"
                        size="8px"
                      ></box-icon>
                    ) : (
                      <box-icon
                        type="solid"
                        name="up-arrow"
                        color="#16c784"
                        size="8px"
                      ></box-icon>
                    )}{" "}
                    {Math.abs(item?.price_change_percentage_24h)?.toFixed(2)} %
                  </td>
                  <td
                    className={`${
                      item?.price_change_percentage_7d_in_currency < 0
                        ? "table__pricechange--red"
                        : "table__pricechange--green"
                    }`}
                  >
                    {item?.price_change_percentage_7d_in_currency < 0 ? (
                      <box-icon
                        type="solid"
                        name="down-arrow"
                        color="#ea3943"
                        size="8px"
                      ></box-icon>
                    ) : (
                      <box-icon
                        type="solid"
                        name="up-arrow"
                        color="#16c784"
                        size="8px"
                      ></box-icon>
                    )}{" "}
                    {Math.abs(
                      item?.price_change_percentage_7d_in_currency
                    )?.toFixed(2)}{" "}
                    %
                  </td>
                  <td>{item?.market_cap.toLocaleString()}</td>
                  <td>{item?.total_volume.toLocaleString()}</td>
                </tr>
              </tbody>
            );
          })}
        </table>
      </div>
      <div className="table__pagination">
        {pages.map((page) => {
          return (
            <p
              key={page}
              className={` ${
                currentPage === page ? "table__pagination__selected" : ""
              }`}
              onClick={() => setCurrentPage(page)}
            >
              {page}
            </p>
          );
        })}
      </div>
    </>
  );
};

export default Table;
