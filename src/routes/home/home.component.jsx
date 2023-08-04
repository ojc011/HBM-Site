import Directory from '../../components/directory/directory.component'

const Home = () => {
    const categories = [
        {
            id: 1,
            title: 'Flat Commercial Roofing',
            imageUrl: 'https://i.imgur.com/PF4BcXm.png',
        },
        {
            id: 2,
            title: 'Steep Architectural Roofing',
            imageUrl: 'https://i.imgur.com/3zaa21Y.png',
        },{
            id: 3,
            title: 'Masonry Restoration',
            imageUrl: 'https://i.imgur.com/oUs8oJ0.png',
        },{
            id: 4,
            title: 'Slate Roofing',
            imageUrl: 'https://i.imgur.com/xRIVxHC.jpg',
        },{
            id: 5,
            title: 'Waterproofing',
            imageUrl: 'https://i.imgur.com/XBkbK5Y.jpg',
        },{
            id: 6,
            title: 'Emergency Maintenance',
            imageUrl: 'https://i.imgur.com/55uJioc.jpg',
        },
    ];
    return <Directory categories={categories} />;
};

export default Home;