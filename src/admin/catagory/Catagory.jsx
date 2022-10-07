import Widget from '../widget/Widget';
import './catagory.css'
import Chart from '../Chart/Chart';
const Catagory = ({ type }) => {
    return (
        <div className="home">
            <div className="widgets">
                <Widget type="user"/>
                <Widget type="order"/>
                <Widget type="earning"/>
                <Widget type="balance"/>
            </div>
            <Chart />
        </div>
    )
}

export default Catagory;