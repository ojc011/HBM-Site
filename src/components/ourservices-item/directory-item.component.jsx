// DirectoryItem.jsx
import React from "react";
import {
  BackgroundImage,
  DirectoryItemContainer,
  BodyLink,
} from "./directory.item.styles.jsx";

const DirectoryItem = ({ category, route }) => {
  const { imageurl, title } = category;

  return (
    <DirectoryItemContainer id="services">
      <BackgroundImage imageurl={imageurl} />
      <BodyLink to={route}>
        <div>
          <h2>{title}</h2>
        </div>
      </BodyLink>
    </DirectoryItemContainer>
  );
};

export default DirectoryItem;
