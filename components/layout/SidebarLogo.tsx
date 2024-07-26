import { useRouter } from "next/router";
import { FC } from "react";
import { BsTwitter } from "react-icons/bs";

interface SidebarLogoProps {}

const SidebarLogo: FC<SidebarLogoProps> = ({}) => {
  const router = useRouter();

  return (
    <div
      className="rounded-full h-14 w-14 p-4 flex items-center justify-center hover:bg-blue-300 cursor-pointer transition"
      onClick={() => router.push("/")}
    >
      <BsTwitter size={28} color="white" />
    </div>
  );
};

export default SidebarLogo;
