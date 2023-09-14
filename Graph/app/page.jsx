"use client";
import ChartComponent from "./component/Chart";
import Curve from "./component/D3";

export default function Page() {
  return (
    <div>
      <div>
        <ChartComponent />
      </div>
      <div>
      <Curve/>
      </div>
    </div>
  );
}
