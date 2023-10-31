"use-client";

const CatIcon = ({catData, cuisineType}) => {
    switch(cuisineType){
        case 'american':
            return <img src={catData} />;
        case 'british':
            return <img src={catData} />;
        case 'indian':
            return <img src={catData}/>;
        case 'korean':
            return <img src={catData}/>;
        case 'italian':
            return <img src={catData}/>;
        case 'world':
            return <img src={catData}/>;
        default:
            return <div>no cat</div>
    }

};

export default CatIcon;