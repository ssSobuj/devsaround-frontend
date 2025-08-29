import SectionHeader from "../common/SectionHeader";
import TeamCard from "../cards/TeamCard";
import { Button } from "../ui/button";
const teamMembers = [
  {
    image: "/images/team/smith.png",
    name: "John Smith",
    position: "CEO and Founder",
    description:
      "10+ years of experience in digital marketing. Expertise in SEO, PPC, and content strategy",
  },
  {
    image: "/images/team/jane.png",
    name: "Jane Doe",
    position: "Director of Operations",
    description:
      "7+ years of experience in project management and team leadership. Strong organizational and communication skills",
  },
  {
    image: "/images/team/michael.png",
    name: "Michael Brown",
    position: "Senior SEO Specialist",
    description:
      "5+ years of experience in SEO and content creation. Proficient in keyword research and on-page optimization",
  },
  {
    image: "/images/team/emily.png",
    name: "Emily Johnson",
    position: "PPC Manager",
    description:
      "3+ years of experience in paid search advertising. Skilled in campaign management and performance analysis",
  },
  {
    image: "/images/team/brain.png",
    name: "Brian Williams",
    position: "Social Media Specialist",
    description:
      "4+ years of experience in social media marketing. Proficient in creating and scheduling content, analyzing metrics, and building engagement",
  },
  {
    image: "/images/team/sarah.png",
    name: "Sarah Kim",
    position: "Content Creator",
    description:
      "2+ years of experience in writing and editing. Skilled in creating compelling, SEO-optimized content for various industries",
  },
];
export default function Team() {
  return (
    <section className="container py-16 md:py-24">
      <SectionHeader
        title="Team"
        description="Meet the skilled and experienced team behind our successful digital marketing strategies"
        descriptionMaxWidth="473px"
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
        {teamMembers.map((member, index) => (
          <TeamCard data={member} key={index} />
        ))}
      </div>
      <div className="flex justify-end items-center mt-10">
        <Button variant="secondary" className="w-full md:w-[269px]">
          See All Team
        </Button>
      </div>
    </section>
  );
}
