import React, {useEffect} from 'react';
import TaskSideBar from './TaskSideBar/index';
import TasksList from './TasksList';
import TaskDetail from './TaskDetail';
import {useDispatch} from 'react-redux';
import {
  onGetToDoFolderList,
  onGetToDoLabelList,
  onGetToDoPriorityList,
  onGetToDoStaffList,
  onGetToDoStatusList,
} from '../../../redux/actions';

import {useIntl} from 'react-intl';
import AppsContainer from '@crema/core/AppsContainer';
import clsx from 'clsx';
import {Box} from '@mui/material';
import {useRouter} from 'next/router';

const ToDo: React.FC<{}> = () => {
  const dispatch = useDispatch();
  const {query} = useRouter();
  let id = '';
  if (query!.all) {
    id = query!.all![query!.all!.length - 1];
  }

  useEffect(() => {
    dispatch(onGetToDoLabelList());
  }, [dispatch]);

  useEffect(() => {
    dispatch(onGetToDoFolderList());
  }, [dispatch]);

  useEffect(() => {
    dispatch(onGetToDoPriorityList());
  }, [dispatch]);

  useEffect(() => {
    dispatch(onGetToDoStaffList());
  }, [dispatch]);

  useEffect(() => {
    dispatch(onGetToDoStatusList());
  }, [dispatch]);

  const {messages} = useIntl();
  return (
    <AppsContainer
      title={messages['todo.todoApp']}
      sidebarContent={<TaskSideBar />}
    >
      <TasksList />
      <Box
        sx={{
          transition: 'all 0.5s ease',
          transform: 'translateX(100%)',
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          zIndex: 1,
          opacity: 0,
          visibility: 'hidden',
          backgroundColor: 'background.paper',
          '&.show': {
            transform: 'translateX(0)',
            opacity: 1,
            visibility: 'visible',
          },
        }}
        className={clsx({
          show: +id > 0,
        })}
      >
        <TaskDetail />
      </Box>
    </AppsContainer>
  );
};

export default ToDo;
