import React from "react";
import { connect } from 'react-redux';
import * as usersListActions from './usersList.actions.js';
import User from "./User.jsx";
import Pagination from "./Pagination.jsx";
import "./usersList.scss";

class UsersList extends React.Component {
  render() {
    const { usersList, currentPage, goPrev, goNext } = this.props;
    
    const totalItems = usersList.length;
    const startItem = currentPage > 0 ? currentPage * 3 : 0;
    const endItem = startItem + 3;
    const displayList = usersList.slice(startItem, endItem);

    return (
      <div>
        <Pagination
          goPrev={goPrev}
          goNext={goNext}
          currentPage={currentPage}
          totalItems={totalItems}
        />

        <ul className="users">
          {displayList.map((user) => (
            <User key={user.id} {...user} />
          ))}
        </ul>
      </div>
    );
  }
}

const mapState = (state) => {
  return {
    usersList: state.users.usersList,
    currentPage: state.users.currentPage
  }
}

const mapDispatch = {
  goPrev: usersListActions.goPrev,
  goNext: usersListActions.goNext
}

export default connect(mapState, mapDispatch)(UsersList);