import React from 'react';
import member1 from '../../assets/our_team/john.jpg';
import member2 from '../../assets/our_team/jane_doe.jpg';
import member3 from '../../assets/our_team/bob.jpg';
import member4 from '../../assets/our_team/mary.jpg';
import TeamMember from './TeamMember';
const teamMembers = [
  {
    name: 'John Doe',
    title: 'Founder & CEO',
    image: member1,
  },
  {
    name: 'Jane Doe',
    title: 'Chief Operating Officer',
    image: member2,
  },
  {
    name: 'Bob Smith',
    title: 'Chief Financial Officer',
    image: member3,
  },
  {
    name: 'Mary Johnson',
    title: 'Marketing Director',
    image: member4,
  },
];

const OurTeam = () => {
  return (
    <section className="py-20 lg:h-[100vh] bg-[#289AE2] .our-team-container" id='ourteam'>
      <div className="container mx-auto">
        <h2 className="text-4xl text-white font-bold mb-2 text-center">Our Team</h2>
        <h3 className='text-lg text-gray-50 sm:mb-14 text-center'>Meat the team behind Hamro Sewa</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 pb-5 .team-member">
          {teamMembers.map((member, index) => (
            <TeamMember key={index} member={member} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurTeam;