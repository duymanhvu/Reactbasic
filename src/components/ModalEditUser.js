import {Modal, Button, Form} from 'react-bootstrap';
import { useEffect, useState } from 'react';
import { putUpdateUser} from '../Services/UserService';
import {  toast } from 'react-toastify';


const ModalEditUser = (props) => {
    const {show, handleClose, dataUserEdit, handleEditUserFromModal} = props;
    const [firstname, setFirstName] = useState("");
    const [lastname, setLastName] = useState("");
    const [company, setCompany] = useState("");
    const [status, setStatus] = useState("");
    const [phone, setPhone] = useState("");
    const [date, setDate] = useState("");
    const [email, setEmail] = useState("");
    const [website, setWebsite] = useState("");
    const [gender, setGender] = useState("");
    const [language, setLanguage] = useState("");

   

    const handleEditUser = async () => {
       let res = await putUpdateUser(firstname,lastname,company,status,phone,email,website,gender,language);
       console.log(res);
       if(res) {
        //success
        handleEditUserFromModal({
            first_name: firstname,
            last_name: lastname,
            company: company,
            status: status,
            phone: phone,
            date: date,
            email: email,
            website: website,
            gender: gender,
            language: language,
            id: dataUserEdit.id
        })

        handleClose();
        toast.success("Edit User Success!");
       }
    }


    useEffect(() => {
        if(show) {
            setFirstName(dataUserEdit.first_name);
            setLastName(dataUserEdit.last_name);
            setCompany(dataUserEdit.company);
            setStatus(dataUserEdit.status);
            setPhone(dataUserEdit.phone);
            setDate(dataUserEdit.date);
            setEmail(dataUserEdit.email);
            setWebsite(dataUserEdit.website);
            setGender(dataUserEdit.gender);
            setLanguage(dataUserEdit.language);
        }
    }, [dataUserEdit] )

    const handleCheckboxChange = (e) => {
        const value = e.target.value;
    
        setLanguage((prevSelected) => {
        if (prevSelected.includes(value)) {
            return prevSelected.filter((item) => item !== value);
        } else {
            return [...prevSelected, value];
        }
        });
    };
    

    return (
        <>
            <Modal 
                show={show} 
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
            >
                <Modal.Header closeButton>
                <Modal.Title>Edit A Users</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className='body-add-new'>
                    
                        <Form.Group className="mb-3" >
                            <Form.Label>First Name</Form.Label>
                            <Form.Control type="text" 
                                value={firstname}
                                onChange={(event) => setFirstName(event.target.value)}
                            />
                            
                        </Form.Group>

                        <Form.Group className="mb-3" >
                            <Form.Label>Last Name</Form.Label>
                            <Form.Control type="text" 
                                value={lastname}
                                onChange={(event) => setLastName(event.target.value)}
                            />
                            
                        </Form.Group>

                        <Form.Group className="mb-3" >
                            <Form.Label>Company</Form.Label>
                            <Form.Control type="text" 
                                value={company}
                                onChange={(event) => setCompany(event.target.value)}
                            />
                        </Form.Group>

                        <Form.Group className="mb-3" >
                            <Form.Label>Status</Form.Label>
                            <Form.Control type="text" 
                                value={status}
                                onChange={(event) => setStatus(event.target.value)}
                            />
                        </Form.Group>

                        <Form.Group className="mb-3" >
                            <Form.Label>Phone Number</Form.Label>
                            <Form.Control type="number" 
                                value={phone}
                                onChange={(event) => setPhone(event.target.value)}
                            />
                        </Form.Group>

                        <Form.Group className="mb-3" >
                            <Form.Label>Date of Birth</Form.Label>
                            <Form.Control type="date" 
                                value={date}
                                onChange={(event) => setDate(event.target.value)}
                            />
                        </Form.Group>

                        <Form.Group className="mb-3" >
                            <Form.Label>Email Address</Form.Label>
                            <Form.Control type="email" 
                                value={email}
                                onChange={(event) => setEmail(event.target.value)}
                            />
                        </Form.Group>

                        <Form.Group className="mb-3" >
                            <Form.Label>Your Website</Form.Label>
                            <Form.Control type="text" 
                                value={website}
                                onChange={(event) => setWebsite(event.target.value)}
                            />
                        </Form.Group>

                        <Form.Group className="mb-3" >
                            <Form.Label>Gender</Form.Label>
                            <Form.Check
                                type="checkbox"
                                label="Male"
                                value="male"
                                checked={gender === 'male'}
                                onChange={(event) => setGender(event.target.value)}
                            />
                            <Form.Check
                                type="checkbox"
                                label="Female"
                                value="female"
                                checked={gender === 'female'}
                                onChange={(event) => setGender(event.target.value)}
                            />
                           
                        </Form.Group>

                        <Form.Group className="mb-3" >
                        <Form.Label>Languages</Form.Label>
                        <Form.Check
                            type="checkbox"
                            label="HTML/CSS"
                            value="HTML/CSS "
                            checked={language.includes('HTML/CSS ')}
                            onChange={handleCheckboxChange}
                        />

                        <Form.Check
                            type="checkbox"
                            label="JavaScript"
                            value="JavaScript "
                            checked={language.includes('JavaScript ')}
                            onChange={handleCheckboxChange}
                        />
                        <Form.Check
                            type="checkbox"
                            label="ReactJS"
                            value="ReactJS "
                            checked={language.includes('ReactJS ')}
                            onChange={handleCheckboxChange}
                        />
                        <Form.Check
                            type="checkbox"
                            label="C#"
                            value="C# "
                            checked={language.includes('C# ')}
                            onChange={handleCheckboxChange}
                        />
                        <Form.Check
                            type="checkbox"
                            label="Node JS"
                            value="Node JS "
                            checked={language.includes('Node JS ')}
                            onChange={handleCheckboxChange}
                        />
                        </Form.Group>
                
                    </div>
                </Modal.Body>
                <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Close
                </Button>
                <Button variant="primary" onClick={() => handleEditUser()}>
                    Confirm
                </Button>
                </Modal.Footer>
            </Modal>
        
        
        </>
    )
}

export default ModalEditUser