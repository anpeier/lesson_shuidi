import * as React from "react";
import MemberHeader from "./memberHeader";
import  MemberRow  from "./memberRow";
import { memberAPI } from "../api/member";
import { MemberEntity } from "../model";
interface Props {}
interface State {
  members: MemberEntity[];
}

// 内部有vue data  react state
export class MembersPage extends React.Component<Props, State> {
  constructor(props) {
    super(props);
    this.state = {
      // vue data react 风格 没有api的约束
      members: [],
    };
  }

  public componentDidMount() {
    memberAPI.fetchMembers().then((members) => {
      console.log(members);
      this.setState({
        members,
      });
    });
  }

  public render() {
    return (
      <div className="row">
        <h2>memberPage</h2>
        <table className="table">
          <thead>
            <MemberHeader />
          </thead>
          <tbody>
            {this.state.members.map((member) => (
              <MemberRow key={member.id} member={member} />
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}
