const TeamMember = ({ member }) => {
  return (
    <div data-testid="team-member" className="bg-white team-member hover:bg-[#4babe7] hover:text-white rounded-lg mt-5 md:transform md:scale-110 hover:scale-125 lg:-rotate-6 overflow-hidden shadow-md mx-2">
      <img src={member.image} alt={member.name} className="w-full h-72 object-cover" />
      <div className="p-4 hover:text-white">
        <h3 className="text-xl font-semibold mb-2">{member.name}</h3>
        <p className="text-sm">{member.title}</p>
      </div>
    </div>
  );
};

export default TeamMember;