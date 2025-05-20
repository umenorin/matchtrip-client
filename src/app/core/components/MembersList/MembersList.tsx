import "./MembersList.scss";
import '../../../features/MatchPage/Match.scss';

type Member = {
  id: string | number;
  name: string;
  avatar: string;
};

type MembersListProps = {
  members: Member[];
};

export default function MembersList({ members }: MembersListProps) {
  return (
    <div className="members-list">
      {members.map((member) => (
        <div className="members-list__member" key={member.id}>
          <img src={member.avatar} alt={member.name} />
          <span>{member.name}</span>
        </div>
      ))}
    </div>
  );
}