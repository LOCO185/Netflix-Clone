import "./List.scss";
import ListItem from "../ListItem/ListItem";

import ArrowBackIosOutlinedIcon from '@mui/icons-material/ArrowBackIosOutlined';
import ArrowForwardIosOutlinedIcon from '@mui/icons-material/ArrowForwardIosOutlined';

const List = () => {
  return <div className="list">
    <span className="listTitle">Continue to watch</span>
    <div className="wrapper">
        <ArrowBackIosOutlinedIcon className="sliderArrow left"/>
        <div className="container">
            <ListItem />
            <ListItem />
            <ListItem />
            <ListItem />
            <ListItem />
            <ListItem />
            <ListItem />
            <ListItem />
            <ListItem />
            <ListItem />
            <ListItem />
            <ListItem />
            <ListItem />
            <ListItem />
            <ListItem />
            <ListItem />
        </div>
        <ArrowForwardIosOutlinedIcon className="sliderArrow right"/>
    </div>
    </div>;
};

export default List;
