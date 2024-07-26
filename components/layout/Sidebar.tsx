import { FC } from "react";
import { BsBellFill, BsHouseFill } from "react-icons/bs";
import { FaUser } from "react-icons/fa";
import SidebarLogo from "./SidebarLogo";
import SidebarItem from "./SidebarItem";
import { BiLogOut } from "react-icons/bi";
import SidebarTweetButton from "./SidebarTweetButton";

interface SidebarProps {}

const items = [
  {
    label: "Home",
    href: "/",
    icon: BsHouseFill,
  },
  {
    label: "Notification",
    href: "/notification",
    icon: BsBellFill,
  },
  {
    label: "Profile",
    href: "/users/123",
    icon: FaUser,
  },
];

const Sidebar: FC<SidebarProps> = ({}) => {
  return (
    <div className="col-span-1 h-full pr-4 md:pr-6">
      <div className="flex flex-col items-end">
        <div className="space-y-2 lg:w-[230px]">
          <SidebarLogo />
          {items.map((item) => {
            return (
              <SidebarItem
                key={item.href}
                onClick={() => {
                  alert(item.label);
                }}
                {...item}
              />
            );
          })}
          <SidebarItem label="Logout" icon={BiLogOut} onClick={() => {}} />
          <SidebarTweetButton />
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
