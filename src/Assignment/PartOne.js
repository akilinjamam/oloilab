import './PartOne.css'
import arrowSymbol from '../Avatar/ArrowsDownUp.png'
import avatar from '../Avatar/unsplash_rDEOVtE7vOs.png'


const PartOne = () => {

    return (
        <div>

            <div className='mainBackground'>

                <div className='mainDiv'>

                    <h2 style={{ marginBottom: '50px', marginLeft: '86px' }}>Part : 01</h2>
                    <table className='main'>
                        <tr>
                            <th><div className='oneThName'> <span>Name</span> <img className='oneThImg' src={arrowSymbol} alt="" /></div></th>

                            <th><div className='oneThName'> <span>City</span> <img className='oneThImg' src={arrowSymbol} alt="" /></div></th>

                            <th className='columnThree'><div className='oneThName'> <span>Email Address</span> <img className='oneThImg' src={arrowSymbol} alt="" /></div></th>

                            <th><div className='oneThName'> <span>Joining Date</span> <img className='oneThImg' src={arrowSymbol} alt="" /></div></th>

                            <th><div className='oneThName'> <span>Role</span> <img className='oneThImg' src={arrowSymbol} alt="" /></div></th>
                        </tr>
                        <tr>
                            <td> <div className='oneTrDiv'> <img src={avatar} alt="" /> <span className='oneTrName'>Prerna Jha</span>  </div> </td>
                            <td>Mumbai </td>
                            <td className='columnThree'><a className='color' href=""> prernajha@gmail.com</a></td>
                            <td>12/02/2018</td>
                            <td>UI Designer</td>
                        </tr>
                        <tr>
                            <td> <div className='oneTrDiv'> <img src={avatar} alt="" /> <span className='oneTrName'>Rukmini Pandit</span>  </div> </td>
                            <td>Delhi</td>
                            <td className='columnThree'><a className='color' href=""> rukiminipandit@gmail.com</a></td>
                            <td>09/02/2022</td>
                            <td>Front-end Developer</td>
                        </tr>
                        <tr>
                            <td> <div className='oneTrDiv'> <img src={avatar} alt="" /><span className='oneTrName'>Nandhini Lingesh</span></div></td>
                            <td>Delhi</td>
                            <td className='columnThree'><a className='color' href="">nandhinilingesh@gmail.com</a></td>
                            <td>30/06/2019</td>
                            <td>UX Designer</td>
                        </tr>
                        <tr>
                            <td> <div className='oneTrDiv'> <img src={avatar} alt="" /><span className='oneTrName'>Ankit Singh</span></div></td>
                            <td>Kolkata</td>
                            <td className='columnThree'><a className='color' href="">ankitsingh@gmail.com</a></td>
                            <td>11/11/2017</td>
                            <td>Backend Developer</td>
                        </tr>
                        <tr>
                            <td> <div className='oneTrDiv'> <img src={avatar} alt="" /><span className='oneTrName'>Amith Kumar</span></div></td>
                            <td>Mumbai</td>
                            <td className='columnThree'><a className='color' href="">amithkumar@gmail.com</a></td>
                            <td>24/07/2020</td>
                            <td>Front-end Developer</td>
                        </tr>
                        <tr>
                            <td> <div className='oneTrDiv'> <img src={avatar} alt="" /><span className='oneTrName'>Shalini Singhla	</span></div></td>
                            <td>Mumbai</td>
                            <td className='columnThree'><a className='color' href="">shalinisinghla@gmail.com</a></td>
                            <td>17/09/2017</td>
                            <td>UX Designer</td>
                        </tr>

                        <tr>
                            <td> <div className='oneTrDiv'> <img src={avatar} alt="" /><span className='oneTrName'>Abhishek Singh</span></div></td>
                            <td>Kolkata</td>
                            <td className='columnThree'><a className='color' href="">abhisheksingh@gmail.com</a></td>
                            <td>01/06/2017</td>
                            <td>Front-end Developer</td>
                        </tr>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default PartOne;