import { BackgroundImage, BodyLink, DirectoryItemContainer } from "./directory.item.styles.jsx";

const DirectoryItem = ({ category }) => {
    const { imageUrl, title } = category;

    return (
        <DirectoryItemContainer>
            <BackgroundImage
            style={{
                backgroundImage: `url(${imageUrl})`,
            }}
            />
            <BodyLink>
                <div>
                    <h2>{title}</h2>
                    <p>More info</p>
                </div>
            </BodyLink>
        </DirectoryItemContainer>
    )
}

export default DirectoryItem;