import React, { useState } from "react";
import DatePick from "../write/Date";
import styled from "styled-components";
import WeatherPick from "../write/weather";
import LocationPick from "../write/Location";
import RelationPick from "../write/relation";
import DoPick from "../write/Do";

const Ref = styled.div`
  height: 100vh;
  margin-bottom: 50px;
`;

function WritePage() {
  const today = new Date();
  const [selectDay, setSelectDay] = useState(today);

  return (
    <div>
      <Ref>
        <DatePick setSelect={setSelectDay} select={selectDay} today={today} />
      </Ref>
      <Ref>
        <WeatherPick />
      </Ref>
      <Ref>
        <LocationPick />
      </Ref>
      <Ref>
        <RelationPick />
      </Ref>
      <Ref>
        <DoPick />
      </Ref>
    </div>
  );
}

export default WritePage;
