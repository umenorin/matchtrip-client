import "./MembersList.scss";

export default function MembersList({ members }) {
  return (
    <div className="members-list">
      {members.map((member) => (
        <div className="members-list__member" key={member.name}>
          <img src={member.avatar} alt={member.name} />
          <span>{member.name}</span>
        </div>
      ))}
    </div>
  );
}