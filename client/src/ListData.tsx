import React, { FC } from "react";

interface ProposData {
  title: string;
  body: string;
}

const ListData: FC<ProposData> = ({title,body}) => {
  return <div>ListData</div>;
};

export default ListData;
