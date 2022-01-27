import { useTranslation } from 'react-i18next';
import { Icon } from '@iconify/react';
import { useRef, useState, useEffect } from 'react';
import homeFill from '@iconify/icons-eva/home-fill';
import lockFill from '@iconify/icons-eva/lock-fill';
import personFill from '@iconify/icons-eva/person-fill';
import settings2Fill from '@iconify/icons-eva/settings-2-fill';
import { Link as RouterLink, useNavigate } from 'react-router-dom';
// material
import { alpha } from '@mui/material/styles';
import { Stack, Button, Box, Divider, MenuItem, Typography, TextField } from '@mui/material';
// components
import { MIconButton } from '../../components/@material-extend';
import MenuPopover from '../../components/MenuPopover';
import SettingMode from '../../components/settings/SettingMode';
import { logout } from '../../utils/auth-service';
import { LANGUAGES, LANGUAGE_CODES, LANGUAGES_CODES_RTL_ORIENTATION } from '../../utils/constants';
import useSettings from '../../hooks/useSettings';

// ----------------------------------------------------------------------

const MENU_OPTIONS = [
  { label: 'Change Password', icon: lockFill, linkTo: '/' }
  // { label: 'Profile', icon: personFill, linkTo: '#' },
  // { label: 'Settings', icon: settings2Fill, linkTo: '#' }
];

// ----------------------------------------------------------------------

export default function AccountPopover() {
  const { onChangeDirection, onChangeLang } = useSettings();
  const { t, i18n } = useTranslation();
  const { EN, AR } = LANGUAGE_CODES;
  const [language, setLanguage] = useState(EN);
  const navigate = useNavigate();
  const anchorRef = useRef(null);
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const logoutHandler = async () => {
    const loginStatus = await logout();
    if (loginStatus === true) {
      navigate('/login');
    }
  };

  const handleChangeLanguage = (event) => {
    setLanguage(event.target.value);
  };

  useEffect(() => {
    onChangeDirection({ target: { value: LANGUAGES_CODES_RTL_ORIENTATION.includes(language) ? 'rtl' : 'ltr' } });
    i18n.changeLanguage(language);
    onChangeLang(language);
  }, [language]);
  return (
    <>
      <Stack direction="row" spacing={2} sx={{ textAlign: 'center', alignItems: 'center' }}>
        <Typography variant="subtitle1" sx={{ color: 'text.secondary', mx: 1 }} noWrap>
          Thomsan Johnson
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }} noWrap>
          (Admin)
        </Typography>
        <Button onClick={logoutHandler} color="secondary">
          {t('Logout')}
        </Button>
        <Typography
          onClick={() => navigate('/administration')}
          variant="subtitle1"
          sx={{ color: 'text.secondary' }}
          style={{ cursor: 'pointer' }}
          noWrap
        >
          {t('administration.administration')}
        </Typography>
      </Stack>
      <MIconButton
        ref={anchorRef}
        onClick={handleOpen}
        sx={{
          padding: 0,
          width: 44,
          height: 44,
          ...(open && {
            '&:before': {
              zIndex: 1,
              content: "''",
              width: '100%',
              height: '100%',
              borderRadius: '50%',
              position: 'absolute',
              bgcolor: (theme) => alpha(theme.palette.grey[900], 0.72)
            }
          })
        }}
      >
        {/* <Avatar alt="My Avatar" src="/static/mock-images/avatars/avatar_default.jpg" /> */}
        <Box component={Icon} icon={settings2Fill} />
      </MIconButton>

      <MenuPopover open={open} onClose={handleClose} anchorEl={anchorRef.current} sx={{ width: 220 }}>
        <Divider sx={{ my: 1 }} />

        {MENU_OPTIONS.map((option) => (
          <MenuItem
            key={option.label}
            to={option.linkTo}
            component={RouterLink}
            onClick={handleClose}
            sx={{ typography: 'body2', py: 1, px: 2.5 }}
          >
            <Box
              component={Icon}
              icon={option.icon}
              sx={{
                mr: 2,
                width: 24,
                height: 24
              }}
            />

            {t([option.label])}
          </MenuItem>
        ))}
        <MenuItem>
          <Stack direction={{ xs: 'column', sm: 'row' }} spacing={{ xs: 3, sm: 2 }}>
            <TextField
              size="small"
              select
              fullWidth
              label={t('Navbar.Language')}
              placeholder={t('Navbar.Language')}
              SelectProps={{ native: true }}
              onChange={handleChangeLanguage}
              value={language}
              sx={{ ml: '10px', height: '30px' }}
            >
              {LANGUAGES.map((lang) => (
                <option key={lang.val} value={lang.val}>
                  {lang.name}
                </option>
              ))}
            </TextField>
          </Stack>
        </MenuItem>
        <Box sx={{ p: 2, pt: 1.5 }}>
          <SettingMode />
        </Box>
      </MenuPopover>
    </>
  );
}
