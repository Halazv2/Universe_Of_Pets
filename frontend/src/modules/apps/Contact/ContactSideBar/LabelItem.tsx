import React from 'react';
import LabelOutlinedIcon from '@mui/icons-material/LabelOutlined';
import ListItemText from '@mui/material/ListItemText';
import ListItem from '@mui/material/ListItem';
import {LabelObj} from '../../../../types/models/apps/Contact';
import {alpha, styled} from '@mui/material/styles';
import {Fonts} from '../../../../shared/constants/AppEnums';
import Link from 'next/link';
import clsx from 'clsx';
import {useRouter} from 'next/router';

const ContactSidebarListItemWrapper = styled(ListItem)(({theme}) => {
  return {
    paddingTop: 5,
    paddingBottom: 5,
    paddingLeft: 16,
    paddingRight: 16,
    borderRadius: '0 30px 30px 0',
    marginBottom: 1,
    cursor: 'pointer',
    marginTop: 1,
    color: theme.palette.text.primary,

    [theme.breakpoints.up('md')]: {
      paddingLeft: 20,
      paddingRight: 20,
    },
    [theme.breakpoints.up('lg')]: {
      paddingLeft: 24,
      paddingRight: 24,
    },

    '& .MuiSvgIcon-root': {
      marginRight: 14,
      fontSize: 20,
    },

    '&:hover,&:focus,&.active': {
      backgroundColor: alpha(theme.palette.primary.main, 0.1),
      color: theme.palette.primary.main,
    },

    '&.active': {
      color: theme.palette.primary.main,
      '& $listItemText': {
        '& .MuiTypography-body1': {
          fontWeight: Fonts.SEMI_BOLD,
        },
      },
    },
  };
});

interface LabelItemProps {
  label: LabelObj;
}

const LabelItem: React.FC<LabelItemProps> = ({label}) => {
  const {query} = useRouter();
  return (
    <Link href={`/apps/contact/label/${label.alias}`}>
      <ContactSidebarListItemWrapper
        key={label.id}
        className={clsx({
          active: label.alias === query?.all?.[1],
        })}
      >
        <LabelOutlinedIcon style={{color: `${label.color}`}} />
        <ListItemText
          sx={{
            '& .MuiTypography-body1': {
              fontSize: 14,
            },
          }}
          primary={label.name}
        />
      </ContactSidebarListItemWrapper>
    </Link>
  );
};

export default LabelItem;
