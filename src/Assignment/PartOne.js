import './PartOne.css'
import arrowSymbol from '../Avatar/ArrowsDownUp.png'
import avatar from '../Avatar/unsplash_rDEOVtE7vOs.png'
import { useState } from 'react';


const PartOne = ({ data }) => {

    const [mainNumber, setMainNumber] = useState(0)
    console.log(mainNumber)

    const [ok, setOk] = useState(false)
    const [numberName, setNumberName] = useState(1)
    const [numberCity, setNumberCity] = useState(3)
    const [numberEmail, setNumberEmail] = useState(7)
    const [numberDate, setNumberDate] = useState(15)
    const [numberRole, setNumberRole] = useState(31)

    const handleCycleName = () => {
        if (ok || !ok) {
            const total = numberName + 1;
            setNumberName(total)
            setMainNumber(numberName)
        }
        if (numberName === 2) {
            setNumberName(0)
        }
    }

    const handleCycleCity = () => {
        if (ok || !ok) {
            const total = numberCity + 3;
            setNumberCity(total)
            setMainNumber(numberCity)
        }
        if (numberCity === 6) {
            setNumberCity(0)
        }
    }

    const handleCycleEmail = () => {
        if (ok || !ok) {
            const total = numberEmail + 7;
            setNumberEmail(total)
            setMainNumber(numberEmail)
        }
        if (numberEmail === 14) {
            setNumberEmail(0)
        }
    }
    const handleCycleDate = () => {
        if (ok || !ok) {
            const total = numberDate + 15;
            setNumberDate(total)
            setMainNumber(numberDate)
        }
        if (numberDate === 30) {
            setNumberDate(0)
        }
    }
    const handleCycleRole = () => {

        if (ok || !ok) {
            const total = numberRole + 31;
            setNumberRole(total);
            setMainNumber(numberRole)
        }
        if (numberRole === 62) {
            setNumberRole(0)
        }
    }

    // data for sorting

    // ascending descending order for name
    const accendingDataName = [...data].sort((a, b) => a.person.name > b.person.name ? 1 : -1)
    const deccendingDataName = [...data].sort((a, b) => a.person.name > b.person.name ? -1 : 1)

    // ascending descending order for date
    const accendingDataDate = [...data].sort((a, b) => {
        a = a.joiningDate.split('/');
        b = b.joiningDate.split('/');
        return a[2] - b[2] || a[1] - b[1] || a[0] - b[0];
    })
    const deccendingDataDate = [...data].sort((a, b) => {
        a = a.joiningDate.split('/');
        b = b.joiningDate.split('/');
        return b[2] - a[2] || b[1] - a[1] || b[0] - a[0];
    })

    // ascending descending order for Role
    const accendingRoleDataRole = [...data].sort((a, b) => a.role > b.role ? 1 : -1);
    const deccendingRoleDataRole = [...data].sort((a, b) => a.role > b.role ? -1 : 1);

    // ascending descending order for city
    const accendingCityData = [...data].sort((a, b) => a.city > b.city ? 1 : -1)
    const deccendingCityData = [...data].sort((a, b) => a.city > b.city ? -1 : 1)



    // ascending descending order for email
    const accendingEmailData = [...data].sort((a, b) => a.email > b.email ? 1 : -1)
    const deccendingEmailData = [...data].sort((a, b) => a.email > b.email ? -1 : 1)


    // Default Data Flow 
    const defaultDataFlow = data.map(d =>

        <tr>
            <td> <div className='oneTrDiv'> <img src={avatar} alt="" /> <span className='oneTrName'>{d.person.name}</span>  </div> </td>
            <td>{d.city} </td>
            <td className='columnThree'><a className='color' href=""> {d.email}</a></td>
            <td>{d.joiningDate}</td>
            <td>{d.role}</td>
        </tr>
    )

    // ascending descending for name:

    const ascendedName = accendingDataName.map(a => {
        return (
            <tr>
                <td> <div className='oneTrDiv'> <img src={avatar} alt="" /> <span className='oneTrName'>{a.person.name}</span>  </div> </td>
                <td>{a.city} </td>
                <td className='columnThree'><a className='color' href=""> {a.email}</a></td>
                <td>{a.joiningDate}</td>
                <td>{a.role}</td>
            </tr>
        )
    })
    const descendedName = deccendingDataName.map(d => {
        return (
            <tr>
                <td> <div className='oneTrDiv'> <img src={avatar} alt="" /> <span className='oneTrName'>{d.person.name}</span>  </div> </td>
                <td>{d.city} </td>
                <td className='columnThree'><a className='color' href=""> {d.email}</a></td>
                <td>{d.joiningDate}</td>
                <td>{d.role}</td>
            </tr>
        )
    })

    // ascending descending for City

    const ascendedCity = accendingCityData.map(a => {
        return (
            <tr>
                <td> <div className='oneTrDiv'> <img src={avatar} alt="" /> <span className='oneTrName'>{a.person.name}</span>  </div> </td>
                <td>{a.city} </td>
                <td className='columnThree'><a className='color' href=""> {a.email}</a></td>
                <td>{a.joiningDate}</td>
                <td>{a.role}</td>
            </tr>
        )
    })
    const descendedCity = deccendingCityData.map(d => {
        return (
            <tr>
                <td> <div className='oneTrDiv'> <img src={avatar} alt="" /> <span className='oneTrName'>{d.person.name}</span>  </div> </td>
                <td>{d.city} </td>
                <td className='columnThree'><a className='color' href=""> {d.email}</a></td>
                <td>{d.joiningDate}</td>
                <td>{d.role}</td>
            </tr>
        )
    })

    // ascending descending order for Email

    const ascendedEmail = accendingEmailData.map(a => {
        return (
            <tr>
                <td> <div className='oneTrDiv'> <img src={avatar} alt="" /> <span className='oneTrName'>{a.person.name}</span>  </div> </td>
                <td>{a.city} </td>
                <td className='columnThree'><a className='color' href=""> {a.email}</a></td>
                <td>{a.joiningDate}</td>
                <td>{a.role}</td>
            </tr>
        )
    })
    const descendedEmail = deccendingEmailData.map(d => {
        return (
            <tr>
                <td> <div className='oneTrDiv'> <img src={avatar} alt="" /> <span className='oneTrName'>{d.person.name}</span>  </div> </td>
                <td>{d.city} </td>
                <td className='columnThree'><a className='color' href=""> {d.email}</a></td>
                <td>{d.joiningDate}</td>
                <td>{d.role}</td>
            </tr>
        )
    })

    // ascending descending order for joining Date

    const asccendedDate = accendingDataDate.map(a => {
        return (
            <tr>
                <td> <div className='oneTrDiv'> <img src={avatar} alt="" /> <span className='oneTrName'>{a.person.name}</span>  </div> </td>
                <td>{a.city} </td>
                <td className='columnThree'><a className='color' href=""> {a.email}</a></td>
                <td>{a.joiningDate}</td>
                <td>{a.role}</td>
            </tr>
        )
    })
    const desccendedDate = deccendingDataDate.map(d => {
        return (
            <tr>
                <td> <div className='oneTrDiv'> <img src={avatar} alt="" /> <span className='oneTrName'>{d.person.name}</span>  </div> </td>
                <td>{d.city} </td>
                <td className='columnThree'><a className='color' href=""> {d.email}</a></td>
                <td>{d.joiningDate}</td>
                <td>{d.role}</td>
            </tr>
        )
    })

    // ascending descending order for role

    const ascendedRole = accendingRoleDataRole.map(a => {
        return (
            <tr>
                <td> <div className='oneTrDiv'> <img src={avatar} alt="" /> <span className='oneTrName'>{a.person.name}</span>  </div> </td>
                <td>{a.city} </td>
                <td className='columnThree'><a className='color' href=""> {a.email}</a></td>
                <td>{a.joiningDate}</td>
                <td>{a.role}</td>
            </tr>
        )
    })
    const descendedRole = deccendingRoleDataRole.map(d => {
        return (
            <tr>
                <td> <div className='oneTrDiv'> <img src={avatar} alt="" /> <span className='oneTrName'>{d.person.name}</span>  </div> </td>
                <td>{d.city} </td>
                <td className='columnThree'><a className='color' href=""> {d.email}</a></td>
                <td>{d.joiningDate}</td>
                <td>{d.role}</td>
            </tr>
        )
    })
    return (
        <div>

            <div className='mainBackground'>

                <div className='mainDiv'>

                    <h2 style={{ marginBottom: '50px', marginLeft: '86px' }}>Part : 01</h2>
                    <table className='main'>
                        <tr>
                            <th><div className='oneThName'> <span>Name</span> <img onClick={() => handleCycleName(setOk(!ok))} className='oneThImg' src={arrowSymbol} alt="" /></div></th>

                            <th><div className='oneThName'> <span>City</span> <img onClick={() => handleCycleCity(setOk(!ok))} className='oneThImg' src={arrowSymbol} alt="" /></div></th>

                            <th className='columnThree'><div className='oneThName'> <span>Email Address</span> <img onClick={() => handleCycleEmail(setOk(!ok))} className='oneThImg' src={arrowSymbol} alt="" /></div></th>

                            <th><div className='oneThName'> <span>Joining Date</span> <img onClick={() => handleCycleDate(setOk(!ok))} className='oneThImg' src={arrowSymbol} alt="" /></div></th>

                            <th><div className='oneThName'> <span>Role</span> <img onClick={() => handleCycleRole(setOk(!ok))} className='oneThImg' src={arrowSymbol} alt="" /></div></th>
                        </tr>
                        {
                            mainNumber === 0 && defaultDataFlow
                        }
                        {
                            mainNumber === 1 && ascendedName
                        }
                        {
                            mainNumber === 2 && descendedName
                        }
                        {
                            mainNumber === 3 && ascendedCity
                        }
                        {
                            mainNumber === 6 && descendedCity
                        }
                        {
                            mainNumber === 7 && ascendedEmail
                        }
                        {
                            mainNumber === 14 && descendedEmail
                        }
                        {
                            mainNumber === 15 && asccendedDate
                        }
                        {
                            mainNumber === 30 && desccendedDate
                        }
                        {
                            mainNumber === 31 && ascendedRole
                        }
                        {
                            mainNumber === 62 && descendedRole
                        }
                    </table>
                </div>
            </div>
        </div>
    );
};

export default PartOne;