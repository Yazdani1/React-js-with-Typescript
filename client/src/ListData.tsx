import React, { FC } from "react";

interface ProposData {
  title: string;
  body: string;
}

const ListData: FC<ProposData> = ({ title, body }) => {
  return (
    <div className="list-data">
      <h1>{title}</h1>
      <h6>{body}</h6>
    </div>
  );
};

export default ListData;
