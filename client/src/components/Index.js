import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { getInfo } from '../redux/slices/userSlice'
import Button from '@mui/material/Button';
import ClickAwayListener from '@mui/material/ClickAwayListener';
import Grow from '@mui/material/Grow';
import Paper from '@mui/material/Paper';
import Popper from '@mui/material/Popper';
import MenuItem from '@mui/material/MenuItem';
import MenuList from '@mui/material/MenuList';
import Stack from '@mui/material/Stack';
import {
  Link,
} from "react-router-dom";

function Index() {
  const [open, setOpen] = React.useState(false);
  const anchorRef = React.useRef(null);

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleClose = (event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }

    setOpen(false);
  };

  function handleListKeyDown(event) {
    if (event.key === 'Tab') {
      event.preventDefault();
      setOpen(false);
    } else if (event.key === 'Escape') {
      setOpen(false);
    }
  }

  // return focus to the button when we transitioned from !open -> open
  const prevOpen = React.useRef(open);
  React.useEffect(() => {
    if (prevOpen.current === true && open === false) {
      anchorRef.current.focus();
    }

    prevOpen.current = open;
  }, [open]);

  return (
    <Stack direction="row" spacing={2} item xs={3}>
      <Paper>
        <MenuList>
          <Link to={`/signin`}>
            <MenuItem>Вход</MenuItem>
          </Link>
          <Link to={`/signup`}>
            <MenuItem>Регистрация</MenuItem>
          </Link>
          <Link to={`/crm/vacancies`}>
            <MenuItem>Вакансии</MenuItem>
          </Link>
          <Link to={`/crm/chat`}>
            <MenuItem>Чаты</MenuItem>
          </Link>
          <Link to={`/crm/candidates`}>
            <MenuItem>Кандидаты</MenuItem>
          </Link>
          <Link to={`/crm/clients`}>
            <MenuItem>Клиенты</MenuItem>
          </Link>
        </MenuList>
      </Paper>
    </Stack>
  );
}

export default Index
