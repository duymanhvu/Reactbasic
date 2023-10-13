import {Modal, Button, Form} from 'react-bootstrap';
import { useState } from 'react';
import { postCreateUser} from '../Services/UserService';
import {  toast } from 'react-toastify';


const ModalAddNew = (props) => {
    const {show, handleClose, handleUpdateTable} = props;

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

    const handleSaveUser = async () => {
    
       
       let res = await postCreateUser(firstname, company, lastname, status, phone, date, email, website, gender, language);

       console.log(res);
       if (res && res.id) {
            handleClose();
            setFirstName('');
            setLastName('');
            setCompany('');
            setStatus('');
            setPhone('');
            setDate('');
            setEmail('');
            setWebsite(''); 
            setGender('');
            setLanguage('');
            toast.success('a user is created is succeeded!');
            handleUpdateTable({first_name: firstname,last_name: lastname, company: company,
                status: status, phone: phone, date: date, email: email, website: website, gender: gender, language: language , id: res.id});

            //success
       } else {
            //error
            toast.error('an error occurred')
       }
    }

    

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
                <Modal.Title>Add New Users</Modal.Title>
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
                <Button variant="primary" onClick={() => handleSaveUser()}>
                    Save Changes
                </Button>
                </Modal.Footer>
            </Modal>
        
        
        </>
    )
}

export default ModalAddNew