import { React, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Avtar from '../Assets/avtar.png'
import { DeleteAdmin, RemoveAdminFromCollege } from '../Moderator/Helper';
import SweetAlert from 'react-bootstrap-sweetalert';
import swal from 'sweetalert';
import ViewAdminModal from '../Moderator/ViewAdminModal';
import { Outlet } from 'react-router-dom';
const AdminCard = (props) => {
    const [alert, setAlert] = useState(false);
    const naviagte = useNavigate();
    const openEditAdmin = (e) => {
        e.preventDefault();
        naviagte('/ModeratorDashboard/Admins/EditAdmin', { state: props.data })
    }
    const deleteAdmin = (e) => {
        e && e.preventDefault();
        RemoveAdminFromCollege(props.collegeId, { id: props.data._id }).then((data) => {
            if (data?.error) {
                // window.alert('unable to remove user from hods')
                <SweetAlert
                            danger
                            title="Oops!"
                            timeout={2000}
                            showCancel = {false}
                            showConfirm = {false}
                        >
                            Unable to remove user from hods
                        </SweetAlert>
            } else {
                DeleteAdmin(props.data._id).then((data) => {
                    if (data?.error) {
                        // window.alert('unable to remove user from db')
                        <SweetAlert
                            danger
                            title="Oops!"
                            timeout={2000}
                            showCancel = {false}
                            showConfirm = {false}
                        >
                            Unable to remove user from db
                        </SweetAlert>
                    } else {
                        // window.alert('Removed Successfully')
                        props.refreshComponent(!props.refreshComponentState)
                    }
                }).catch((err) => console.log(err))
            }
        }).catch((err) => console.log(err))
    }
    return (
        <div>
            <div class="card-admin" key={props.key}>
                <div class="container-admin">
                    <img className="add-img" src={Avtar} alt="profile-img-admin" />
                    <h2>{props.name}</h2>
                    <small>{props.department}</small>
                    <div class="bar-admin">
                        <button onClick={openEditAdmin} className="btn btn-primary">Edit  <i class='bx bxs-edit'></i></button>
                        <button className="btn btn-success" data-bs-toggle="modal" data-bs-target="#viewAdminModal">View  <i class='bx bx-detail'></i></button>
                        <Outlet />
                        <ViewAdminModal />
                        {/* <button onClick={deleteAdmin} className="btn btn-danger">Delete <i class='bx bxs-trash' ></i></button> */}
                        <button onClick={() => { setAlert(true) }} className="btn btn-danger">Delete <i class='bx bxs-trash' ></i></button>
                        {/* {modalOpen && <Modal setOpenModal={setModalOpen} confirm={deleteAdmin} />}     */}
                        {alert && <SweetAlert
                            warning
                            showCancel
                            confirmBtnText="Yes, delete it!"
                            confirmBtnBsStyle="danger"
                            title={<span style={{ color: "black" }}>Delete Confirmation</span>}
                            onConfirm={(e) => deleteAdmin(e)}
                            onCancel={setAlert}
                            focusCancelBtn
                        >
                            Are you sure you want to delete this user?
                        </SweetAlert>
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AdminCard