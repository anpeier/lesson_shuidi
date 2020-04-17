import * as React from "react";
import { MemberEntity } from "../model";
// interface Props {
//   member: MemberEntity;
// }
// interface State {}
// class MemberRow extends React.Component<Props, State> {

//   render() {
//     return (
//       <tr>
//         <td>{this.props.member.id}</td>
//         <td>{this.props.member.login}</td>
//         <td>{this.props.member.id}</td>
//       </tr>
//     );
//   }
// }
export const MemberRow: React.StatelessComponent<{
  member: MemberEntity;
}> = ({ member }) => {
  return (
    <tr>
      <td>
        {member.avatar_url}
      </td>
      <td>{member.login}</td>
      <td>{member.id}</td>
    </tr>
  );
};
export default MemberRow;
