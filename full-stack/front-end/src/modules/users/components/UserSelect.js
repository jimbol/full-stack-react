import { Select, MenuItem, InputLabel, FormControl } from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import { currentUserActions } from '../slices';
import { getUsers, getCurrentUser } from '../selectors';

export const UserSelect = () => {
  const users = useSelector(getUsers);
  const currentUser = useSelector(getCurrentUser);
  const dispatch = useDispatch();

  return (
    <FormControl style={{ minWidth: 100 }} size="small">
      <InputLabel id="user-select-label">User</InputLabel>
      <Select
        labelId="user-select-label"
        label="User"
        value={currentUser}
        onChange={(e) => {
          dispatch(currentUserActions.setCurrentUser(e.target.value));
        }}
      >
        <MenuItem value="">
          <em>Pick User</em>
        </MenuItem>
        {
          users.map(user => (
            <MenuItem key={user} value={user}>{user}</MenuItem>
          ))
        }
      </Select>
    </FormControl>
  );
}
