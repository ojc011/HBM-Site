import {
  BackgroundImage,
  BodyLink,
  DirectoryItemContainer,
} from "./directory.item.styles.jsx";

const DirectoryItem = ({ category }) => {
  const { imageUrl, title } = category;

  return (
    <DirectoryItemContainer id="services">
      <BackgroundImage
        style={{
          backgroundImage: `url(${imageUrl})`,
        }}
      />
      <BodyLink>
        <div>
          <h2>{title}</h2>
        </div>
      </BodyLink>
    </DirectoryItemContainer>
  );
};

export default DirectoryItem;
