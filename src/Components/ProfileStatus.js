import React from "react";


class ProfileStatus extends React.Component{
    state = {
        editMode:false
    }

    toggleEditMode(){
        this.setState({
            editMode: !this.state.editMode
        })
    }
    render() {
        return <div>
            {!this.state.editMode &&
            <div>
                <span onClick={this.toggleEditMode.bind(this)}>{this.props.status}</span>
            </div>}
            {this.state.editMode &&
            <div>
                <input type="text"
                       value={this.props.status}
                       onBlur={this.toggleEditMode.bind(this)}
                       autoFocus={true}
                />
            </div>}
        </div>;
    }
}


export default ProfileStatus;