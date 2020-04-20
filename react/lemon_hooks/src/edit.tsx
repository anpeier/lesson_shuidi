import * as React from "react";

interface Props {
  username: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const NameEditComponent = (props: Props) => (
  <>
    <label>Update name:</label>
    <input value={props.username} onChange={props.onChange} />
  </>
);
