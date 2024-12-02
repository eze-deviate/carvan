import React from "react";
import ProfileReviewItem from "./profile-review-item";

type Props = {};

const ProfileReviewContent = (props: Props) => {
  return (
    <div className="flex flex-col gap-y-8">
      <h2 className="font-semibold text-gray-900 text-3xl">Reviews</h2>
      <div className="flex flex-col gap-y-6">
        {Array(8)
          .fill(0)
          .map((product) => (
            <ProfileReviewItem />
          ))}
      </div>
    </div>
  );
};

export default ProfileReviewContent;
