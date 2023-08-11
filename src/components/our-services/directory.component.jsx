// Directory.jsx
import React from "react";
import DirectoryItem from "../ourservices-item/directory-item.component";
import { DirectoryContainer } from "./directory.styles.jsx";

const Directory = ({ categories }) => {
  return (
    <DirectoryContainer>
      {categories.map((category) => (
        <DirectoryItem
          key={category.id}
          category={category}
          route={`/category/${category.id}`}
        />
      ))}
    </DirectoryContainer>
  );
};

export default Directory;
