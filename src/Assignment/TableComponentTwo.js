import React from 'react';
import './TableComponentTwo.css'
import arrowSymbol from '../Avatar/ArrowsDownUp.png'

const TableComponentTwo = ({ data }) => {
    return (
        <div>
            <div className='mainBackground'>

                <div className='mainDivTwo'>
                    <table className='mainTwo'>
                        <tr>

                            <th className='columnThree'><div className='oneThName'> <span>Email Address</span> <img className='oneThImg' src={arrowSymbol} alt="" /></div></th>

                            <th><div className='oneThName'> <span>Joining Date</span> <img className='oneThImg' src={arrowSymbol} alt="" /></div></th>

                            <th><div className='oneThName'> <span>Role</span> <img className='oneThImg' src={arrowSymbol} alt="" /></div></th>
                        </tr>

                        {
                            data.map(d =>

                                <tr>

                                    <td className='columnThree'><a className='color' href=""> {d.email}</a></td>
                                    <td>{d.joiningDate}</td>
                                    <td>{d.role}</td>
                                </tr>

                            )
                        }

                    </table>
                </div>
            </div>
        </div>
    );
};

export default TableComponentTwo;