import React from "react";
import Describ from "../common/Describ";

function BrokerCard({
  imgUrl,
  brokerTilte,
  brokerPoints,
  imgStarUrl,
  des1,
  des2,
  des3,
  des4,
  des5,
  des6,
  exness,
  liteforex,
}) {
  return (
    <div className="w-full h-full border border-black rounded-xl p-3">
      <div className="flex  relative justify-center items-center gap-3">
        <img className="h-20 rounded-xl" src={imgUrl} alt="#"></img>
        <div className="flex flex-col justify-center relative">
          <h1 className="absolute top-0 pl-1  font-medium">{brokerTilte}</h1>
          <img className="h-20 rounded-full" src={imgStarUrl}></img>
          <p className="absolute bottom-0 pl-1 font-medium ">{brokerPoints}</p>
        </div>

        {/* <img
          className="absolute top-0 right-0"
          src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDgiIGhlaWdodD0iNTciIHZpZXdCb3g9IjAgMCA0OCA1NyIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTQ0LjY5MzUgMC4wMTU2MjVWNTYuMDAyTDIzLjk5OTggNDYuNjY3TDMuMzA2MTUgNTYuMDAyVjAuMDE1NjI1SDQ0LjY5MzVaIiBmaWxsPSIjRkZCNjI3Ii8+CjxwYXRoIGQ9Ik00Mi45MTQyIDEuNzY5MjJWNTMuMjc0M0wyNC43MzY4IDQ1LjA3MTNMMjMuOTk5OCA0NC43Mzk2TDIzLjI2NTggNDUuMDcxM0w1LjA3OTU2IDUzLjI2NTZWMS43NjA0OUg0Mi45MTQyVjEuNzY5MjJaTTQ0LjY3NTkgMEgzLjMwNjE1VjU1Ljk5OEwyMy45OTk4IDQ2LjY2M0w0NC42OTM1IDU1Ljk5OFYwLjAwODczODJMNDQuNjc1OSAwWiIgZmlsbD0iI0ZGRDI3QiIvPgo8ZyBvcGFjaXR5PSIwLjIiPgo8cGF0aCBvcGFjaXR5PSIwLjIiIGQ9Ik00NC42OTM1IDAuMDExNzE4OFYxNy4xNTM5TDE1LjU1MjcgNTAuNDcyMkwzLjMwNjE1IDU1Ljk5ODFWMzkuOTY0NUwzOC4yNTE3IDAuMDExNzE4OEg0NC42OTM1WiIgZmlsbD0id2hpdGUiLz4KPHBhdGggb3BhY2l0eT0iMC4yIiBkPSJNMjIuMjE0NyAwLjAxMTcxODhMMy4zMDYxNSAyMS42MjkzVjE0LjQzOUwxNS45MjU1IDAuMDExNzE4OEgyMi4yMTQ3WiIgZmlsbD0id2hpdGUiLz4KPHBhdGggb3BhY2l0eT0iMC4yIiBkPSJNNDQuNjkyOSAzMC42ODc1VjQxLjk0M0wzNS44ODE2IDUyLjAxOTlMMjguODIzMiA0OC44MzM2TDQ0LjY5MjkgMzAuNjg3NVoiIGZpbGw9IndoaXRlIi8+CjwvZz4KPHBhdGggZD0iTTQ0LjY5MzUgOC4yMzQzOEgzLjMwNjE1VjIxLjY4MUg0NC42OTM1VjguMjM0MzhaIiBmaWxsPSIjQ0Y4OTAwIi8+CjxwYXRoIGQ9Ik00Ny45OTk5IDE5Ljc0NjFMNDQuNjkzOCAyMi45MDMzVjE5Ljc0NjFINDcuOTk5OVoiIGZpbGw9IiNEOTYwNTYiLz4KPHBhdGggZD0iTTAgMTkuNzQ2MUwzLjMwNjA2IDIyLjkwMzNWMTkuNzQ2MUgwWiIgZmlsbD0iI0Q5NjA1NiIvPgo8cGF0aCBkPSJNNDcuOTk5NSA2LjMwNDY5SDBWMTkuNzUxM0g0Ny45OTk1VjYuMzA0NjlaIiBmaWxsPSIjRjc4MDVCIi8+CjxnIHN0eWxlPSJtaXgtYmxlbmQtbW9kZTpvdmVybGF5IiBvcGFjaXR5PSIwLjMiPgo8ZyBzdHlsZT0ibWl4LWJsZW5kLW1vZGU6b3ZlcmxheSIgb3BhY2l0eT0iMC4zIj4KPHBhdGggZD0iTTQ3Ljk5OTYgNi4zMDA3OFYxMy4yNDM4TDQyLjMzMjkgMTkuNzUwM0gyMC45MzQ2TDMyLjY1ODUgNi4zMDA3OEg0Ny45OTk2WiIgZmlsbD0id2hpdGUiLz4KPC9nPgo8ZyBzdHlsZT0ibWl4LWJsZW5kLW1vZGU6b3ZlcmxheSIgb3BhY2l0eT0iMC4zIj4KPHBhdGggZD0iTTE2LjcyOTkgNi4zMDA3OEw1LjAxNDg3IDE5Ljc1MDNIMFYxOC4zMTI4TDEwLjQ0OTYgNi4zMDA3OEgxNi43Mjk5WiIgZmlsbD0id2hpdGUiLz4KPC9nPgo8L2c+Cjwvc3ZnPgo="
        ></img>
        <span className="absolute top-0 right-4 ">01</span> */}
      </div>
      <div className="flex flex-col pt-3 justify-center items-center">
        <div>
          <Describ desc={des1} />
          <Describ desc={des2} />
          <Describ desc={des3} />
          <Describ desc={des4} />
          <Describ desc={des5} />
          {/* <Describ desc={des6} /> */}
        </div>
        <div className="flex flex-col h-fit w-full p-3 gap-3 justify-center items-center">
          <button className="w-1/2 py-2 bg-blue-400 rounded-full">
            <a
              target="_blank"
              href={
                exness
                  ? `https://one.exnesslink.com/a/t11qu5wb4x`
                  : `https://www.litefinance.org/?uid=514106246&cid=104103`
              }
            >
              Mở tài khỏan
            </a>
          </button>
          <button className="w-1/2  py-2 border border-blue-400 rounded-full">
            Xem
          </button>
        </div>
      </div>
    </div>
  );
}

export default BrokerCard;
