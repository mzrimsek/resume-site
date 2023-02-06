import { faGithub } from "@fortawesome/free-brands-svg-icons/faGithub";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons/faLinkedin";
import { faMedium } from "@fortawesome/free-brands-svg-icons/faMedium";
import SocialMediaLink from "./SocialMediaLink";

interface ProfileProps {
  size?: number;
  source?: string;
  name: string;
  title: string;
  github: string;
  linkedin: string;
  medium: string;
}

export default function Profile({
  size = 100,
  source = "https://placeholder.com/100",
  name,
  title,
  github,
  linkedin,
  medium,
}: ProfileProps) {
  const picClasses = `w-${size} h-${size} rounded-full`;

  const socialMedia = (
    <div className="flex items-center">
      <SocialMediaLink link={github} icon={faGithub} />
      <SocialMediaLink link={linkedin} icon={faLinkedin} />
      <SocialMediaLink link={medium} icon={faMedium} />
    </div>
  );

  return (
    <div className="flex items-center">
      <img className={picClasses} src={source} alt="Profile" />
      <div className="ml-4">
        <div className="text-xl font-bold">{name}</div>
        <div className="text-gray-500">{title}</div>
        {socialMedia}
      </div>
    </div>
  );
}
