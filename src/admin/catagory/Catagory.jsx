import Widget from '../widget/Widget';
import './catagory.css'
const Catagory = ({ type }) => {
    return (
        <div className="home">
            <div className="widgets">
                <Widget type="user"/>
                <Widget type="order"/>
                <Widget type="earning"/>
                <Widget type="balance"/>
            </div>
        </div>
    )
}

export default Catagory;