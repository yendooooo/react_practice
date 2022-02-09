import { Component } from "react";
import { Link } from 'react-router-dom';
import axios from 'axios';

class Editstudent extends Component
{
    state = {
        name: '',
        course : '',
        email : '',
        phone : ''
    }

    handleInput = (e) => {
        this.setState({
            [e.target.name] : e.target.value
        });
    }

    async compomentDidMount() {
        const student_id = this.props.match.params.id;
        const res = await axios.get(`/api/edit-student/${student_id}`);
    }

    saveStudent = async (e) => {
        e.preventDefault();
    } 

    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <div className="card">
                            <div className="card-header">
                                <h4>
                                    Add Students
                                    <Link to={'/'} className="btn btn-primary btn-sm float-end"> Back</Link>
                                </h4>
                            </div>
                            <div className="card-body">
                                <form onSubmit={this.saveStudent}>
                                    <div className="form-group-mb-3">
                                        <label>Student Name</label>
                                        <input type="text" name="name" onChange={this.handleInput} value={this.state.name} className="form-control" />
                                    </div>
                                    <div className="form-group-mb-3">
                                        <label>Student Course</label>
                                        <input type="text" name="course" onChange={this.handleInput} value={this.state.course} className="form-control" />
                                    </div>
                                    <div className="form-group-mb-3">
                                        <label>Student Email</label>
                                        <input type="text" name="email" onChange={this.handleInput} value={this.state.email} className="form-control" />
                                    </div>
                                    <div className="form-group-mb-3">
                                        <label>Student Phone</label>
                                        <input type="text" name="phone" onChange={this.handleInput} value={this.state.phone} className="form-control" />
                                    </div>

                                    <div className="form-group mb-3">
                                        <button type="submit" className="btn btn-primary">Save Student</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Editstudent;