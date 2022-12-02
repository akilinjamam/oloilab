import React from 'react';
import avatar from '../Avatar/unsplash_rDEOVtE7vOs.png'
import arrowSymbol from '../Avatar/ArrowsDownUp.png'
import './TableComponentThree.css'

const TableComponentThree = ({ data }) => {
    return (
        <div>
            <div className='mainBackground'>

                <div className='mainDivThree'>
                    <table className='mainThree'>
                        <tr>
                            <th><div className='oneThName'> <span>Name</span> <img className='oneThImg' src={arrowSymbol} alt="" /></div></th>

                            <th><div className='oneThName'> <span>City</span> <img className='oneThImg' src={arrowSymbol} alt="" /></div></th>

                            <th><div className='oneThName'> <span>Joining Date</span> <img className='oneThImg' src={arrowSymbol} alt="" /></div></th>

                            <th><div className='oneThName'> <span>Role</span> <img className='oneThImg' src={arrowSymbol} alt="" /></div></th>
                        </tr>
                        {
                            data.map(d =>

                                <tr>
                                    <td> <div className='oneTrDiv'> <img src={avatar} alt="" /> <span className='oneTrName'>{d.person.name}</span>  </div> </td>
                                    <td>{d.city}</td>

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

export default TableComponentThree;