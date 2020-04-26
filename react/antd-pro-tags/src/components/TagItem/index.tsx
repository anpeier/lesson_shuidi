import React from 'react';
interface tagObj {
  key: Number;
  tagObject: {
    id: Number;
    title: String;
  };
}
export const TagItem: React.FC<tagObj> = (props) => {
return <div className="flexRow">{props.tagObject.id}</div>;
};
