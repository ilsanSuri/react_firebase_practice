import React from "react";
import { addDoc, collection, getDocs, getFirestore } from "firebase/firestore";
import firebaseApp from "../../Firebase";
import { useState } from "react";
import { useEffect } from "react";

function Test(props) {
  const [data, setData] = useState([]);

  const onClickSubmit = async () => {
    const board = collection(getFirestore(firebaseApp), "board");
    await addDoc(board, {
      writer: "철수",
      title: "하이",
      contents: "바이",
      password: "1234",
    });
    console.log("끝");
  };

  useEffect(() => {
    async function fetchBoard() {
      const board = collection(getFirestore(firebaseApp), "board");
      const result = await getDocs(board);
      const boards = result.docs.map((el) => el.data());
      setData(boards);
    }
    fetchBoard();
  }, []);

  return (
    <div>
      <button onClick={onClickSubmit}>하이</button>
      {data?.map((el) => (
        <div>
          <div>{el.title}</div>
          <div>{el.contents}</div>
          <div>{el.writer}</div>
        </div>
      ))}
    </div>
  );
}

export default Test;