import React, {createRef, useEffect} from 'react';
import MailDetailHeader from './MailDetailHeader';
import MailDetailBody from './MailDetailBody';
import {useDispatch, useSelector} from 'react-redux';
import {
  onGetSelectedMail,
  onNullifyMail,
  onUpdateReadStatus,
} from '../../../../redux/actions';
import AppsContent from '@crema/core/AppsContainer/AppsContent';
import AppsHeader from '@crema/core/AppsContainer/AppsHeader';
import AppAnimate from '@crema/core/AppAnimate';
import {MailDetailSkeleton} from '@crema/core/AppSkeleton/MailDetailSkeleton';
import Box from '@mui/material/Box';
import {AppState} from '../../../../redux/store';
import {useRouter} from 'next/router';

interface MailDetailProps {}

const MailDetail: React.FC<MailDetailProps> = () => {
  const dispatch = useDispatch();
  const contentRef = createRef();
  const router = useRouter();

  const {query} = router;
  let id = '';
  if (query!.all) {
    id = query!.all![query!.all!.length - 1];
  }

  const selectedMail = useSelector<AppState, AppState['mailApp']>(
    ({mailApp}) => mailApp,
  ).selectedMail;

  useEffect(() => {
    dispatch(onGetSelectedMail(+id));
    return () => {
      onNullifyMail();
    };
  }, [dispatch, +id]);

  useEffect(() => {
    if (selectedMail && !selectedMail.isRead) {
      dispatch(onUpdateReadStatus([selectedMail.id], true));
    }
  }, [dispatch, selectedMail]);

  if (!selectedMail) {
    return <MailDetailSkeleton />;
  }

  return (
    <Box
      sx={{
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
      }}
      ref={contentRef}
    >
      <AppsHeader>
        <MailDetailHeader selectedMail={selectedMail} />
      </AppsHeader>
      <AppsContent isDetailView>
        <AppAnimate animatoin='transition.slideUpIn'>
          <MailDetailBody selectedMail={selectedMail} />
        </AppAnimate>
      </AppsContent>
    </Box>
  );
};

export default MailDetail;
