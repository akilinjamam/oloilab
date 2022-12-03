import React, { useState } from 'react';
import avatar from '../Avatar/unsplash_rDEOVtE7vOs.png'
import arrowSymbol from '../Avatar/ArrowsDownUp.png'
import './TableComponentOne.css'

const TableComponentOne = ({ data }) => {

    const [ok, setOk] = useState(false)
    const [number, setNumber] = useState(0)

    const handleCycle = () => {
        if (ok || !ok) {
            const total = number + 1;
            setNumber(total)
        }
        if (number === 2) {
            setNumber(0)
        }
    }

    const accendingData = [...data].sort((a, b) => a.person.name > b.person.name ? 1 : -1)
    const deccendingData = [...data].sort((a, b) => a.person.name > b.person.name ? -1 : 1)

    const accendedName = accendingData.map(a => {
        return (
            <tr>
                <td> <div className='oneTrDiv'> <img src={avatar} alt="" /> <span className='oneTrName'>{a.person.name}</span>  </div> </td>
                <td className='columnThree'><a className='color' href=""> {a.email}</a></td>
                <td>{a.role}</td>
            </tr>
        )
    })

    const deccendingName = deccendingData.map(d => {
        return (
            <tr>
                <td> <div className='oneTrDiv'> <img src={avatar} alt="" /> <span className='oneTrName'>{d.person.name}</span>  </div> </td>
                <td className='columnThree'><a className='color' href=""> {d.email}</a></td>
                <td>{d.role}</td>
            </tr>
        )
    })

    const defaultDataFlow = data.map(d =>
        <tr>
            <td> <div className='oneTrDiv'> <img src={avatar} alt="" /> <span className='oneTrName'>{d.person.name}</span>  </div> </td>
            <td className='columnThree'><a className='color' href=""> {d.email}</a></td>
            <td>{d.role}</td>
        </tr>
    )

    return (
        <div>
            <div className='mainBackground'>

                <div className='mainDivOne'>
                    <h2 style={{ marginBottom: '50px', marginLeft: '86px' }}>Part : 02</h2>

                    <h3 style={{ marginBottom: '50px', marginLeft: '90px' }}>Note : first time it will show default data as per as json file. whenever you will first time click on arrow updown-button, it will show ascending order of data flow then second time click on button, it will show  descending order of data flow, after the third click, it will show again default order of data flow. </h3>
                    <table className='mainOne'>
                        <tr>
                            <th><div className='oneThName'> <span>Name</span> <img onClick={() => handleCycle(setOk(!ok))} className='oneThImg' src={arrowSymbol} alt="" /></div></th>

                            <th className='columnThree'><div className='oneThName'> <span>Email Address</span> </div></th>

                            <th><div className='oneThName'> <span>Role</span></div></th>
                        </tr>

                        {
                            number === 0 && defaultDataFlow
                        }
                        {
                            number === 1 && accendedName
                        }
                        {
                            number === 2 && deccendingName
                        }

                    </table>
                </div>
            </div>
        </div>
    );
};

export default TableComponentOne;



