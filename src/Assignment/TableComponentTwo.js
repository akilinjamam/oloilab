import React, { useState } from 'react';
import './TableComponentTwo.css'
import arrowSymbol from '../Avatar/ArrowsDownUp.png'

const TableComponentTwo = ({ data }) => {

    const [mainNumber, setMainNumber] = useState(0)
    console.log(mainNumber)

    const [ok, setOk] = useState(false)
    const [number, setNumber] = useState(1)
    // console.log(number)
    const [numberRole, setNumberRole] = useState(3)

    // console.log(numberRole)

    const handleCycleDate = () => {
        if (ok || !ok) {
            const total = number + 1;
            setNumber(total)
            setMainNumber(number)
        }
        if (number === 2) {
            setNumber(0)
        }
    }

    const handleCycleRole = () => {

        if (ok || !ok) {
            const total = numberRole + 3;
            setNumberRole(total);
            setMainNumber(numberRole)
        }
        if (numberRole === 6) {
            setNumberRole(0)
        }
    }

    const accendingData = [...data].sort((a, b) => {
        a = a.joiningDate.split('/');
        b = b.joiningDate.split('/');
        return a[2] - b[2] || a[1] - b[1] || a[0] - b[0];
    })
    const deccendingData = [...data].sort((a, b) => {
        a = a.joiningDate.split('/');
        b = b.joiningDate.split('/');
        return b[2] - a[2] || b[1] - a[1] || b[0] - a[0];
    })

    const accendingRoleData = [...data].sort((a, b) => a.role > b.role ? 1 : -1);
    const deccendingRoleData = [...data].sort((a, b) => a.role > b.role ? -1 : 1);

    // accending deccending role
    const accendingRole = accendingRoleData.map(a => {
        return (
            <tr >
                <td className='columnThree'><a className='color' href=""> {a.email}</a></td>
                <td>{a.joiningDate}</td>
                <td>{a.role}</td>
            </tr>
        )
    })

    const deccendingRole = deccendingRoleData.map(d => {
        return (
            <tr>
                <td className='columnThree'><a className='color' href=""> {d.email}</a></td>
                <td>{d.joiningDate}</td>
                <td>{d.role}</td>
            </tr>
        )
    })


    // Default Data Flow 
    const defaultDataFlow = data.map(d =>
        <tr>
            <td className='columnThree'><a className='color' href=""> {d.email}</a></td>
            <td>{d.joiningDate}</td>
            <td>{d.role}</td>
        </tr>
    )
    // accending deccending Date
    const accendingDate = accendingData.map(a => {
        return (
            <tr>
                <td className='columnThree'><a className='color' href=""> {a.email}</a></td>
                <td>{a.joiningDate}</td>
                <td>{a.role}</td>
            </tr>
        )
    })

    const deccendingDate = deccendingData.map(d => {
        return (
            <tr>
                <td className='columnThree'><a className='color' href=""> {d.email}</a></td>
                <td>{d.joiningDate}</td>
                <td>{d.role}</td>
            </tr>
        )
    })


    return (
        <div>
            <div className='mainBackground'>

                <div className='mainDivTwo'>
                    <table className='mainTwo'>
                        <tr>

                            <th className='columnThree'><div className='oneThName'> <span>Email Address</span></div></th>

                            <th><div className='oneThName'> <span>Joining Date</span> <img onClick={() => handleCycleDate(setOk(!ok))} className='oneThImg' src={arrowSymbol} alt="" /></div></th>

                            <th><div className='oneThName'> <span>Role</span> <img onClick={() => handleCycleRole(setOk(!ok))} className='oneThImg' src={arrowSymbol} alt="" /></div></th>
                        </tr>

                        {
                            mainNumber === 0 && defaultDataFlow
                        }
                        {
                            mainNumber === 1 && accendingDate
                        }
                        {
                            mainNumber === 2 && deccendingDate
                        }
                        {
                            mainNumber === 3 && accendingRole
                        }
                        {
                            mainNumber === 6 && deccendingRole
                        }


                    </table>
                </div>
            </div>
        </div>
    );
};

export default TableComponentTwo;