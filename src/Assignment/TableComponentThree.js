import React, { useState } from 'react';
import avatar from '../Avatar/unsplash_rDEOVtE7vOs.png'
import arrowSymbol from '../Avatar/ArrowsDownUp.png'
import './TableComponentThree.css'

const TableComponentThree = ({ data }) => {

    const [mainNumber, setMainNumber] = useState(0)
    console.log(mainNumber)

    const [ok, setOk] = useState(false)
    const [number, setNumber] = useState(1)
    // console.log(number)
    const [numberRole, setNumberRole] = useState(3)

    // console.log(numberRole)

    const handleCycleCity = () => {
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


    const accendingCityData = [...data].sort((a, b) => a.city > b.city ? 1 : -1)
    const deccendingCityData = [...data].sort((a, b) => a.city > b.city ? -1 : 1)


    const accendingRoleData = [...data].sort((a, b) => a.city > b.role ? 1 : -1)
    const deccendingRoleData = [...data].sort((a, b) => a.city > b.role ? -1 : 1)


    const accendingCity = accendingCityData.map(a => {
        return (
            <tr>
                <td> <div className='oneTrDiv'> <img src={avatar} alt="" /> <span className='oneTrName'>{a.person.name}</span>  </div> </td>
                <td>{a.city}</td>

                <td>{a.joiningDate}</td>
                <td>{a.role}</td>
            </tr>

        )

    })


    const deccendingCity = deccendingCityData.map(d => {
        return (
            <tr>
                <td> <div className='oneTrDiv'> <img src={avatar} alt="" /> <span className='oneTrName'>{d.person.name}</span>  </div> </td>
                <td>{d.city}</td>
                <td>{d.joiningDate}</td>
                <td>{d.role}</td>
            </tr>

        )
    })


    const defaultDataFlow = data.map(d =>

        <tr>
            <td> <div className='oneTrDiv'> <img src={avatar} alt="" /> <span className='oneTrName'>{d.person.name}</span>  </div> </td>
            <td>{d.city}</td>
            <td>{d.joiningDate}</td>
            <td>{d.role}</td>
        </tr>

    )

    const accendingRole = accendingRoleData.map(a => {

        return (
            <tr>
                <td> <div className='oneTrDiv'> <img src={avatar} alt="" /> <span className='oneTrName'>{a.person.name}</span>  </div> </td>
                <td>{a.city}</td>
                <td>{a.joiningDate}</td>
                <td>{a.role}</td>
            </tr>
        )
    })

    const deccendingRole = deccendingRoleData.map(d => {
        return (
            <tr>
                <td> <div className='oneTrDiv'> <img src={avatar} alt="" /> <span className='oneTrName'>{d.person.name}</span>  </div> </td>
                <td>{d.city}</td>

                <td>{d.joiningDate}</td>
                <td>{d.role}</td>
            </tr>
        )
    })

    return (
        <div>
            <div className='mainBackground'>

                <div className='mainDivThree'>
                    <table className='mainThree'>
                        <tr>
                            <th><div className='oneThName'> <span>Name</span></div></th>

                            <th><div className='oneThName'> <span>City</span> <img onClick={() => handleCycleCity(setOk(!ok))} className='oneThImg' src={arrowSymbol} alt="" /></div></th>

                            <th><div className='oneThName'> <span>Joining Date</span></div></th>

                            <th><div className='oneThName'> <span>Role</span> <img onClick={() => handleCycleRole(setOk(!ok))} className='oneThImg' src={arrowSymbol} alt="" /></div></th>
                        </tr>
                        {
                            mainNumber === 0 && defaultDataFlow
                        }
                        {
                            mainNumber === 1 && accendingCity
                        }
                        {
                            mainNumber === 2 && deccendingCity
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

export default TableComponentThree;