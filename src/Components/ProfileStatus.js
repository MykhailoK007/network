import React from "react";


class ProfileStatus extends React.Component {
    state = {
        editMode: false,
        status: this.props.status
    }

    toggleEditMode(){
        this.setState({
            editMode: !this.state.editMode
        })
        this.props.updateStatus(this.state.status)
    }
    onStatusChange = (e) => {
            this.setState({
                status: e.currentTarget.value
            })
    }
    componentDidUpdate(prevProps, prevState) {
        if(prevState.state !== this.props.status){
            this.setState({
                status: this.props.status
            })
        }
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
                       value={this.state.status}
                       onBlur={this.toggleEditMode.bind(this)}
                       autoFocus={true}
                       onChange={this.onStatusChange}
                />
            </div>}
        </div>;
    }
}


export default ProfileStatus;