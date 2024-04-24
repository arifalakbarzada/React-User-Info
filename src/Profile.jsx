import Address from  './Address';
import Name from  './Name';
import PersonalInfo from './Personal';
import Email from  "./Email";
import './index.css'
function Profile() {
    return (
        <div className='content'>
        <Name />
        <Email />
        <Address />
        <PersonalInfo />
        </div>
    )
}
export default Profile;