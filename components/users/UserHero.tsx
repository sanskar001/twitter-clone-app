import { FC } from "react";
import Image from "next/image";
import useUser from "@/hooks/useUser";
import Avatar from "../Avatar";

export interface UserHeroProps {
  userId: string;
}

const UserHero: FC<UserHeroProps> = ({ userId }) => {
  const { data: fetchedUser } = useUser(userId as string);

  return (
    <div>
      <div className="h-44 bg-neutral-700 relative">
        {fetchedUser?.coverImage && (
          <Image
            src={fetchedUser?.coverImage}
            fill
            alt="cover image"
            style={{ objectFit: "cover" }}
          />
        )}
        <div className="absolute -bottom-16 left-4">
          <Avatar userId={userId} isLarge hasBorder />
        </div>
      </div>
    </div>
  );
};

export default UserHero;
