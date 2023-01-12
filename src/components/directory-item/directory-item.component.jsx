import {BackgroundImage, Body, DirectoryItemContaier } from './directory-item.style.jsx'
import { useNavigate } from 'react-router-dom';

const DirectoryItem = ({category}) => {
    const {imageUrl, title, route} = category;
    const navigate = useNavigate();

    const onNavigateHandler = () => navigate(route);

    return (
        <DirectoryItemContaier onClick={onNavigateHandler}>
            <BackgroundImage imageUrl= {imageUrl}/>
            <Body>
                <h2> {title} </h2>
                <p> Shop now </p>
            </Body>
        </DirectoryItemContaier>
    )
} 

export default DirectoryItem