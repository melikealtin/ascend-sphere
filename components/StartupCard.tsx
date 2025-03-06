import React from "react";
import { formatDate } from "@/lib/utils";
import { EyeIcon } from "lucide-react";

import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";

const StartupCard = ({ post }: { post: StartupCardType }) => {
  const {
    author: { _id: authorId, name },
    _createdAt,
    views,
    title,
    description,
    image,
    category,
    _id,
  } = post;

  return (
    <li className="startup-card">
      <div className="flex-between">
        <p className="startup-card-date">{formatDate(_createdAt)}</p>
        <div className="flex items-center gap-2">
          <EyeIcon className="startup-card_icon" />
          <span className="text-16-medium">{views}</span>
        </div>
      </div>

      <div className="flex-between mt-5 gap-5">
        <div className="flex-1">
          <Link href={`/user/${authorId}`} className="startup-card_link">
            <p className="text-16-medium line-clamp-1">{name}</p>
          </Link>
          <Link href={`/startup/${_id}`} className="startup-card_link">
            <h3 className="text-26-semibold">{title}</h3>
          </Link>
        </div>
        <Link href={`/user/${authorId}`}>
          <Image
            src="https://placehold.co/48x48"
            alt={name}
            width={48}
            height={48}
            className="startup-card_profile"
          />
        </Link>
      </div>

      <Link href={`/startup/${_id}`} className="block">
        <p className="startup-card_desc">{description}</p>
        <img src={image} alt={title} className="startup-card_img" />
      </Link>

      <div className="flex-between gap-3 mt-5">
        <Link href={`/?query=${category.toLowerCase()}`}>
          <p className="startup-card_category">{category}</p>
        </Link>
        <Button className="startup-card_btn" asChild>
          <Link href={`/startup/${_id}`}>Details</Link>
        </Button>
      </div>
    </li>
  );
};

export default StartupCard;
