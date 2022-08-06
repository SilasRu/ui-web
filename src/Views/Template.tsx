import './Template.css'
import Widget from "src/Components/Widget/widget"
import Featured from 'src/Components/Featured/Featured'
import Chart from 'src/Components/Chart/Chart'
import Table from 'src/Components/Table/Table'

const Template = () => {
    return (
        <div>
            <div className='widgets'>
            <Widget type='user'/>
            <Widget type='order'/>
            <Widget type='earning'/>
            <Widget type='balance'/>
        </div>
        <div className="charts">
            <Featured/>
            <Chart/>
        </div>
        <div className="listContainer">
            <div className="listTitle">Latest Transactions</div>
            <Table/>
        </div>
        </div>
        
    )
}

export default Template